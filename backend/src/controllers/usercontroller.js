const userModel = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.userRegister = async (req, res) => {
  try {
    const { image, username, email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      image,
      username,
      password: hashPassword,
      email,
      role,
    });

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      "event-key"
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User Created",
      user,
      token,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({
      email,
    });

    if (!user) {
      res.status(404).json("User not found");
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      res.status(404).json("Invalid Credentials");
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      "event-key"
    );

    res.cookie("token", token, {
      httpOnly: true, // prevents client-side JS from accessing the cookie
      secure: true, // ensures cookie is sent only over HTTPS
      sameSite: "strict", // prevents CSRF attacks (can be "lax" or "none" if needed)
    });
    res.status(201).json({ message: "User Logged In", token, isMatched, user });
  } catch (error) {
    res.status(404).json(error);
  }
};
