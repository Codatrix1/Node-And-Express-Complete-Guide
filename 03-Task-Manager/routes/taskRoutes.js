const express = require("express");
const router = express.Router();

// import controller
const taskController = require("../controllers/taskController");

//----------------
// Define Routes
//----------------
router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route("/:id")
  .get(taskController.getSingleTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask)
  .put(taskController.editTask);

//----------------
// Default Export
//----------------
module.exports = router;
