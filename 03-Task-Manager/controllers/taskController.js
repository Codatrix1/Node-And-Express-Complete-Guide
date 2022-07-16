// imports
const Task = require("../models/taskModel");

// @ desc Get All Tasks
// @ route GET /api/v2/tasks
// @ access Public
const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

// @ desc Get Single Task
// @ route GET /api/v2/tasks/:id
// @ access Public
const getSingleTask = (req, res) => {
  // Test for params
  res.json({ id: req.params.id });
};

// @ desc Create Task
// @ route POST /api/v2/tasks
// @ access Public
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// @ desc Update Task
// @ route PATCH /api/v2/tasks/:id
// @ access Public
const updateTask = (req, res) => {
  res.send("Update Task");
};

// @ desc Delete Task
// @ route DELETE /api/v2/tasks/:id
// @ access Public
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

//---------------
// Named Exports
//---------------
module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
