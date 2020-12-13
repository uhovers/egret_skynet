class NetProxy {
    network: GNetwork = null;
    socketip: string = null;
    socketport: number = null;

    constructor() {
        this.network = null;
        this.socketip = null;
        this.socketport = null;
    }

    init(cb?: Function){
        if (this.network!=null) {
            return
        }
        this.socketip = '121.40.230.243';
        this.socketport = 11301;
        this.network = new GNetwork();

        setInterval(() => {

            this.network.msgUpdate();
        }, 100);

        this.addGlobalMsgHandler(this, this.onMsgRes.bind(this))

        this.network.connect(this.socketip, this.socketport);
        if (cb) {
            cb();
        }
    }

    beginSendRequest(req:{name: string, body: any}) {
        if (req.name!="HeartReq") {
            // cc.log("send "+JSON.stringify(req));
            console.log(req);
        }
        return new Promise(resolve => {
            this.network.sendRequest(req, (data) => resolve(data));
        })
    }

    addGlobalMsgHandler(target: any, handler: Function) {
        this.network.addGlobalMsgHandler(target, handler);
    }

    removeGlobalMsghandler(target: any) {
        this.network.removeGlobalMsghandler(target);
    }

    //所有消息的回调
    onMsgRes(msgname: string, resMsg: any) {
        console.log('onMsgRes === ', msgname, resMsg);
    }

    LoginReq(){
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

        let req = {
            name: "LoginReq",
            body: loginReq
        }
        return this.beginSendRequest(req);
    }

}