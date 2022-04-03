const { Router } = require("express");
const router = Router();

const gymRoutes = require("./xyRoutes");

router.use(gymRoutes)

module.exports = router