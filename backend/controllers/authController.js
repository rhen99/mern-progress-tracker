const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @route POST api/users/
// @desc Register a user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    res.status(400);
    throw new Error("Please add all required fields.");
  }
  const userExist = await User.findOne({ username });

  if (userExist) {
    res.status(400);
    throw new Error("This user already exist.");
  }

  const salt = await bcryptjs.genSalt();

  const hashedPassword = await bcryptjs.hash(password, salt);

  const user = await User.create({
    name,
    username,
    password: hashedPassword,
  });
  if (user) {
    res.status(200).json({
      name: user.name,
      username: user.username,
      _id: user.id,
      token: generateToken(user.id),
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please add all required fields.");
  }
  const user = await User.findOne({ username });

  if (user && bcryptjs.compare(password, user.password)) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});
const getUser = (req, res) => {
  res.status(200).json(req.user);
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};
module.exports = { registerUser, login, getUser };
