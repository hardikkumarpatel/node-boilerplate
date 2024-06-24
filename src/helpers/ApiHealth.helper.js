import { StatusCodes } from "http-status-codes";
import ApiErrorHandler from "./ApiErrorHandler.helper";
import ApiResponseHandler from "./ApiResponseHandler.helper";

const useHealthHelper = (req, res, next) => {
  const {
    env: { NODE_ENV },
    platform,
    pid
  } = process;
  return res.status(StatusCodes.OK).json(
    new ApiResponseHandler(StatusCodes.OK, "Welcome to backend! Made in Node with ❤️", {
      mode: NODE_ENV,
      platfrom: platform,
      pid: pid
    })
  );
};

const useNotFoundHelper = (req, res, next) => {
  throw new ApiErrorHandler(StatusCodes.NOT_FOUND, "Request Respurce Not Found");
};

export { useHealthHelper, useNotFoundHelper };
