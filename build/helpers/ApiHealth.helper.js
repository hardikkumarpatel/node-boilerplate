"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNotFoundHelper = exports.useHealthHelper = void 0;
var _httpStatusCodes = require("http-status-codes");
var _ApiErrorHandler = _interopRequireDefault(require("./ApiErrorHandler.helper"));
var _ApiResponseHandler = _interopRequireDefault(require("./ApiResponseHandler.helper"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const useHealthHelper = (req, res, next) => {
  const {
    env: {
      NODE_ENV
    },
    platform,
    pid
  } = process;
  return res.status(_httpStatusCodes.StatusCodes.OK).json(new _ApiResponseHandler.default(_httpStatusCodes.StatusCodes.OK, "Welcome to backend! Made in Node with ❤️", {
    mode: NODE_ENV,
    platfrom: platform,
    pid: pid
  }));
};
exports.useHealthHelper = useHealthHelper;
const useNotFoundHelper = (req, res, next) => {
  throw new _ApiErrorHandler.default(_httpStatusCodes.StatusCodes.NOT_FOUND, "Request Respurce Not Found");
};
exports.useNotFoundHelper = useNotFoundHelper;
//# sourceMappingURL=ApiHealth.helper.js.map