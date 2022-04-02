const { Router } = require("express");
const router = Router();

const gymRoutes = require("./gymRoutes");

router.use(gymRoutes)

module.exports = router