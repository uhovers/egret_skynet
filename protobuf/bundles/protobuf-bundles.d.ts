type Long = protobuf.Long;

/** Namespace GameMsg. */
declare namespace GameMsg {

    /** Properties of a ClientMsgHead. */
    interface IClientMsgHead {

        /** ClientMsgHead msgtype */
        msgtype?: (number|null);

        /** ClientMsgHead msgname */
        msgname?: (string|null);

        /** ClientMsgHead svr_id */
        svr_id?: (string|null);

        /** ClientMsgHead service_address */
        service_address?: (number|null);
    }

    /** Represents a ClientMsgHead. */
    class ClientMsgHead implements IClientMsgHead {

        /**
         * Constructs a new ClientMsgHead.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IClientMsgHead);

        /** ClientMsgHead msgtype. */
        public msgtype: number;

        /** ClientMsgHead msgname. */
        public msgname: string;

        /** ClientMsgHead svr_id. */
        public svr_id: string;

        /** ClientMsgHead service_address. */
        public service_address: number;

        /**
         * Encodes the specified ClientMsgHead message. Does not implicitly {@link GameMsg.ClientMsgHead.verify|verify} messages.
         * @param message ClientMsgHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IClientMsgHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ClientMsgHead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GameMsg.ClientMsgHead;
    }

    /** Properties of a Version. */
    interface IVersion {

        /** Version platform */
        platform?: (number|null);

        /** Version channel */
        channel?: (number|null);

        /** Version version */
        version?: (string|null);

        /** Version authtype */
        authtype?: (number|null);

        /** Version regfrom */
        regfrom?: (number|null);

        /** Version channel_name */
        channel_name?: (string|null);
    }

    /** Represents a Version. */
    class Version implements IVersion {

        /**
         * Constructs a new Version.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IVersion);

        /** Version platform. */
        public platform: number;

        /** Version channel. */
        public channel: number;

        /** Version version. */
        public version: string;

        /** Version authtype. */
        public authtype: number;

        /** Version regfrom. */
        public regfrom: number;

        /** Version channel_name. */
        public channel_name: string;

        /**
         * Encodes the specified Version message. Does not implicitly {@link GameMsg.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IVersion, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Version message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GameMsg.Version;
    }

    /** Properties of a GateSvrItem. */
    interface IGateSvrItem {

        /** GateSvrItem ip */
        ip?: (string|null);

        /** GateSvrItem port */
        port?: (number|null);

        /** GateSvrItem updatetime */
        updatetime?: (number|null);

        /** GateSvrItem onlinenum */
        onlinenum?: (number|null);
    }

    /** Represents a GateSvrItem. */
    class GateSvrItem implements IGateSvrItem {

        /**
         * Constructs a new GateSvrItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.IGateSvrItem);

        /** GateSvrItem ip. */
        public ip: string;

        /** GateSvrItem port. */
        public port: number;

        /** GateSvrItem updatetime. */
        public updatetime: number;

        /** GateSvrItem onlinenum. */
        public onlinenum: number;

        /**
         * Encodes the specified GateSvrItem message. Does not implicitly {@link GameMsg.GateSvrItem.verify|verify} messages.
         * @param message GateSvrItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.IGateSvrItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GateSvrItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateSvrItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GameMsg.GateSvrItem;
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq version */
        version?: (GameMsg.IVersion|null);

        /** LoginReq deviceinfo */
        deviceinfo?: (string|null);

        /** LoginReq uid */
        uid?: (string|null);

        /** LoginReq uidtype */
        uidtype?: (number|null);

        /** LoginReq device_uuid */
        device_uuid?: (string|null);

        /** LoginReq only_id */
        only_id?: (string|null);

        /** LoginReq thirdtoken */
        thirdtoken?: (string|null);

        /** LoginReq account */
        account?: (string|null);

        /** LoginReq login_ip */
        login_ip?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.ILoginReq);

        /** LoginReq version. */
        public version?: (GameMsg.IVersion|null);

        /** LoginReq deviceinfo. */
        public deviceinfo: string;

        /** LoginReq uid. */
        public uid: string;

        /** LoginReq uidtype. */
        public uidtype: number;

        /** LoginReq device_uuid. */
        public device_uuid: string;

        /** LoginReq only_id. */
        public only_id: string;

        /** LoginReq thirdtoken. */
        public thirdtoken: string;

        /** LoginReq account. */
        public account: string;

        /** LoginReq login_ip. */
        public login_ip: string;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link GameMsg.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.ILoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GameMsg.LoginReq;
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes errcode */
        errcode?: (number|null);

        /** LoginRes errcodedes */
        errcodedes?: (string|null);

        /** LoginRes uid */
        uid?: (string|null);

        /** LoginRes rid */
        rid?: (number|null);

        /** LoginRes logintoken */
        logintoken?: (string|null);

        /** LoginRes expiretime */
        expiretime?: (number|null);

        /** LoginRes gatesvrs */
        gatesvrs?: (GameMsg.IGateSvrItem[]|null);

        /** LoginRes clientip */
        clientip?: (string|null);

        /** LoginRes uidtype */
        uidtype?: (number|null);

        /** LoginRes check_code */
        check_code?: (number|null);

        /** LoginRes vercode_pwd */
        vercode_pwd?: (string|null);

        /** LoginRes device_uuid */
        device_uuid?: (string|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameMsg.ILoginRes);

        /** LoginRes errcode. */
        public errcode: number;

        /** LoginRes errcodedes. */
        public errcodedes: string;

        /** LoginRes uid. */
        public uid: string;

        /** LoginRes rid. */
        public rid: number;

        /** LoginRes logintoken. */
        public logintoken: string;

        /** LoginRes expiretime. */
        public expiretime: number;

        /** LoginRes gatesvrs. */
        public gatesvrs: GameMsg.IGateSvrItem[];

        /** LoginRes clientip. */
        public clientip: string;

        /** LoginRes uidtype. */
        public uidtype: number;

        /** LoginRes check_code. */
        public check_code: number;

        /** LoginRes vercode_pwd. */
        public vercode_pwd: string;

        /** LoginRes device_uuid. */
        public device_uuid: string;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link GameMsg.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameMsg.ILoginRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GameMsg.LoginRes;
    }
}
