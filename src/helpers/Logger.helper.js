import winston from "winston";

const date = () => {
  return new Date(Date.now()).toISOString();
};

class LoggerService {
  constructor() {
    const logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize({
          level: true,
          colors: {
            error: "red",
            info: "green",
            debug: "green"
          }
        }),
        winston.format.timestamp({
          format: date()
        }),
        winston.format.simple(),
        winston.format.printf((info) => {
          let message = `[${info.timestamp}] [${info.level}]: ${info.message}`;
          if (info.metadata) {
            message = `${message} | ${JSON.stringify(info.metadata, null, 2)}`;
          }
          return message;
        })
      )
    });
    this.logger = logger;
  }

  async info(message) {
    this.logger.info(message);
  }

  async info(message, metadata) {
    this.logger.info(message, { metadata });
  }

  async debug(message) {
    this.logger.debug(message);
  }

  async debug(message, metadata) {
    this.logger.debug(message, { metadata });
  }

  async error(message) {
    this.logger.error(message);
  }

  async error(message, metadata) {
    this.logger.error(message, { metadata });
  }
}

export default LoggerService;
