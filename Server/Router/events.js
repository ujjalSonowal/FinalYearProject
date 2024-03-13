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

// router.patch("/:id/price", async (req, res) => {
//   try {
//     await updatePrice(req, res);
//   } catch (error) {
//     console.error("Error updating price:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

router.delete("/price/:id", deletePrice);

router.post("/price/:id", addPrice);

module.exports = router;
