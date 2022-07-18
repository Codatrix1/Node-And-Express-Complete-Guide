// imports
const Task = require("../models/taskModel");
const asyncWrapper = require("../middlewares/asyncWrapperMiddleware");

// @ desc Get All Tasks
// @ route GET /api/v2/tasks
// @ access Public
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json(tasks); // <----- ⭐ AS in the MERN Project
  // res.status(200).json({ nbHits: tasks.length, tasks });
  // res.status(200).json({ success: true, data: { tasks } });
});

// @ desc Get Single Task
// @ route GET /api/v2/tasks/:id
// @ access Public
const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `No task found with the ID: ${taskID}` });
  }

  res.status(200).json({ task });
});

// @ desc Create Task
// @ route POST /api/v2/tasks
// @ access Public
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// @ desc Delete Task
// @ route DELETE /api/v2/tasks/:id
// @ access Public
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `No task found with the ID: ${taskID}` });
  }
  res.status(200).json({ task });
  // res.status(200).send();
  // res.status(200).json({ status: "success", task: null });
});

// @ desc Update Task
// @ route PATCH /api/v2/tasks/:id
// @ access Public
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No tak found with the ID: ${taskID}` });
  }

  res.status(200).json({ task });
});

// @ desc Update Task: For Testing ONLY
// @ route PUT /api/v2/tasks/:id
// @ access Public
const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `No tak found with the ID: ${taskID}` });
  }

  res.status(200).json({ task });
});

//---------------
// Named Exports
//---------------
module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
  editTask,
};
