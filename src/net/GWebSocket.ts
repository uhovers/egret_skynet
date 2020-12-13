class GWebSocket {
    /**
     * websocket 地址
     * @private
     * @type {string}
     * @memberof GWebSocket
     */
    private _url: string = null;

    /**
     * websocket 端口号
     * @private
     * @type {number}
     * @memberof GWebSocket
     */
    private _port:number = null;

    /**
     *
     * @private
     * @type {egret.WebSocket}
     * @memberof GWebSocket
     */
    private _ws: egret.WebSocket = null;

    /**
     *
     * 接收数据处理
     * @memberof GWebSocket
     */
    public receiveMessage: (bytes: Uint8Array) => void;

    /**
     * socket 打开
     *
     * @memberof GWebSocket
     */
    public socketOpen: () => void;

    /**
     * socket 错误
     *
     * @memberof GWebSocket
     */
    public socketError: () => void;

    /**
     * socket 关闭
     *
     * @memberof GWebSocket
     */
    public socketClose: () => void;

    constructor() {
    }

    /**
     * 初始化 websocket
     * @param {string} url
     * @param {number} port
     * @memberof GWebSocket
     */
    init(url: string, port: number){
        this._url = url;
        this._port = port;
        this._ws = null;
    }

    /**
     * 连接 websocket
     *
     * @memberof GWebSocket
     */
    connect(){
        console.log('== GWebSocket.connect 开始连接', this._url, this._port);
        let ws: egret.WebSocket = new egret.WebSocket();
        ws.type = egret.WebSocket.TYPE_BINARY;
        ws.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        ws.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        ws.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        ws.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        ws.connect(this._url, this._port);
        this._ws = ws;
    }

    
    set webSocket(v : egret.WebSocket) {
        this._ws = v;
    }
    
    get webSocket() : egret.WebSocket {
        return this._ws;
    }
    
    send(bytes: Uint8Array){
        if (this._ws) {
            let byteArray: egret.ByteArray = new egret.ByteArray(bytes);
            this._ws.writeBytes(byteArray);
            this._ws.flush()
        }
    }

    private onReceiveMessage(){
        console.log('socket 收到数据');
        let byteArray: egret.ByteArray = new egret.ByteArray();
        this._ws.readBytes(byteArray);
        let bytes = byteArray.bytes;
        if (this.receiveMessage) {
            this.receiveMessage(bytes);
        }
    }

    private onSocketOpen(){
        console.log('socket 连接打开');
        if (this.socketOpen) {
            this.socketOpen();
        }
    }

    private onSocketError(){
        console.log('socket 连接错误');
        if (this.socketError) {
            this.socketError();
        }
    }

    private onSocketClose(){
        console.log('socket 连接关闭');
        if (this.socketClose) {
            this.socketClose();
        }
    }

}