// check username,password in POST(login) request
// if exists create JWT
// send to frontend

// setup authentication so the only request with JWT can access the dashboard

const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  // Mongoose validation
  // Joi package
  // manual check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  res.send("Fake Login/Register/SignUp");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello Jane Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
