"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _controller = require("../../controller");
var _Auth = _interopRequireDefault(require("../../middleware/Auth/Auth.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UserRoutes = (0, _express.Router)();
UserRoutes.use(_Auth.default);
UserRoutes.route("/create").post(_controller.UserController.createUserController);
var _default = exports.default = UserRoutes;
//# sourceMappingURL=User.routes.js.map