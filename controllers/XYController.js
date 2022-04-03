const XYGym = require("../models/xy/XYGym");
const XYLeagueMember = require("../models/xy/XYLeagueMember");
const XYRivalBattle = require("../models/xy/XYRivalBattle");
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

  static async createLeagueMember(req, res) {
    const { name, img_url, speciality, description, team } = req.body;

    const leagueMember = XYLeagueMember({
      name,
      img_url,
      speciality,
      description,
      team,
    });
    try {
      await leagueMember.save();
    } catch {
      res.status(201).json({ message: "Error!" });
      return;
    }

    res.status(201).json({ message: "New league member added!" });
  }
  static async createRivalBattle(req, res) {
    const { order, reward, location, teams } = req.body;

    const rivalBattle = XYRivalBattle({
      order,
      reward,
      location,
      teams,
    });
    try {
      await rivalBattle.save();
    } catch {
      res.status(201).json({ message: "Error!" });
      return;
    }

    res.status(201).json({ message: "New rival battle added!" });
  }

  static async readGyms(req, res) {
    const gyms = await XYGym.find().lean();

    res.json(gyms);
  }

  static async readLeagueMembers(req, res) {
    const leagueMembers = await XYLeagueMember.find().lean();

    res.json(leagueMembers);
  }

  static async readRivalBattles(req, res) {
    const rivalBattles = await XYRivalBattle.find().lean();

    res.json(rivalBattles);
  }
}

module.exports = GymController;