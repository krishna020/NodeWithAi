const jwt = require("jsonwebtoken");
const authenticator = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) {
    return res.status(400).json({
      status: false,
      message: "Please provide Token",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: "Invaild User login",
      });
    }
    req.user = decode;
  });

  next();
};

module.exports = authenticator;
