const express = require("express");
const router = express.Router();
const {
  addBookings,
  allBookings,
  singleBookings,
  deleteBookings,
  updateBookings,
} = require("../Controller/bookingController");

router.post("/addbooking", addBookings); // Add a new booking to the database

router.get("/", allBookings); // get all users

router.get("/:id", singleBookings); // get a user by id

router.patch("/:id", updateBookings); // update an existing user

router.delete("/:id", deleteBookings); // delete user

module.exports = router;
