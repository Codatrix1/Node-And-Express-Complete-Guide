const colors = require("colors");
const express = require("express");
const app = express();

//------------------
// Express METHODS
//------------------
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Oops! Page Not Found</h1>");
});

//--------------
// Start SERVER
//--------------
app.listen(5000, () => {
  console.log(`Server running on port 5000...`.yellow.bold);
});
