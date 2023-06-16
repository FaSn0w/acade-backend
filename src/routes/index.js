import  express  from "express";
import loginRouter from "./Auth-Routes/loginRoutes.js";
import registerRouter from "./Auth-Routes/registerRoutes.js";
import personalRouter from "./PersonalRoutes/registerPersonal.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"AcadeDB"});
    })

    app.use(
        express.json(),        
        loginRouter,
        registerRouter,
        personalRouter

    )
}

export default routes;
