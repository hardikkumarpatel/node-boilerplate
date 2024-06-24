import { ApiErrorHandler, LoggerService } from "../../helpers";
const logger = new LoggerService().logger;

const useErrorMiddleware = (err, req, res, next) => {
  let { statusCode, message, error = null, stack } = err;
  if (!statusCode) {
    statusCode = 500;
  }
  const errors = new ApiErrorHandler(statusCode, message, error, stack);
  if (process.env.NODE_ENV === "development") {
    logger.error(
      JSON.stringify(
        {
          ...errors,
          message,
          error,
          stack
        },
        null,
        2
      )
    );
  }
  const response = {
    ...errors,
    message,
    error,
    ...(process.env.NODE_ENV === "development" ? { stack } : {})
  };
  return res.status(statusCode).json(response);
};

export default useErrorMiddleware;
