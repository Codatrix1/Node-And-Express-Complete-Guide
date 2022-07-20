require("dotenv").config();

// Async Handler

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

// Middlewares
app.use(express.json());

// Testing Routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v2/products">Products Page</a>`);
});

// Products Route

// Invoke Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//--------------
// START SERVER
//--------------
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    // connectDB
    app.listen(port, (req, res) => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
