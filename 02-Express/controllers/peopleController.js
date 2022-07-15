const { people } = require("../data");

// @ desc Get All People
// @ route GET /api/people
// @ access Public
const getAllPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

// @ desc Create new person
// @ route POST /api/people
// @ access Public
const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  return res.status(201).json({ success: true, person: name });
};

// @ desc Create new person postman
// @ route POST /api/people/postman
// @ access Public
const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  return res.status(201).json({ success: true, data: [...people, name] });
};

// @ desc Update Person
// @ route PUT /api/people/:id
// @ access Public
const updatePerson = (req, res) => {
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
};

// @ desc Delete Person
// @ route DELETE /api/people/:id
// @ access Public
const deletePerson = (req, res) => {
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
};

//--------------
// Named Export
//--------------
module.exports = {
  getAllPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
