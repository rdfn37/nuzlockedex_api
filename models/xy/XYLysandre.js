const { model, Schema } = require("mongoose");

const XYLysandreBattle = model(
  "pkm_xy_lysandre_battle",
  new Schema({
    order: { type: String, required: true },
    reward: { type: String, required: true },
    location: { type: String, required: true },
    img_url: { type: String, required: true },
    team: { type: Array, required: true },
  })
);

module.exports = XYLysandreBattle;
