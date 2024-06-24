"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class ApiResponseHandler {
  constructor(statusCode = 200, message = "Success", data = null) {
    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.error = null;
    this.data = data;
  }
}
var _default = exports.default = ApiResponseHandler;
//# sourceMappingURL=ApiResponseHandler.helper.js.map