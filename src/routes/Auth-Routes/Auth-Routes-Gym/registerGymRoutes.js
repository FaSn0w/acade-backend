import express from "express";
import loginGymControllers from "../../../controllers/Auth/GymAuth/loginGymControllers.js";

const registerGymRouter = express.Router();

const nomeRota = "register";

registerGymRouter.route(`/${nomeRota}`)
  .post(loginGymControllers.register);

export default registerGymRouter;