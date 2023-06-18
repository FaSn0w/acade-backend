import  express  from "express";
import loginRouter from "./Auth-Routes-Gym/loginRoutes.js";
import registerRouter from "./Auth-Routes-Gym/registerRoutes.js";
import gymRouter from "./gymLayer/gymPowers.js";
import userRouter from "./personalLayer/personalPowers.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"AcadeDB"});
    })

    app.use(
        express.json(),        
        loginRouter,
        registerRouter,
        gymRouter

    )
}

export default routes;
