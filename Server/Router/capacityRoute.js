const express = require("express");
const router = express.Router();

const {
  updatecapacity,
  deletecapacity,
  addcapacity,
} = require("../Controller/capacity");

router.post("/add/:id", addcapacity); //Adding new capacity
router.delete("/remove/:id", deletecapacity); //Removing the capacity
router.patch("/update/:id", updatecapacity); //Updating the existing capacity

module.exports = router;
