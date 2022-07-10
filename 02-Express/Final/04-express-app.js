const express = require("express");
const app = express();

const colors = require("colors");
const path = require("path");

//------------------------------------
// Serve Static Assets and Middleware
//------------------------------------
app.use(express.static("./public"));

//-------------------
// Express Methods
//-------------------
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("Resource not found");
});

//---------------
// Start SERVER
//---------------
app.listen(5000, () => {
  console.log(`Server running on port 5000...`.yellow.bold);
});
