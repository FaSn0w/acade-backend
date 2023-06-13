import  express  from "express";
import  crudRouter from "./dadosRoutes.js"
import loginRouter from "./Auth-Routes/loginRoutes.js";
import registerRouter from "./Auth-Routes/registerRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"AcadeDB"});
    })

    app.use(
        express.json(),        
        loginRouter,
        registerRouter
    )
}

export default routes;
