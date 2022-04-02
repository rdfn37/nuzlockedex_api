const { Router } = require("express");
const router = Router();
const GymController = require("../controllers/GymController");

router.post("/addgym", GymController.createGym);
router.get("/xy_gyms", GymController.readXYGyms)

module.exports = router;