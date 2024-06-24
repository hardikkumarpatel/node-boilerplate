import { Router } from "express";
import { UserController } from "../../controller";
import useAuthMiddleware from "../../middleware/Auth/Auth.middleware";
const UserRoutes = Router();

UserRoutes.use(useAuthMiddleware);
UserRoutes.route("/create").get(UserController.getUsersController);

export default UserRoutes;
