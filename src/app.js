import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { LoggerService, useHealthHelper, useNotFoundHelper } from "./helpers";
import RootRoutes from "./routers";
import { useErrorMiddleware } from "./middleware";
const app = express();
const { info, error } = new LoggerService().logger;

class ExpressEngine {
  constructor() {
    this.startExpressEngine();
  }

  /* EXPRESS MIDDLEWARE AND ROUTES INITIALIZATION */
  initializeExpressMiddleware = async () => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ limit: "6kb" }));
    app.use(morgan("dev"));
    app.use("/public", express.static(path.resolve(path.join(__dirname), "src", "public")));
    app.use(
      cors({
        origin: "*",
        methods: ["GET", "HEAD", "PUT", "OPTIONS", "PATCH", "POST", "DELETE"]
      })
    );
    app.use("/health", useHealthHelper);
    app.use("/api/v1", RootRoutes);
    app.use("*", useNotFoundHelper);
    app.use(useErrorMiddleware);
  };

  /** INITIALIZATION EXPRESS ENGINE INSTANCE */
  initializeExpressEngineInstance = async () => {
    return new Promise((resolve) => {
      const http = app.listen(3010, () => {
        const { port } = http.address();
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

export default ExpressEngine;
