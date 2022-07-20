require("dotenv").config();
const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const colors = require("colors");

// import middlewares
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

// import routers
const taskRouter = require("./routes/taskRoutes");

//------------------
// Middlewares
//------------------
app.use(express.static("./public"));
app.use(express.json());

// test route
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

//----------------------
// Mounting the router
//---------------------
app.use("/api/v2/tasks", taskRouter);

// Custom Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//-------------
// Start Server
//-------------
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    const conn = await connectDB(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    app.listen(5000, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${port}...`
          .yellow.bold
      );
    });
  } catch (error) {
    console.log(`Error 🔥: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

start();
