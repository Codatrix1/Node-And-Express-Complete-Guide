// imports
const Task = require("../models/taskModel");

// @ desc Get All Tasks
// @ route GET /api/v2/tasks
// @ access Public
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    // res.status(200).json(tasks); // <----- ⭐ AS in the MERN Project
    // res.status(200).json({ nbHits: tasks.length, tasks });
    // res.status(200).json({ success: true, data: { tasks } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// @ desc Get Single Task
// @ route GET /api/v2/tasks/:id
// @ access Public
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `No task found with the ID: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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

// @ desc Delete Task
// @ route DELETE /api/v2/tasks/:id
// @ access Public
const deleteTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// @ desc Update Task
// @ route PATCH /api/v2/tasks/:id
// @ access Public
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `No tak found with the ID: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// @ desc Update Task: For Testing ONLY
// @ route PUT /api/v2/tasks/:id
// @ access Public
const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `No tak found with the ID: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
  editTask,
};
