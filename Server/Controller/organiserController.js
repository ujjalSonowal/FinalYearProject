const mongoose = require("mongoose");
const Organizer = require("../Model/organiserModel");

//Add new organizer
const addOrganizer = async (req, res) => {
  const {
    companyName,
    contactName,
    contactEmail,
    contactPhone,
    services,
    portfolio,
    feedback,
    rating,
  } = req.body;
  try {
    const newOrganizer = await Organizer.create({
      companyName,
      contactName,
      contactEmail,
      contactPhone,
      services,
      portfolio,
      feedback,
      rating,
    });
    if (!newOrganizer)
      return res.status(400).json({ msg: "Failed to create booking" });
    res.status(201).json(newOrganizer);
  } catch (err) {
    res.status(400).json({ mgs: "Error" });
  }
};

//get all Organizer details
const allOrganizer = async (req, res) => {
  const organizers = await Organizer.find({}).sort({ createdAt: -1 });
  res.status(200).json(organizers);
};

// get single organizer by id
const getSingleOrganizer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const allOrganizer = await Organizer.findById(id);

  if (!allOrganizer) {
    return res.status(404).json({ msg: "no user found" });
  }
  res.status(200).json(allOrganizer);
};

//delete Organizers details
const deleteOrganizer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "No User Found with this ID!" });
  }
  const deleteOrganizer = await Organizer.findOneAndDelete({ _id: id });
  if (!deleteOrganizer) {
    return res.status(404).json({ msg: "No User Found with this ID" });
  }
  res.status(201).json(deleteOrganizer);
};

//update Organizer
const updateOrganizer = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const eventOrganizers = await Organizer.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!eventOrganizers) {
    res.status(404).json({ mgs: "user updated" });
  }

  res.status(200).json(eventOrganizers);
};

module.exports = {
  addOrganizer,
  allOrganizer,
  getSingleOrganizer,
  deleteOrganizer,
  updateOrganizer,
};
