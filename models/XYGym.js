const { model, Schema } = require("mongoose");

const Gym = model(
  "pkm_xy_gym",
  new Schema({
    location: { type: String, required: true },
    speciality: { type: String, required: true },
    reward: { type: Array, required: true },
    description: { type: String, required: true },
    leader: {
      name: { type: String, required: true },
      img_url: { type: String, required: true },
      team: { type: Array, required: true },
    },
  })
);

module.exports = Gym;
