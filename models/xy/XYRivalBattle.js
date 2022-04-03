const { model, Schema } = require("mongoose");

const XYRivalBattle = model(
    "pkm_xy_rival_battle",
    new Schema({
        order: {type: String, required: true},
        reward: {type: String, required: true},
        location: {type: String, required: true},
        teams: {type: Array, required: true}
    })
)

module.exports = XYRivalBattle