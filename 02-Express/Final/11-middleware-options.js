const express = require("express");
const app = express();

const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// 1. use Vs route
// 2. options - our own / express / third-party

//-------------------
// MIDDLEWARE
//-------------------
// app.use([authorize, logger]);
// app.use(express.static("./public"));

// app.use(morgan("tiny"));
app.use(morgan("dev"));

//-------------
// Operations
//-------------
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", [authorize, logger], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

//---------------------
// Listening to Server
//---------------------
app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
