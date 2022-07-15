const express = require("express");
const app = express();
const colors = require("colors");

// import routers
const taskRouter = require("./routes/taskRoutes");

//------------------
// Middlewares
//------------------
app.use(express.json());

// test route
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

//----------------------
// Mounting the router
//---------------------
app.use("/api/v2/tasks", taskRouter);

//-------------
// Start Server
//-------------
const PORT = 5000;
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}...`.yellow.bold);
});
