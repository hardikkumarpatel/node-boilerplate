import StatusCodes, { getReasonPhrase } from "http-status-codes";
import { ApiErrorHandler, AsyncHandlerHelper, verifyToken } from "../../helpers/index";
import { sequelize } from "../../config";
const { ACCESS_TOKEN_SECRET } = process.env;

const useAuthMiddleware = AsyncHandlerHelper(async (req, res, next) => {
  const { cookies, headers } = req;
  const token = cookies?.["token"] || headers.authorization?.replace("Bearer ", "");
  if (!token) {
    throw new ApiErrorHandler(
      StatusCodes.UNAUTHORIZED,
      getReasonPhrase(StatusCodes.UNAUTHORIZED),
      "Unauthorised request! access token is missing"
    );
  }
  const decodeToken = await verifyToken(token, ACCESS_TOKEN_SECRET);
  const { email } = decodeToken;
  const user = await sequelize.models.User.findOne({ where: { email } });
  if (!user) {
    throw new ApiErrorHandler(
      StatusCodes.UNAUTHORIZED,
      getReasonPhrase(StatusCodes.UNAUTHORIZED),
      "Invalid user access token"
    );
  }

  req.user = user.dataValues;
  next();
});

export default useAuthMiddleware;
