const XYGym = require("../models/XYGym");
const { ObjectId } = require("mongoose").Types;

class GymController {
  static async createGym(req, res) {
    const { location, speciality, reward, description, leader } = req.body;

    const gym = XYGym({
      location,
      speciality,
      reward,
      description,
      leader,
    });
    try {
      await gym.save();
    } catch {
      res.status(201).json({ message: "Error!" });
      return;
    }

    res.status(201).json({ message: "New gym added!" });
  }

  static async readXYGyms(req, res) {
    const gyms = await XYGym.find().lean();

    res.json(gyms);
  }
}

module.exports = GymController;
