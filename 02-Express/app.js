const express = require("express");
const app = express();

// Data Source
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// parse FORM data
app.use(express.urlencoded({ extended: false }));

//-------------
// GET Method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//-------------
// POST Method
app.post("/login", (req, res) => {
  // destructure "name" from the req.body
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  return res.status(401).send("Please provide credentials");
});

//---------------------
// Listening to Server
//---------------------
app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
