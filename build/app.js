"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _path = _interopRequireDefault(require("path"));
var _helpers = require("./helpers");
var _routers = _interopRequireDefault(require("./routers"));
var _middleware = require("./middleware");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const app = (0, _express.default)();
const {
  info,
  error
} = new _helpers.LoggerService().logger;
class ExpressEngine {
  constructor() {
    this.startExpressEngine();
  }

  /* EXPRESS MIDDLEWARE AND ROUTES INITIALIZATION */
  initializeExpressMiddleware = async () => {
    app.use(_express.default.urlencoded({
      extended: true
    }));
    app.use(_express.default.json({
      limit: "6kb"
    }));
    app.use((0, _morgan.default)("dev"));
    app.use("/public", _express.default.static(_path.default.resolve(_path.default.join(__dirname), "src", "public")));
    app.use((0, _cors.default)({
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "OPTIONS", "PATCH", "POST", "DELETE"]
    }));
    app.use("/health", _helpers.useHealthHelper);
    app.use("/api/v1", _routers.default);
    app.use("*", _helpers.useNotFoundHelper);
    app.use(_middleware.useErrorMiddleware);
  };

  /** INITIALIZATION EXPRESS ENGINE INSTANCE */
  initializeExpressEngineInstance = async () => {
    return new Promise(resolve => {
      const http = app.listen(3010, () => {
        const {
          port
        } = http.address();
        info(`Express engine is running on ${port} 🚀`);
        resolve();
      });
      process.on("SIGINT", async () => {
        try {
          http.close();
        } catch (SIGINTError) {
          error(`Error occurred during shutdown server ${SIGINTError}`);
        } finally {
          info(`Express engine shutdown successfully 🌱`);
          process.exit(1); /** Exit with an error code */
        }
      });
    });
  };
  startExpressEngine = async () => {
    await this.initializeExpressMiddleware();
    await this.initializeExpressEngineInstance();
  };
}
var _default = exports.default = ExpressEngine;
//# sourceMappingURL=app.js.map