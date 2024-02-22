const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const user = require("../Model/usermodel");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email is already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await user.create({ name, email, password: hashPassword });

    if (!newUser) {
      res.status(404).json({ msg: " user not found" });
    }

    res.status(200).json(newUser);
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
    res.status(201).json(users);
  } catch (err) {
    res.status(404).json({ mgs: "user not found" });
  }
  // const users = await user.findOne({ email });
  // if (!users) {
  //   return res.status(400).json({ msg: "No user with this email found" });
  // } else {
  //   const valid = await bcrypt.compare(password, user.password);

  //   if (!valid) {
  //     return res.status(400).json({ msg: "Invalid Password" });
  //   }
  //   res.status(201).json(users);

  //return jsonwebtoken
  //     const token = signToken(user._id);
  //     res.cookie("jwt", token, { httpOnly: true }).send({
  //         _id: user._id,
  //         name: user.name,
  //         email: user.email,
  //         token,
  //     });
  // }
};

module.exports = { signup, login };
