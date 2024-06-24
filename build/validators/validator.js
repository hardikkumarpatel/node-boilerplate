"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;
var _expressValidator = require("express-validator");
var _httpStatusCodes = require("http-status-codes");
var _helpers = require("../helpers");
const validate = (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(({
    msg
  }) => extractedErrors.push(msg));
  throw new _helpers.ApiErrorHandler(_httpStatusCodes.StatusCodes.UNPROCESSABLE_ENTITY, "Validation Error", extractedErrors);
};
exports.validate = validate;
//# sourceMappingURL=validator.js.map