"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _httpStatusCodes = _interopRequireWildcard(require("http-status-codes"));
var _index = require("../../helpers/index");
var _config = require("../../config");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  ACCESS_TOKEN_SECRET
} = process.env;
const useAuthMiddleware = (0, _index.AsyncHandlerHelper)(async (req, res, next) => {
  const {
    cookies,
    headers
  } = req;
  const token = cookies?.["token"] || headers.authorization?.replace("Bearer ", "");
  if (!token) {
    throw new _index.ApiErrorHandler(_httpStatusCodes.default.UNAUTHORIZED, (0, _httpStatusCodes.getReasonPhrase)(_httpStatusCodes.default.UNAUTHORIZED), "Unauthorised request! access token is missing");
  }
  const decodeToken = await (0, _index.verifyToken)(token, ACCESS_TOKEN_SECRET);
  const {
    email
  } = decodeToken;
  const user = await _config.sequelize.models.User.findOne({
    where: {
      email
    }
  });
  if (!user) {
    throw new _index.ApiErrorHandler(_httpStatusCodes.default.UNAUTHORIZED, (0, _httpStatusCodes.getReasonPhrase)(_httpStatusCodes.default.UNAUTHORIZED), "Invalid user access token");
  }
  req.user = user.dataValues;
  next();
});
var _default = exports.default = useAuthMiddleware;
//# sourceMappingURL=Auth.middleware.js.map