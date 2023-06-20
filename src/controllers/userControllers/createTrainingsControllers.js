import express from "express";
import Training from "../../models/gymModels/trainingModel.js";
import User from "../../models/gymModels/usersModels.js";


class trainingsController {

    static async createTraining(req, res) {
        const { name, user_id } = req.body;
        const { gym_id } = req.decoded;

        try {
            const user = await User.findById(user_id);

            if (!user || user.gym_id !== gym_id) {
                return res.status(403).json({ message: "Access denied" });
            }

            const newTraining = new Training({
                name,
                user_id
            });

            await newTraining.save();

            res.status(201).json(newTraining);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getAllTrainings(req, res) {
        const { user_id } = req.body;
        const { gym_id } = req.decoded;

        try {

            const user = await User.findById(user_id);

            if (!user || user.gym_id !== gym_id) {
                return res.status(403).json({ message: "Access denied" });
            }

            const trainings = await Training.find({ user_id });
            res.status(200).json(trainings);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };

    static async getTrainingById(req, res) {
        const { id } = req.params;
        const { gym_id } = req.decoded;

        try {

            const user = await User.findById(user_id);

            if (!user || user.gym_id !== gym_id) {
                return res.status(403).json({ message: "Access denied" });
            }

            const training = await Training.findById(id);
            if (!training) {
                return res.status(404).json({ message: "Training not found" });
            }
            res.status(200).json(training);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };


    static async updateTraining(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const { gym_id } = req.decoded;

        try {

            const user = await User.findById(user_id);

            if (!user || user.gym_id !== gym_id) {
                return res.status(403).json({ message: "Access denied" });
            }

            const training = await Training.findById(id);
            if (!training) {
                return res.status(404).json({ message: "Training not found" });
            }

            training.name = name;
            await training.save();

            res.status(200).json(training);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };


    static async deleteTraining(req, res) {
        const { id } = req.params;
        const { gym_id } = req.decoded;

        try {
            
            const user = await User.findById(user_id);

            if (!user || user.gym_id !== gym_id) {
                return res.status(403).json({ message: "Access denied" });
            }

            const training = await Training.findById(id);
            if (!training) {
                return res.status(404).json({ message: "Training not found" });
            }

            await training.remove();

            res.status(200).json({ message: "Training deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };

}