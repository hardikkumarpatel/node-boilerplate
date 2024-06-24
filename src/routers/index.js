import { Router } from "express";
const RootRoutes = Router();

// RootRoutes.use('/', async (req, res, next) => next());
RootRoutes.use("/user", require("./User/User.routes").default);
export default RootRoutes;
