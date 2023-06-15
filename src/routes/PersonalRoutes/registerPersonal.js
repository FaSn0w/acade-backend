import express from "express";
import personalControllers from "../../controllers/personalControllers/personalControllers.js";
import { verifyJWT } from "../../middlewares/verifyJWT.js";

const personalRouter = express.Router();

const nomeRota = "personalReg";

personalRouter.route(`/${nomeRota}`)
  .post(verifyJWT, personalControllers.createPersonal)
  .get(verifyJWT, personalControllers.getAllPersonals);

personalRouter.route(`/${nomeRota}/:id`)
  .get(verifyJWT, personalControllers.getPersonalById)
  .put(verifyJWT, personalControllers.updatePersonal)
  .delete(verifyJWT, personalControllers.deletePersonal);

export default personalRouter;

