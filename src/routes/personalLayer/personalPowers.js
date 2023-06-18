import express from "express";
import userControllers from "../../controllers/personalControllers/personalControllers.js";
import { verifyJWT } from "../../middlewares/verifyJWT.js";

const personalRouter = express.Router();

const nomeRota = "personalLayer";

userRouter.route(`/${nomeRota}`)
  .post(verifyJWT("Personal"), userControllers.createUser)
  .get(verifyJWT("Personal"), userControllers.getAllUsers);

userRouter.route(`/${nomeRota}/:id`)
  .get(verifyJWT("Personal"), userControllers.getUserById)
  .put(verifyJWT("Personal"), userControllers.updateUser)
  .delete(verifyJWT("Personal"), userControllers.deleteUser);

export default personalRouter;
