let Uint8ArrayToString = function (fileData) {
    let dataString = "";
    for (let i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString
}

let stringToUint8Array = function (str) {
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }

    let tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}
let getLength = function(obj){
    let count = 0;
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            count++;
        }
    }
    return count;　　
}

/**
 * 请求回调
 * @class NetworkCallback
 */
class NetworkCallback {
    request: string = undefined;

    /**
     *请求回调对方法
     *
     * @type {Function}
     * @memberof NetworkCallback
     */
    callback: Function = undefined;

    init(request: string, callback: Function){
        this.request = request;
        this.callback = callback;
    }
}

class GNetwork {

    g_ws: GWebSocket = null;

    _networkCallbacks = {};

    _eventhandlerList = {};

    _mSendmsgCache = {};

    is_socket_close: boolean = null;

    private xxtea: XXTea = null;

    constructor() {
        this.g_ws = null;
        this.xxtea = new XXTea();
        this.is_socket_close = false;
        this._networkCallbacks = {};
        this._eventhandlerList = {};
        this._mSendmsgCache = {};
    }

    addGlobalMsgHandler(target: any, handler: Function){
        this._eventhandlerList[target] = handler;
    }

    removeGlobalMsghandler(target: any) {
        this._eventhandlerList[target] = undefined;
    }
    
    /**
     * 判断socket已连接成功，可以通信
     * @returns {boolean}
     */
    isSocketOpened(): boolean{
        return (this.g_ws.webSocket!=null && !this.is_socket_close);
    }

    isSocketClosed(): boolean{
        return (this.g_ws.webSocket==null || this.is_socket_close);
    }

    msgUpdate(){
        if (this.isSocketOpened() && (!this.is_socket_close)) {
            if (getLength(this._mSendmsgCache) > 0) {
                for (let i in this._mSendmsgCache) {
                    if (this._mSendmsgCache.hasOwnProperty(i) && this._mSendmsgCache[i] != undefined) {
                        this.g_ws.send(this._mSendmsgCache[i]);
                        this._mSendmsgCache[i] = undefined;
                    }
                }
            }
        }
    }

    /**
     * 连接服务器
     *
     * @param {string} host
     * @param {number} port
     * @memberof GNetwork
     */
    connect(host: string, port: number){
        this.g_ws = new GWebSocket();
        this.g_ws.init(host, port);
        this.g_ws.receiveMessage = this.onReceiveMessage.bind(this);
        this.g_ws.socketOpen = this.onSocketOpen.bind(this);
        this.g_ws.socketClose = this.onSocketClose.bind(this);
        this.g_ws.socketError = this.onSocketError.bind(this);
        this.g_ws.connect();
    }

    private onSocketOpen(){
        this.is_socket_close = false;
    }

    private onSocketClose(){
        this.is_socket_close = true;
        if (this.g_ws.webSocket) {
            this.g_ws.webSocket.close();
            this.g_ws.webSocket = null;
        }
    }

    private onSocketError(){
        this.is_socket_close = true;
        if (this.g_ws.webSocket) {
            this.g_ws.webSocket.close();
            this.g_ws.webSocket = null;
        }
    }

    private onReceiveMessage(data: Uint8Array){
        let resultData = data
        //解密
        let ss = _Uint8ArrayToString(resultData);
        ss = this.xxtea.decrypt(ss);
        resultData = _stringToUint8Array(ss);

        // 提取前两个字节，包头长度
        let headLength = 0;
        let bNum = (resultData[0] & 0xff) << 8;
        let sNum = (resultData[1] & 0xff);
        headLength = bNum + sNum;
        let headData = resultData.slice(2, 2 + headLength)
        let bodyData = resultData.slice(2 + headLength, resultData.byteLength)

        let headMsg: GameMsg.ClientMsgHead = GameMsg.ClientMsgHead.decode(headData);
        console.log('headmsg: ', headMsg);
        let msgname = headMsg.msgname;
        if (GameMsg[msgname] == null) {
            console.log("msg out!  name: ", msgname);
            return
        }

        let bodyMsg: any = GameMsg[msgname].decode(bodyData)
        console.log('bodymsg', bodyMsg);

        //首先处理全局回调，因为有些全局变量需要首先赋值,后面再具体做处理
        for (let key in this._eventhandlerList) {
            this._eventhandlerList[key](msgname, bodyMsg);
        }

        // request回调
        let callbackObj = this._networkCallbacks[headMsg.msgname];
        if (callbackObj) {
            callbackObj.callback(bodyMsg);
        }
    }

    sendRequest(req: {name: string, body: Object}, opt_callback?: Function){
        if (opt_callback) {
            let reqname = req.name
            let resname = reqname.substring(0,reqname.length-1)+"s"
            this._networkCallbacks[resname] = new NetworkCallback();
            this._networkCallbacks[resname].init(req, opt_callback);
        }
        this._sendSocketRequest(req);
    }

    private _sendSocketRequest(req: {name: string, body: Object}){
        let name = req.name;
        let body = req.body;
        if (!name || name=='' || !body) {
            console.warn('消息名称或消息体不能存在！');
            return
        }
        if (!GameMsg[name]) {
            console.log('未找到相应的消息协议== name: ', name);
            return
        }
        let bodyBytes: Uint8Array = GameMsg[name].encode(body).finish();

        let tbMsgHead: GameMsg.ClientMsgHead = new GameMsg.ClientMsgHead();
        tbMsgHead.msgtype = 2;
        tbMsgHead.msgname = name;
        tbMsgHead.svr_id = "";
        tbMsgHead.service_address = 0;

        //编码消息头
        let headBytes = GameMsg.ClientMsgHead.encode(tbMsgHead).finish();
        let headData = headBytes;
        let headLength = headData.byteLength;

        // 编码消息体
        let bodyData = bodyBytes
        let bodyLength = bodyData.byteLength;

        let sendData = new Uint8Array(2+headLength+bodyLength);
        //前两位存储表头的长度
        sendData[0] = (headLength>>8)&0xff;
        sendData[1] = (headLength)&0xff;
        let beginIndex = 2
        for (let i = 0; i < headLength; i++) {
            sendData[i + beginIndex] = headData[i];
        }
        beginIndex+=headLength
        for (let i = 0; i < bodyLength; i++) {
            sendData[i + beginIndex] = bodyData[i];
        }

        //加密
        let ss = Uint8ArrayToString(sendData);
        ss = this.xxtea.encrypt(ss);
        let arr = stringToUint8Array(ss);

        let self = this;

        // 发送数据
        if (!this.is_socket_close) {
            self.g_ws.send(arr);
        } else {
            self._mSendmsgCache[name] = arr;
        }
    }

}