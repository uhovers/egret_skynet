// import XXTea from "./XXTea";

let _Uint8ArrayToString = function (fileData) {
    let dataString = "";
    for (let i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString
}

let _stringToUint8Array = function (str) {
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }

    let tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}

class GameWebSocket {

    private webSocket: egret.WebSocket;

    private xxtea: XXTea = null;

    constructor() {
        this.xxtea = new XXTea()
        this.initSocket();
    }

    private initSocket() {
        let webSocket = new egret.WebSocket();
        webSocket.type = egret.WebSocket.TYPE_BINARY;
        webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        webSocket.connect("121.40.230.243", 11301);
        // webSocket.connect("echo.websocket.org", 80);
        this.webSocket = webSocket;
    }

    /**
	 * 连接关闭
	 */
	public onSocketClose() {
		console.log("断开与服务器的连接")
	}
	
	/**
	 * 与服务器通信异常
	 */
	public onSocketError(e: egret.Event) {
		console.log("webSocket异常")
		console.log(e)
    }
    
    private onReceiveMessage() {
        console.log('收到数据');
        // let byte: egret.ByteArray = new egret.ByteArray();
        // this.webSocket.readBytes(byte);
        // let l: GameMsg.LoginRes = GameMsg.LoginRes.decode(byte.bytes);
        // console.log('==== 解析', l);

        var byte: egret.ByteArray = new egret.ByteArray();
        this.webSocket.readBytes(byte);
        console.log('=====rec data', byte);
        let resultData = byte.bytes

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
        
        let bodyMsg: any = GameMsg[headMsg.msgname].decode(bodyData)
        console.log('bodymsg', bodyMsg);
        
        // var msg: string = byte.readUTF();
        // var boo: boolean = byte.readBoolean();
        // var num: number = byte.readInt();
        // console.log(msg, boo, num);
    }

    private onSocketOpen() {
        console.log("连接成功");
        // this.send()
        // this.sendMessage();
        let version: GameMsg.Version = new GameMsg.Version();
        version.authtype = 1;
        version.platform = 2
        version.channel = 8
        version.regfrom = 1
        version.version = '1.1.36'

        let loginReq: GameMsg.LoginReq = new GameMsg.LoginReq();
        loginReq.version = version;
        loginReq.deviceinfo = 'h5';
        loginReq.login_ip = '47.242.1.103'
        loginReq.only_id = '31926'
        loginReq.thirdtoken = ''
        loginReq.uid = '31926'
        loginReq.uidtype = 1
        console.log('发送数据: ', loginReq);
        let sendByte = GameMsg.LoginReq.encode(loginReq).finish();

        let msg = {
            name: "LoginReq",
            body: sendByte
        }
        this.sendRequest(msg)
    }

    sendRequest(request: {name: string, body: any}, opt_callback?: Function) {
        // cc.log("send "+JSON.stringify(request));
        //生成NetworkCallback对象，绑定请求seq和回调方法
        if (opt_callback) {
            let reqname = request.name
            let resname = reqname.substring(0,reqname.length-1)+"s"
            // this._networkCallbacks[resname] = new NetworkCallback();
            // this._networkCallbacks[resname].init(request, opt_callback);
        }
        this._sendSocketRequest(request);
    }

    /**
     * @param {object.<BaseRequest>} req
     */
    _sendSocketRequest( req) {
        // cc.assert(this._socket);
        let name = req.name;
        let body: Uint8Array = req.body;

        let tbMsgHead: GameMsg.ClientMsgHead = new GameMsg.ClientMsgHead();
        tbMsgHead.msgtype = 2;
        tbMsgHead.msgname = name;
        tbMsgHead.svr_id = "";
        tbMsgHead.service_address = 0;
        let tbMsgHeadByte = GameMsg.ClientMsgHead.encode(tbMsgHead).finish();
        //websocket send
        // let tbMsgHeadByteArray:egret.ByteArray = new egret.ByteArray(tbMsgHeadByte);
        // let tbMsgHead = new this._pb.ClientMsgHead({
        //     msgtype:2,
        //     msgname: name,
        //     svr_id:"",
        //     service_address:0,
        // })
        //编码消息头
        // let headData = tbMsgHead.toArrayBuffer();
        let headData = tbMsgHeadByte
        // headData = new Uint8Array(headData);
        let headLength = headData.byteLength;

        //编码消息体
        // let bodyData = body.toArrayBuffer();
        let bodyData = body
        // bodyData = new Uint8Array(bodyData);
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
        let ss = _Uint8ArrayToString(sendData);
        ss = this.xxtea.encrypt(ss);
        let data = _stringToUint8Array(ss);

        let byteArray:egret.ByteArray = new egret.ByteArray(data);
        this.webSocket.writeBytes(byteArray);
        this.webSocket.flush();
        // if (this.isSocketOpened() && (!this.is_socket_close)) {

        //     this._socket.send(data);
        // } else {
        //     this._mSendmsgCache[name] = data
        // }
    }

    public sendMessage() {
        var byte: egret.ByteArray = new egret.ByteArray();
        byte.writeUTF("Hello Egret WebSocket");
        byte.writeBoolean(false);
        byte.writeInt(111);
        byte.position = 0;
        this.webSocket.writeBytes(byte, 0, byte.bytesAvailable);
        this.webSocket.flush();
    }

    private send() {
        // let pwirter:protobuf.Writer = new protobuf.Writer();

        let version: GameMsg.Version = new GameMsg.Version();
        version.authtype = 1;
        version.platform = 2
        version.channel = 8
        version.regfrom = 1
        version.version = '1.1.36'

        let loginReq: GameMsg.LoginReq = new GameMsg.LoginReq();
        loginReq.version = version;
        loginReq.deviceinfo = 'h5';
        loginReq.login_ip = '47.242.1.103'
        loginReq.only_id = '31926'
        loginReq.thirdtoken = ''
        loginReq.uid = '31926'
        loginReq.uidtype = 1
        console.log('发送数据: ', loginReq);
        
        let sendByte = GameMsg.LoginReq.encode(loginReq).finish();
        //websocket send
        let byteArray:egret.ByteArray = new egret.ByteArray(sendByte);
        this.webSocket.writeBytes(byteArray);
        this.webSocket.flush();
    }

}

// export default new GameWebSocket()