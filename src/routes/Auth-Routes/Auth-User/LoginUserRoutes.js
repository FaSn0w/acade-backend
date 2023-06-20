import express from "express";
import loginUserControllers from "../../../controllers/Auth/UserAuth/loginUserControllers.js";
import {verifyJWT} from "../../../middlewares/verifyJWT.js";

const loginUserRouter = express.Router();

const nomeRota = "loginUsers";

loginUserRouter.route(`/${nomeRota}`)
  .post(loginUserControllers.login);

loginUserRouter.route(`/${nomeRota}/dev`)
  .get(verifyJWT("Users"),loginUserControllers.dev);


export default loginUserRouter;