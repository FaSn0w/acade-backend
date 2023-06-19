import  express  from "express";
import loginGymRouter from "./Auth-Routes/Auth-Routes-Gym/loginGymRoutes.js";
import registerGymRouter from "./Auth-Routes/Auth-Routes-Gym/registerGymRoutes.js";
import gymRouter from "./gymLayer/gymPowers.js";
import loginPersonalRouter from "../routes/Auth-Routes/Auth-Personal/loginPersonalRoutes.js"
import personalRouter from "./personalLayer/personalPowers.js";
import loginUserRouter from "./Auth-Routes/Auth-User/LoginUserRoutes.js";
const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo:"AcadeDB"});
    })

    app.use(
        express.json(),        
        loginGymRouter,
        registerGymRouter,
        gymRouter,
        loginPersonalRouter,
        personalRouter,
        loginUserRouter

    )
}

export default routes;
