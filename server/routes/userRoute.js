const express = require("express");
const {
  registerValorantController,
  registerBGMIController,
  registerCODMController,
  registerMinecraftController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// routers
// POST || Schema Data
router.route("/register/valorant").post(registerValorantController);
router.route("/register/bgmi").post(registerBGMIController);
router.route("/register/codm").post(registerCODMController);
router.route("/register/minecraft").post(registerMinecraftController);

module.exports = router;
