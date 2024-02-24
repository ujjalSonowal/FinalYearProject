const express = require("express");
const router = express.Router();
const {
  addEvent,
  allEvent,
  singleEvent,
  deleteEvent,
  updateEvent,
} = require("../Controller/eventController");

router.post("/add-event", addEvent); // Add a new event to the database

router.get("/", allEvent); // get all events

router.get("/:id", singleEvent); // get a event by id

router.patch("/:id", updateEvent); // update an existing event

router.delete("/:id", deleteEvent); // delete event

module.exports = router;
