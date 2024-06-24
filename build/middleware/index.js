"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useAuthMiddleware", {
  enumerable: true,
  get: function () {
    return _Auth.default;
  }
});
Object.defineProperty(exports, "useErrorMiddleware", {
  enumerable: true,
  get: function () {
    return _Error.default;
  }
});
var _Auth = _interopRequireDefault(require("./Auth/Auth.middleware"));
var _Error = _interopRequireDefault(require("./Error/Error.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//# sourceMappingURL=index.js.map