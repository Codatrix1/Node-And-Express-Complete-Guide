const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

//---------------
// Define Routes
//----------------
router.route("/dashboard").get(mainController.dashboard);
router.route("/login").post(mainController.login);

//-----------------
// Default export
//-----------------
module.exports = router;
