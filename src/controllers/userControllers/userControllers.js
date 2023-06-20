import express from "express";
import Personal from "../../models/gymModels/personalModel.js";
import User from "../../models/gymModels/usersModels.js";
import loginClass from "../../services/bcryptFunc.js";



class userControllers {

    static async desenvolvimento(req, res) {
        try {
            const personal = await Personal.findOne({ _id: req.decoded.id }).select('-hash').populate('gym_id', 'name');
            if (!personal) {
                return res.status(404).json({ message: "Personal not found" });
            }
            const { _id, name } = personal;
            const { gym_id } = personal;
            const { _id: gymId, name: gymName } = gym_id;
            res.status(200).json({
                personal: {
                    _id,
                    name,
                    gym_id: { _id: gymId, name: gymName }
                }
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }



      static async getAllUsers(req, res) {

        try {      

          const users = await User.find({ gym_id: req.decoded.gym_id })
            .populate('gym_id', 'name email')
            .select("-hash")
            .exec();
          res.status(200).json(users);
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }

      static async createUser(req, res) {
        const { name, email } = req.body;
    
        try {
            // Verificar se já existe um usuário com o mesmo email
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
    
            const hash = await loginClass.hashPassword(email);
            const newUser = {
                name: name,
                email: email,
                active: true,
                hash: hash,
                gym_id: req.decoded.gym_id
            };
    
            const userCreated = new User(newUser);
            await userCreated.save();
    
            res.status(201).json(userCreated);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    

    static async getUserById(req, res) {
        const userId = req.params.id;

        try {
            const user = await User.findOne({ _id: userId, gym_id: req.decoded.gym_id})
                .populate('gym_id', 'name email')
                .select("-hash")
                .exec();
            if (!user) {
                return res.status(404).json({ message: "user not found" });
            }

            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

      static async updateUser(req, res) {
        const userId = req.params.id;
        const { name, email } = req.body;

        try {


          const user = await User.findOneAndUpdate(
            { _id: userId, gym_id: req.decoded.gym_id},
            { name, email },
            { new: true }
          )
            .populate('gym_id', 'name email')
            .select("-hash")
            .exec();

          if (!user) {
            return res.status(404).json({ message: "user not found" });
          }

          res.json(user);
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }

      static async deleteUser(req, res) {
        const userId = req.params.id;

        try {     

          const user = await User.findOneAndDelete({ _id: userId, gym_id: req.decoded.gym_id })
            .populate('gym_id', 'name email')
            .select("-hash")
            .exec();

          if (!user) {
            return res.status(404).json({ message: "user not found" });
          }

          res.json({ message: "user deleted successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }

}

export default userControllers;