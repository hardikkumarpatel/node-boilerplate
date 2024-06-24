"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const AsyncHandlerHelper = handler => {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(error => {
      next(error);
    });
  };
};
var _default = exports.default = AsyncHandlerHelper;
//# sourceMappingURL=AsyncHandler.helper.js.map