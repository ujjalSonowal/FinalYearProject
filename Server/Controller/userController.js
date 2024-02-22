const mongoose = require("mongoose");
const user = require("../Model/usermodel");

//get all users
const allUsers = async (req, res) => {
  const users = await user.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

// get single user
const singleUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const alluser = await user.findById(id);

  if (!alluser) {
    return res.status(404).json({ msg: "no user found" });
  }
  res.status(200).json(alluser);
};

//delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "No User Found with this ID!" });
  }
  const removeUser = await user.findOneAndDelete({ _id: id });
  if (!removeUser) {
    return res.status(404).json({ msg: "No User Found with this ID" });
  }
  res.status(201).json(removeUser);
};

//update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const update = await user.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!update) {
    res.status(404).json({ mgs: "user updated" });
  }

  res.status(200).json(update);
};

module.exports = { allUsers, singleUser, deleteUser, updateUser };
