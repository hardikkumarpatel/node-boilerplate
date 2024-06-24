"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
const RootRoutes = (0, _express.Router)();

// RootRoutes.use('/', async (req, res, next) => next());
RootRoutes.use("/user", require("./User/User.routes").default);
var _default = exports.default = RootRoutes;
//# sourceMappingURL=index.js.map