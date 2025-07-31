const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const OpenAI = require("openai");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env") });

const getuser = async (req, res) => {
  try {
    console.log("process.env.OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
    const users = await User.find();
    return res.status(200).json({
      status: true,
      message: "user created successfully",
      result: users,
    });
  } catch (err) {
    console.log("error: ", err);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const userData = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });

    await userData.save();
    return { status: 200, message: "User created successfully." };
  } catch (error) {
    return { status: 500, message: err };
  }
};

const getWetherInfo = async (req, res) => {
  try {
    const city = req.body.city;
    const api_key = process.env.OPEN_WETHER;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const data = await fetch(url);
    const response = await data.json();

    return res.status(200).json({
      status: true,
      message: "user created successfully",
      result: response,
    });
  } catch (err) {
    console.log("error: ", err);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

module.exports = { getuser, createUser, getWetherInfo };
