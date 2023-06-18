import express from "express";
import loginControllers from "../../controllers/Auth/loginControllers.js";
import {verifyJWT} from "../../middlewares/verifyJWT.js";

const loginRouter = express.Router();

const nomeRota = "login";

loginRouter.route(`/${nomeRota}`)
  .post(loginControllers.login);

loginRouter.route(`/${nomeRota}/dev`)
  .get(verifyJWT("User"),loginControllers.dev);


export default loginRouter;
