"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressValidator = require("express-validator");
class UserValidator {
  constructor() {}
  static loginUserValidator = () => {
    return [(0, _expressValidator.body)("email").trim().notEmpty().withMessage("email is required").isEmail().withMessage("email please use the correct email format: mailto:user@example.com"), (0, _expressValidator.body)("password").trim().notEmpty().withMessage("password is required")];
  };
}
var _default = exports.default = UserValidator;
//# sourceMappingURL=User.validator.js.map