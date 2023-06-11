import express from "express";
import CrudController from "../controllers/crudController.js";
import Tarefas from "../models/dados.js";

const crudRouter = express.Router();
const dadosController = new CrudController(Tarefas);

const rota = "Tarefas";

crudRouter.get(`/${rota}/listar`, dadosController.listar);
crudRouter.post(`/${rota}/cadastrar`, dadosController.cadastrar);
crudRouter.put(`/${rota}/atualizar/:id`, dadosController.atualizar);
crudRouter.get(`/${rota}/porID/:id`, dadosController.obterPorId);
crudRouter.delete(`/${rota}/excluir/:id`, dadosController.excluir);

export default crudRouter;
