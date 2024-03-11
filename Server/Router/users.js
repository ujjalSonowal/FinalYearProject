const express = require("express");
const router = express.Router();
const {
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
} = require("../Controller/userController");

const { login, signup } = require("../Controller/auth");

router.get("/", allUsers); // get all users

router.post("/login", login);
router.post("/signup", signup);

router.get("/:id", singleUser); // get a user by id

router.patch("/:id", updateUser); // update an existing user

router.delete("/:id", deleteUser); // delete user

module.exports = router;
