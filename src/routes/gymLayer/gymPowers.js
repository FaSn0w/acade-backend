import express from "express";
import personalControllers from "../../controllers/personalControllers/personalControllers.js";
import { verifyJWT } from "../../middlewares/verifyJWT.js";

const gymRouter = express.Router();

const nomeRota = "gymAdmin";

// Add query e paginação

gymRouter.route(`/${nomeRota}`)
  .post(verifyJWT("Admin"), personalControllers.createPersonal)
  .get(verifyJWT("Admin"), personalControllers.getAllPersonals);

gymRouter.route(`/${nomeRota}/:id`)
  .get(verifyJWT("Admin"), personalControllers.getPersonalById)
  .put(verifyJWT("Admin"), personalControllers.updatePersonal)
  .delete(verifyJWT("Admin"), personalControllers.deletePersonal);

export default gymRouter;

