const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const user = require("../Model/usermodel");
const secretKey = "secret-key";

const signup = async (req, res) => {
  const { name, email, password, usertype } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email is already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await user.create({
      name,
      email,
      password: hashPassword,
      usertype,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      secretKey,
      { expiresIn: "1h" }
    );

    if (!newUser) {
      res.status(404).json({ msg: " user not found" });
    }

    res.status(200).json({ result: newUser, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

//login page
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await user.findOne({ email });

    if (!users) {
      res.status(404).json({ mgs: "email is not registered" });
    }
    const validPassword = await bcrypt.compare(password, users.password);

    if (!validPassword) {
      res.status(404).json({ mgs: "invalid password" });
    }
    const token = jwt.sign({ email: users.email, id: users._id }, secretKey, {
      expiresIn: "1h",
    });
    res.status(201).json({ result: users, token });
  } catch (err) {
    res.status(404).json({ mgs: "user not found" });
  }
};

module.exports = { signup, login };
