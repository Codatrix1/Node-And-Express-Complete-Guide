const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

const authMiddleware = require("../middlewares/authMiddleware");

//---------------
// Define Routes
//----------------
router
  .route("/dashboard")
  .get(authMiddleware.authenticationMiddleware, mainController.dashboard);

router.route("/login").post(mainController.login);

//-----------------
// Default export
//-----------------
module.exports = router;
