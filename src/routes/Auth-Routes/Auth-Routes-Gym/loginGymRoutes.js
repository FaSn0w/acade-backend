import express from "express";
import loginGymControllers from "../../../controllers/Auth/GymAuth/loginGymControllers.js";
import {verifyJWT} from "../../../middlewares/verifyJWT.js";

const loginGymRouter = express.Router();

const nomeRota = "login";

loginGymRouter.route(`/${nomeRota}`)
  .post(loginGymControllers.login);

loginGymRouter.route(`/${nomeRota}/dev`)
  .get(verifyJWT("Admin"),loginGymControllers.dev);


export default loginGymRouter;
