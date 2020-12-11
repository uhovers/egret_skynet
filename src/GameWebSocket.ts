class GameWebSocket {

    private webSocket: egret.WebSocket;

    constructor() {
        this.initSocket();
    }

    private initSocket() {
        let webSocket = new egret.WebSocket();
        webSocket.type = egret.WebSocket.TYPE_BINARY;
        webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        // webSocket.connect("121.40.230.243", 11301);
        webSocket.connect("echo.websocket.org", 80);
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
        var msg: string = byte.readUTF();
        var boo: boolean = byte.readBoolean();
        var num: number = byte.readInt();
        console.log(msg, boo, num);
    }

    private onSocketOpen() {
        console.log("连接成功");
        // this.send()
        this.sendMessage();
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
        let pwirter:protobuf.Writer = new protobuf.Writer();

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