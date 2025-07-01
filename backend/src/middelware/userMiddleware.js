const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  console.log(req);

  try {
    const token = req.cookies.token;
    //    return console.log(token);
    const decoded = jwt.verify(token, "event-key");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Tokenssss" });
  }
};

module.exports.verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
