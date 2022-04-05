const { Router } = require("express");
const router = Router();
const XYController = require("../controllers/XYController");

router.post("/add_gym", XYController.createGym);
router.get("/xy_gyms", XYController.readGyms);

router.post("/add_league_member", XYController.createLeagueMember);
router.get("/xy_league_members", XYController.readLeagueMembers);

router.post("/add_rival_battle", XYController.createRivalBattle);
router.get("/xy_rival_battles", XYController.readRivalBattles);

router.post("/add_lysandre_battle", XYController.createLysandreBattle);
router.get("/xy_lysandre_battles", XYController.readLysandreBattles);

module.exports = router;
