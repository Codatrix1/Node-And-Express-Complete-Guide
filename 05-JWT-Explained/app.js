require("dotenv").config();
require("express-async-errors");

// Express
const express = require("express");
const app = express();

const mainRouter = require("./routes/mainRoutes");

const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

// Middlewares
app.use(express.static("./public"));
app.use(express.json());

// Mounting the router
app.use("/api/v2", mainRouter);

// Invoke Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//--------------
// START SERVER
//--------------
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, (req, res) => {
      console.log(
        `Connected to Database: Server is running on port ${port}...`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
