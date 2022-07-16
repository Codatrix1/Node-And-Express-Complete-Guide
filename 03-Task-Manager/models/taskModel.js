const mongoose = require("mongoose");

//-------------------
// Define Task Schema
//-------------------
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a task name"],
    trim: true,
    maxlength: [20, "Task name cannot be more than 20 characters"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

//-------------------------
// Create Model and export
//------------------------
const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
