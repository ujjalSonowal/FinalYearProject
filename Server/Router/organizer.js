const express = require("express");
const router = express.Router();
const {
  addOrganizer,
  allOrganizer,
  getSingleOrganizer,
  deleteOrganizer,
  updateOrganizer,
} = require("../Controller/organiserController");

router.post("/add-organizer", addOrganizer); // Add a new organizer to the database

router.get("/", allOrganizer); // get all organizer

router.get("/:id", getSingleOrganizer); // get a organizer by id

router.patch("/:id", updateOrganizer); // update an existing organizer/client

router.delete("/:id", deleteOrganizer); // delete organizer

module.exports = router;
