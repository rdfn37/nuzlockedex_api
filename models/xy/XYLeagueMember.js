const { model, Schema } = require("mongoose");

const XYLeagueMember = model(
  "pkm_xy_league_member",
  new Schema({
    name: { type: String, required: true },
    img_url: { type: String, required: true },
    speciality: { type: String, required: true },
    description: { type: String, required: true },
    team: { type: Array, required: true },
  })
);

module.exports = XYLeagueMember
