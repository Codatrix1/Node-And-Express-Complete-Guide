require("dotenv").config();
require("express-async-errors");

// connectDB
const connectDB = require("./db/connect");

// Express
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

const productRouter = require("./routes/productRoutes");

// Middlewares
app.use(express.json());

// Testing Routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v2/products">Products Page</a>`);
});

// Mounting the Router
app.use("/api/v2/products", productRouter);

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
    await connectDB(process.env.MONGO_URI);
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
