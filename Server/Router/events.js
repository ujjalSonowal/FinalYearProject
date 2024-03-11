const express = require("express");
const router = express.Router();
const {
  addEvent,
  allEvent,
  singleEvent,
  deleteEvent,
  updateEvent,
  postcomment,
  deletecomment,
  getByHighRating,
  getByLowestRating,
  getByHighPrice,
  getByLowPrice,
} = require("../Controller/eventController");

router.post("/addevent", addEvent); // Add a new event to the database

//get all event by rating
router.get("/highrating", getByHighRating);
router.get("/lowrating", getByLowestRating);

//get all event by price
router.get("/lowprice", getByLowPrice);
router.get("/highprice", getByHighPrice);

router.get("/", allEvent); // get all events

router.get("/:id", singleEvent); // get a event by id

router.patch("/:id", updateEvent); // update an existing event

router.delete("/:id", deleteEvent); // delete event

router.patch("/comment/:id", postcomment); //post/update comment
router.patch("/comment/delete/:id", deletecomment); // delete comment

module.exports = router;
