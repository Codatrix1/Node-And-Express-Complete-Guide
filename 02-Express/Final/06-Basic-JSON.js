const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

// Server
app.listen(5000, () => {
  console.log("Application running on port 5000...");
});
