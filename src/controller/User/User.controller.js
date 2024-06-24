import { StatusCodes } from "http-status-codes";
import { ApiResponseHandler, AsyncHandlerHelper } from "../../helpers";

class UserController {
  constructor() {}

  static createUserController = AsyncHandlerHelper(async (req, res, next) => {
    return res
      .status(StatusCodes.OK)
      .json(
        new ApiResponseHandler(
          StatusCodes.OK,
          "Applicant with all drivers details fetched successfully",
          {}
        )
      );
  });
}

export default UserController;
