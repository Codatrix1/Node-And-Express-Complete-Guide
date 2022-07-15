const express = require("express");
const app = express();
const colors = require("colors");

// static assets
app.use(express.static("./methods-public"));
// parse FORM data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// Import Routers
const peopleRouter = require("./routes/peopleRoutes");
const authRouter = require("./routes/authRoutes");

// Mounting the router
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

//---------------------
// Listening to Server
//---------------------
app.listen(5000, () => {
  console.log(`Server is running on port 5000...`.yellow.bold);
});
