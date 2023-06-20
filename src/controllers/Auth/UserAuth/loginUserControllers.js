import User from "../../../models/gymModels/usersModels.js";
import mongoose from "mongoose";
import loginClass from '../../../services/bcryptFunc.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const SECRETKEY = process.env.SECRETKEY;

class loginUserControllers {
    /**Login User */
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            // Verifica se o usuário existe
            const user = await User.findOne({ email }).populate('gym_id', 'name');
            const { gym_id } = user;            
            if (!user) {
                const response = {
                    message: 'Invalid user/email or password',
                    success: false,
                    statusCode: 404,
                };
                res.status(404).json(response);
                return;
            }

            // Verifica se a senha está correta            
            const match = await loginClass.verifyPassword(password, user.hash);
            if (!match) {
                const response = {
                    message: 'Invalid user/email or password',
                    success: false,
                    statusCode: 401,
                };
                res.status(401).json(response);
                return;
            }

            // Gera o token JWT
            const token = jwt.sign({ id: user._id, email: user.email, name: user.name, role: user.role, gym_id: gym_id }, SECRETKEY, {
                expiresIn: '5h'
            });

            const response = {
                user: user._id,
                auth: true,
                token: token,
                expiresIn: "5h",
                message: "Login successful",
                success: true,
                statusCode: 200,
            };
            res.status(200).json(response);
        } catch (error) {
            const response = {
                message: error.message,
                success: false,
                statusCode: 500,
            };
            res.status(500).json(response);
        }
    }
  

    static dev(req, res) {

        res.status(200).send(req.decoded);

    }
}


export default loginUserControllers;