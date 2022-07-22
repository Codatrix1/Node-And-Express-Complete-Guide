// check username,password in POST(login) request
// if exists create JWT
// send to frontend

// setup authentication so the only request with JWT can access the dashboard

const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  // Mongoose validation
  // Joi package
  // manual check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  // Just for demo, normally provided by DB !!!
  const id = new Date().getDate();

  // console.log(id);

  // try to keep payload small, better UI Experience
  // just for demo, in production, use long, complex and unguessable string value !!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello Jane Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
