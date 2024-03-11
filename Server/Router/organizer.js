const express = require("express");
const router = express.Router();
const {
  addOrganizer,
  allOrganizer,
  getSingleOrganizer,
  deleteOrganizer,
  updateOrganizer,
  getByTopRating,
  getByLowestRating,
  postservice,
  deleteservice,
} = require("../Controller/organiserController");

router.post("/addorganizer", addOrganizer); // Add a new organizer to the database

//get by top rating
router.get("/toprating", getByTopRating);

//get by low rating
router.get("/lowrating", getByLowestRating);

router.get("/", allOrganizer); // get all organizer

router.get("/:id", getSingleOrganizer); // get a organizer by id

router.patch("/:id", updateOrganizer); // update an existing organizer/client

router.delete("/:id", deleteOrganizer); // delete organizer

//post service
router.patch("/service/:id", postservice);

//delete service
router.patch("/service/delete/:id", deleteservice);

module.exports = router;
