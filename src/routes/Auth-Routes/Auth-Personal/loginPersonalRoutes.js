import express from "express";
import loginPersonalControllers from "../../../controllers/Auth/PersonalAuth/loginPersonalControllers.js"
import {verifyJWT} from "../../../middlewares/verifyJWT.js";

const loginPersonalRouter = express.Router();

const nomeRota = "loginPersonal";

loginPersonalRouter.route(`/${nomeRota}`)
  .post(loginPersonalControllers.login);

loginPersonalRouter.route(`/${nomeRota}/dev`)
  .get(verifyJWT("Personal"),loginPersonalControllers.dev);


export default loginPersonalRouter;
