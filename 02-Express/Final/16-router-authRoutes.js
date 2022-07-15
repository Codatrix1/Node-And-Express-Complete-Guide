const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

//---------------
// Define Routes
//---------------
router.route("/").post(authController.login);

//-----------------
// Default Export
//-----------------
module.exports = router;
