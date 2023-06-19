import express from "express";
import userControllers from "../../controllers/userControllers/userControllers.js";
import { verifyJWT } from "../../middlewares/verifyJWT.js";


const personalRouter = express.Router();

const nomeRota = "personalLayer";

personalRouter.route(`/${nomeRota}/dev`)
    .get(verifyJWT("Personal"), userControllers.desenvolvimento);

personalRouter.route(`/${nomeRota}`)
    .post(verifyJWT("Personal"), userControllers.createUser)
    .get(verifyJWT("Personal"), userControllers.getAllUsers);

personalRouter.route(`/${nomeRota}/:id`)
    .get(verifyJWT("Personal"), userControllers.getUserById)
    .put(verifyJWT("Personal"), userControllers.updateUser)
    .delete(verifyJWT("Personal"), userControllers.deleteUser);

export default personalRouter;
