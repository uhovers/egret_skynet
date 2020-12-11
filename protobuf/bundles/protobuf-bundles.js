var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg = (function() {

    /**
     * Namespace GameMsg.
     * @exports GameMsg
     * @namespace
     */
    var GameMsg = {};

    GameMsg.ClientMsgHead = (function() {

        /**
         * Properties of a ClientMsgHead.
         * @memberof GameMsg
         * @interface IClientMsgHead
         * @property {number|null} [msgtype] ClientMsgHead msgtype
         * @property {string|null} [msgname] ClientMsgHead msgname
         * @property {string|null} [svr_id] ClientMsgHead svr_id
         * @property {number|null} [service_address] ClientMsgHead service_address
         */

        /**
         * Constructs a new ClientMsgHead.
         * @memberof GameMsg
         * @classdesc Represents a ClientMsgHead.
         * @implements IClientMsgHead
         * @constructor
         * @param {GameMsg.IClientMsgHead=} [properties] Properties to set
         */
        function ClientMsgHead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientMsgHead msgtype.
         * @member {number} msgtype
         * @memberof GameMsg.ClientMsgHead
         * @instance
         */
        ClientMsgHead.prototype.msgtype = 0;

        /**
         * ClientMsgHead msgname.
         * @member {string} msgname
         * @memberof GameMsg.ClientMsgHead
         * @instance
         */
        ClientMsgHead.prototype.msgname = "";

        /**
         * ClientMsgHead svr_id.
         * @member {string} svr_id
         * @memberof GameMsg.ClientMsgHead
         * @instance
         */
        ClientMsgHead.prototype.svr_id = "";

        /**
         * ClientMsgHead service_address.
         * @member {number} service_address
         * @memberof GameMsg.ClientMsgHead
         * @instance
         */
        ClientMsgHead.prototype.service_address = 0;

        /**
         * Encodes the specified ClientMsgHead message. Does not implicitly {@link GameMsg.ClientMsgHead.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.ClientMsgHead
         * @static
         * @param {GameMsg.IClientMsgHead} message ClientMsgHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMsgHead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgtype != null && message.hasOwnProperty("msgtype"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgtype);
            if (message.msgname != null && message.hasOwnProperty("msgname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msgname);
            if (message.svr_id != null && message.hasOwnProperty("svr_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.svr_id);
            if (message.service_address != null && message.hasOwnProperty("service_address"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.service_address);
            return writer;
        };

        /**
         * Decodes a ClientMsgHead message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.ClientMsgHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.ClientMsgHead} ClientMsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMsgHead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.ClientMsgHead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgtype = reader.int32();
                    break;
                case 2:
                    message.msgname = reader.string();
                    break;
                case 3:
                    message.svr_id = reader.string();
                    break;
                case 4:
                    message.service_address = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ClientMsgHead;
    })();

    GameMsg.Version = (function() {

        /**
         * Properties of a Version.
         * @memberof GameMsg
         * @interface IVersion
         * @property {number|null} [platform] Version platform
         * @property {number|null} [channel] Version channel
         * @property {string|null} [version] Version version
         * @property {number|null} [authtype] Version authtype
         * @property {number|null} [regfrom] Version regfrom
         * @property {string|null} [channel_name] Version channel_name
         */

        /**
         * Constructs a new Version.
         * @memberof GameMsg
         * @classdesc Represents a Version.
         * @implements IVersion
         * @constructor
         * @param {GameMsg.IVersion=} [properties] Properties to set
         */
        function Version(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Version platform.
         * @member {number} platform
         * @memberof GameMsg.Version
         * @instance
         */
        Version.prototype.platform = 0;

        /**
         * Version channel.
         * @member {number} channel
         * @memberof GameMsg.Version
         * @instance
         */
        Version.prototype.channel = 0;

        /**
         * Version version.
         * @member {string} version
         * @memberof GameMsg.Version
         * @instance
         */
        Version.prototype.version = "";

        /**
         * Version authtype.
         * @member {number} authtype
         * @memberof GameMsg.Version
         * @instance
         */
        Version.prototype.authtype = 0;

        /**
         * Version regfrom.
         * @member {number} regfrom
         * @memberof GameMsg.Version
         * @instance
         */
        Version.prototype.regfrom = 0;

        /**
         * Version channel_name.
         * @member {string} channel_name
         * @memberof GameMsg.Version
         * @instance
         */
        Version.prototype.channel_name = "";

        /**
         * Encodes the specified Version message. Does not implicitly {@link GameMsg.Version.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.Version
         * @static
         * @param {GameMsg.IVersion} message Version message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Version.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && message.hasOwnProperty("platform"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
            if (message.channel != null && message.hasOwnProperty("channel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channel);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
            if (message.authtype != null && message.hasOwnProperty("authtype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.authtype);
            if (message.regfrom != null && message.hasOwnProperty("regfrom"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.regfrom);
            if (message.channel_name != null && message.hasOwnProperty("channel_name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.channel_name);
            return writer;
        };

        /**
         * Decodes a Version message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.Version
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.Version} Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Version.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.Version();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platform = reader.int32();
                    break;
                case 2:
                    message.channel = reader.int32();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.authtype = reader.int32();
                    break;
                case 5:
                    message.regfrom = reader.int32();
                    break;
                case 6:
                    message.channel_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Version;
    })();

    GameMsg.GateSvrItem = (function() {

        /**
         * Properties of a GateSvrItem.
         * @memberof GameMsg
         * @interface IGateSvrItem
         * @property {string|null} [ip] GateSvrItem ip
         * @property {number|null} [port] GateSvrItem port
         * @property {number|null} [updatetime] GateSvrItem updatetime
         * @property {number|null} [onlinenum] GateSvrItem onlinenum
         */

        /**
         * Constructs a new GateSvrItem.
         * @memberof GameMsg
         * @classdesc Represents a GateSvrItem.
         * @implements IGateSvrItem
         * @constructor
         * @param {GameMsg.IGateSvrItem=} [properties] Properties to set
         */
        function GateSvrItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateSvrItem ip.
         * @member {string} ip
         * @memberof GameMsg.GateSvrItem
         * @instance
         */
        GateSvrItem.prototype.ip = "";

        /**
         * GateSvrItem port.
         * @member {number} port
         * @memberof GameMsg.GateSvrItem
         * @instance
         */
        GateSvrItem.prototype.port = 0;

        /**
         * GateSvrItem updatetime.
         * @member {number} updatetime
         * @memberof GameMsg.GateSvrItem
         * @instance
         */
        GateSvrItem.prototype.updatetime = 0;

        /**
         * GateSvrItem onlinenum.
         * @member {number} onlinenum
         * @memberof GameMsg.GateSvrItem
         * @instance
         */
        GateSvrItem.prototype.onlinenum = 0;

        /**
         * Encodes the specified GateSvrItem message. Does not implicitly {@link GameMsg.GateSvrItem.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.GateSvrItem
         * @static
         * @param {GameMsg.IGateSvrItem} message GateSvrItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateSvrItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
            if (message.updatetime != null && message.hasOwnProperty("updatetime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.updatetime);
            if (message.onlinenum != null && message.hasOwnProperty("onlinenum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.onlinenum);
            return writer;
        };

        /**
         * Decodes a GateSvrItem message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.GateSvrItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.GateSvrItem} GateSvrItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateSvrItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.GateSvrItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ip = reader.string();
                    break;
                case 2:
                    message.port = reader.int32();
                    break;
                case 3:
                    message.updatetime = reader.int32();
                    break;
                case 4:
                    message.onlinenum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GateSvrItem;
    })();

    GameMsg.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof GameMsg
         * @interface ILoginReq
         * @property {GameMsg.IVersion|null} [version] LoginReq version
         * @property {string|null} [deviceinfo] LoginReq deviceinfo
         * @property {string|null} [uid] LoginReq uid
         * @property {number|null} [uidtype] LoginReq uidtype
         * @property {string|null} [device_uuid] LoginReq device_uuid
         * @property {string|null} [only_id] LoginReq only_id
         * @property {string|null} [thirdtoken] LoginReq thirdtoken
         * @property {string|null} [account] LoginReq account
         * @property {string|null} [login_ip] LoginReq login_ip
         */

        /**
         * Constructs a new LoginReq.
         * @memberof GameMsg
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {GameMsg.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq version.
         * @member {GameMsg.IVersion|null|undefined} version
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.version = null;

        /**
         * LoginReq deviceinfo.
         * @member {string} deviceinfo
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.deviceinfo = "";

        /**
         * LoginReq uid.
         * @member {string} uid
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.uid = "";

        /**
         * LoginReq uidtype.
         * @member {number} uidtype
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.uidtype = 0;

        /**
         * LoginReq device_uuid.
         * @member {string} device_uuid
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.device_uuid = "";

        /**
         * LoginReq only_id.
         * @member {string} only_id
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.only_id = "";

        /**
         * LoginReq thirdtoken.
         * @member {string} thirdtoken
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.thirdtoken = "";

        /**
         * LoginReq account.
         * @member {string} account
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.account = "";

        /**
         * LoginReq login_ip.
         * @member {string} login_ip
         * @memberof GameMsg.LoginReq
         * @instance
         */
        LoginReq.prototype.login_ip = "";

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link GameMsg.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.LoginReq
         * @static
         * @param {GameMsg.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                $root.GameMsg.Version.encode(message.version, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deviceinfo != null && message.hasOwnProperty("deviceinfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceinfo);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uid);
            if (message.uidtype != null && message.hasOwnProperty("uidtype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.uidtype);
            if (message.device_uuid != null && message.hasOwnProperty("device_uuid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.device_uuid);
            if (message.only_id != null && message.hasOwnProperty("only_id"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.only_id);
            if (message.thirdtoken != null && message.hasOwnProperty("thirdtoken"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.thirdtoken);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.account);
            if (message.login_ip != null && message.hasOwnProperty("login_ip"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.login_ip);
            return writer;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = $root.GameMsg.Version.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deviceinfo = reader.string();
                    break;
                case 3:
                    message.uid = reader.string();
                    break;
                case 4:
                    message.uidtype = reader.int32();
                    break;
                case 5:
                    message.device_uuid = reader.string();
                    break;
                case 6:
                    message.only_id = reader.string();
                    break;
                case 7:
                    message.thirdtoken = reader.string();
                    break;
                case 8:
                    message.account = reader.string();
                    break;
                case 9:
                    message.login_ip = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoginReq;
    })();

    GameMsg.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof GameMsg
         * @interface ILoginRes
         * @property {number|null} [errcode] LoginRes errcode
         * @property {string|null} [errcodedes] LoginRes errcodedes
         * @property {string|null} [uid] LoginRes uid
         * @property {number|null} [rid] LoginRes rid
         * @property {string|null} [logintoken] LoginRes logintoken
         * @property {number|null} [expiretime] LoginRes expiretime
         * @property {Array.<GameMsg.IGateSvrItem>|null} [gatesvrs] LoginRes gatesvrs
         * @property {string|null} [clientip] LoginRes clientip
         * @property {number|null} [uidtype] LoginRes uidtype
         * @property {number|null} [check_code] LoginRes check_code
         * @property {string|null} [vercode_pwd] LoginRes vercode_pwd
         * @property {string|null} [device_uuid] LoginRes device_uuid
         */

        /**
         * Constructs a new LoginRes.
         * @memberof GameMsg
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {GameMsg.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            this.gatesvrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes errcode.
         * @member {number} errcode
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.errcode = 0;

        /**
         * LoginRes errcodedes.
         * @member {string} errcodedes
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.errcodedes = "";

        /**
         * LoginRes uid.
         * @member {string} uid
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.uid = "";

        /**
         * LoginRes rid.
         * @member {number} rid
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.rid = 0;

        /**
         * LoginRes logintoken.
         * @member {string} logintoken
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.logintoken = "";

        /**
         * LoginRes expiretime.
         * @member {number} expiretime
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.expiretime = 0;

        /**
         * LoginRes gatesvrs.
         * @member {Array.<GameMsg.IGateSvrItem>} gatesvrs
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.gatesvrs = $util.emptyArray;

        /**
         * LoginRes clientip.
         * @member {string} clientip
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.clientip = "";

        /**
         * LoginRes uidtype.
         * @member {number} uidtype
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.uidtype = 0;

        /**
         * LoginRes check_code.
         * @member {number} check_code
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.check_code = 0;

        /**
         * LoginRes vercode_pwd.
         * @member {string} vercode_pwd
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.vercode_pwd = "";

        /**
         * LoginRes device_uuid.
         * @member {string} device_uuid
         * @memberof GameMsg.LoginRes
         * @instance
         */
        LoginRes.prototype.device_uuid = "";

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link GameMsg.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.LoginRes
         * @static
         * @param {GameMsg.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.errcodedes != null && message.hasOwnProperty("errcodedes"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errcodedes);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.uid);
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rid);
            if (message.logintoken != null && message.hasOwnProperty("logintoken"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.logintoken);
            if (message.expiretime != null && message.hasOwnProperty("expiretime"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.expiretime);
            if (message.gatesvrs != null && message.gatesvrs.length)
                for (var i = 0; i < message.gatesvrs.length; ++i)
                    $root.GameMsg.GateSvrItem.encode(message.gatesvrs[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.clientip != null && message.hasOwnProperty("clientip"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.clientip);
            if (message.uidtype != null && message.hasOwnProperty("uidtype"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.uidtype);
            if (message.check_code != null && message.hasOwnProperty("check_code"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.check_code);
            if (message.vercode_pwd != null && message.hasOwnProperty("vercode_pwd"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.vercode_pwd);
            if (message.device_uuid != null && message.hasOwnProperty("device_uuid"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.device_uuid);
            return writer;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.errcodedes = reader.string();
                    break;
                case 3:
                    message.uid = reader.string();
                    break;
                case 4:
                    message.rid = reader.int32();
                    break;
                case 5:
                    message.logintoken = reader.string();
                    break;
                case 6:
                    message.expiretime = reader.int32();
                    break;
                case 7:
                    if (!(message.gatesvrs && message.gatesvrs.length))
                        message.gatesvrs = [];
                    message.gatesvrs.push($root.GameMsg.GateSvrItem.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.clientip = reader.string();
                    break;
                case 9:
                    message.uidtype = reader.int32();
                    break;
                case 10:
                    message.check_code = reader.int32();
                    break;
                case 11:
                    message.vercode_pwd = reader.string();
                    break;
                case 12:
                    message.device_uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoginRes;
    })();

    return GameMsg;
})();