import { StatusCodes } from "http-status-codes";
import { ApiResponseHandler, AsyncHandlerHelper } from "../../helpers";

class UserController {
  constructor() {}

  static getUsersController = AsyncHandlerHelper(async (req, res, next) => {
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponseHandler(
          StatusCodes.OK,
          "Users fetched successfully",
          []
        )
      );
  });
}

export default UserController;
