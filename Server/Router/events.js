const express = require("express");
const router = express.Router();
const {
    addEvent,
    allEvent,
    singleEvent,
    deleteEvent,
    updateEvent,
    getByHighRating,
    getByLowestRating,
    getByHighPrice,
    getByLowPrice,
    updatePrice,
    deletePrice,
    addPrice,
    getTopRating,
    getRatingHome,
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

//update price
router.patch("/price/:id", updatePrice);

router.delete("/price/:id", deletePrice);

router.post("/price/:id", addPrice);

router.get("/topratings", getTopRating); //limit(3) for slider

//rating for home
router.get("/homerating", getRatingHome);
module.exports = router;