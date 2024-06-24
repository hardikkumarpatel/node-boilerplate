"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _winston = _interopRequireDefault(require("winston"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const date = () => {
  return new Date(Date.now()).toISOString();
};
class LoggerService {
  constructor() {
    const logger = _winston.default.createLogger({
      transports: [new _winston.default.transports.Console()],
      format: _winston.default.format.combine(_winston.default.format.colorize({
        level: true,
        colors: {
          error: "red",
          info: "green",
          debug: "green"
        }
      }), _winston.default.format.timestamp({
        format: date()
      }), _winston.default.format.simple(), _winston.default.format.printf(info => {
        let message = `[${info.timestamp}] [${info.level}]: ${info.message}`;
        if (info.metadata) {
          message = `${message} | ${JSON.stringify(info.metadata, null, 2)}`;
        }
        return message;
      }))
    });
    this.logger = logger;
  }
  async info(message) {
    this.logger.info(message);
  }
  async info(message, metadata) {
    this.logger.info(message, {
      metadata
    });
  }
  async debug(message) {
    this.logger.debug(message);
  }
  async debug(message, metadata) {
    this.logger.debug(message, {
      metadata
    });
  }
  async error(message) {
    this.logger.error(message);
  }
  async error(message, metadata) {
    this.logger.error(message, {
      metadata
    });
  }
}
var _default = exports.default = LoggerService;
//# sourceMappingURL=Logger.helper.js.map