// @ desc Login
// @ route POST /login
// @ access Public
const login = (req, res) => {
  // destructure "name" from the req.body
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  return res.status(401).send("Please provide credentials");
};

//--------------
// Named Export
//--------------
module.exports = { login };
