const express = require("express");
const router = express.Router();

// import controller
const taskController = require("../controllers/taskController");

//----------------
// Define Routes
//----------------
router.route("/").get(taskController.getAllTasks);

//----------------
// Default Export
//----------------
module.exports = router;
