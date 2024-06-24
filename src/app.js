import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { LoggerService } from "./utils";
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
        app.use(
            "/public",
            express.static(path.resolve(path.join(__dirname), "src", "public"))
        );
        app.use(
            cors({
                origin: "*",
                methods: ["GET", "HEAD", "PUT", "OPTIONS", "PATCH", "POST", "DELETE"],
            })
        );
        app.use("/health", useHealthHelper)
        app.use("/api/v1", RootRoutes)
        app.use("*", useNotFoundHelper)
        app.use(useErrorHandlerMiddleware)
    };

    /* INITIALIZATION DATABASE ENGINE  */
    initializationDatabase = async () => {
        return new Promise(resolve => {
            /* DATABASE AUTHENTICATION */
            sequelize.authenticate()
                .then(() => {
                    logger.info('Sequelize database has been connected and initialized! 🌱');
                    resolve();
                })
                .catch((DBException) => {
                    logger.error('Error occurred during database initialization', GeneralError(DBException));
                    process.exit(1);
                });
        })
    };

    /** INITIALIZATION EXPRESS ENGINE INSTANCE */
    initializeExpressEngineInstace = async () => {
        return new Promise((resolve) => {
            const http = this.server.listen(3010, () => {
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
        await this.initializationDatabase();
        await this.initializeExpressMiddleware();
        await this.initializeExpressEngineInstace();
    };
}

export default ExpressEngine;
