"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helpers = require("../../helpers");
const logger = new _helpers.LoggerService().logger;
const useErrorMiddleware = (err, req, res, next) => {
  let {
    statusCode,
    message,
    error = null,
    stack
  } = err;
  if (!statusCode) {
    statusCode = 500;
  }
  const errors = new _helpers.ApiErrorHandler(statusCode, message, error, stack);
  if (process.env.NODE_ENV === "development") {
    logger.error(JSON.stringify({
      ...errors,
      message,
      error,
      stack
    }, null, 2));
  }
  const response = {
    ...errors,
    message,
    error,
    ...(process.env.NODE_ENV === "development" ? {
      stack
    } : {})
  };
  return res.status(statusCode).json(response);
};
var _default = exports.default = useErrorMiddleware;
//# sourceMappingURL=Error.middleware.js.map