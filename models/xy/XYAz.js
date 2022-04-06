const { model, Schema } = require("mongoose");

const XYAzBattle = model(
  "pkm_xy_az_battle",
  new Schema({
    reward: { type: String },
    location: { type: String, required: true },
    img_url: { type: String, required: true },
    team: { type: Array, required: true },
  })
);

module.exports = XYAzBattle;