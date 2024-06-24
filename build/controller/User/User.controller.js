"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _httpStatusCodes = require("http-status-codes");
var _helpers = require("../../helpers");
class UserController {
  constructor() {}
  static createUserController = (0, _helpers.AsyncHandlerHelper)(async (req, res, next) => {
    return res.status(_httpStatusCodes.StatusCodes.OK).json(new _helpers.ApiResponseHandler(_httpStatusCodes.StatusCodes.OK, "Applicant with all drivers details fetched successfully", {}));
  });
}
var _default = exports.default = UserController;
//# sourceMappingURL=User.controller.js.map