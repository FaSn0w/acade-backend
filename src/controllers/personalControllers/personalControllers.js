import express from "express";
import Personal from "../../models/gymModels/personalModel.js";
import loginClass from "../../services/bcryptFunc.js";



class personalControllers {


  static async getAllPersonals(req, res) {
    try {
      if (req.decoded.role !== "Admin") {
        return res.status(403).json({ message: "Access denied. Only Admin role is allowed." });
      }
      const personals = await Personal.find({ gym_id: req.decoded.id })
        .populate('gym_id', 'name email')
        .select("-hash")
        .exec();
      res.json(personals);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createPersonal(req, res) {
    const { name, email } = req.body;
    console.log(name, email);
    console.log(req.decoded);

    const hash = await loginClass.hashPassword(email);
    const newPersonal = {
      name: name,
      email: email,
      role: "Personal",
      active: true,
      hash: hash,
      gym_id: req.decoded.id
    };

    try {
      if (req.decoded.role !== "Admin") {
        return res.status(403).json({ message: "Access denied. Only Admin role is allowed." });
      }

      const personal = new Personal(newPersonal);
      await personal.save();

      res.status(201).json(personal);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getPersonalById(req, res) {
    const personalId = req.params.id;

    try {
      if (req.decoded.role !== "Admin" && req.decoded.id !== req.params.id) {
        return res.status(403).json({ message: "Access denied. You can only retrieve your own personal information." });
      }

      const personal = await Personal.findOne({ _id: personalId, gym_id: req.decoded.id })
        .populate('gym_id', 'name email')
        .select("-hash")
        .exec();
      if (!personal) {
        return res.status(404).json({ message: "Personal not found" });
      }

      res.json(personal);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async updatePersonal(req, res) {
    const personalId = req.params.id;
    const { name, email } = req.body;

    try {
      if (req.decoded.role !== "Admin" && req.decoded.id !== req.params.id) {
        return res.status(403).json({ message: "Access denied. You can only update your own personal information." });
      }

      const personal = await Personal.findOneAndUpdate(
        { _id: personalId, gym_id: req.decoded.id },
        { name, email },
        { new: true }
      )
        .populate('gym_id', 'name email')
        .select("-hash")
        .exec();

      if (!personal) {
        return res.status(404).json({ message: "Personal not found" });
      }

      res.json(personal);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deletePersonal(req, res) {
    const personalId = req.params.id;

    try {
      if (req.decoded.role !== "Admin" && req.decoded.id !== req.params.id) {
        return res.status(403).json({ message: "Access denied. You can only delete your own personal information." });
      }

      const personal = await Personal.findOneAndDelete({ _id: personalId, gym_id: req.decoded.id })
        .populate('gym_id', 'name email')
        .select("-hash")
        .exec();

      if (!personal) {
        return res.status(404).json({ message: "Personal not found" });
      }

      res.json({ message: "Personal deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

}

export default personalControllers;