const authorize = (req, res, next) => {
  console.log("Authorization Middleware ran !!!");
  const { user } = req.query;

  if (user === "john") {
    req.user = { name: "john smith", id: 4 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
