const express = require("express");
const app = express();
// Data Source
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// parse FORM data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

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

//-------------
// POST Method
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  return res.status(201).json({ success: true, person: name });
});

//-------------
// POST Method
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  return res.status(201).json({ success: true, data: [...people, name] });
});

//-------------
// PUT Method
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === +id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person found with the ID ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }

    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

//-------------
// DELETE Method
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `No person found with the ID ${req.params.id}`,
    });
  }

  const newPeople = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });

  return res.status(200).json({ success: true, data: newPeople });
});

//---------------------
// Listening to Server
//---------------------
app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
