const mongoose = require("mongoose");
const Event = require("../Model/eventModel");

//Add new event
const addEvent = async (req, res) => {
  const {
    name,
    type,
    CreatedDate,
    status,
    capacity,
    TotalBooking,
    feedback,
    rating,
    Price,
    comment,
  } = req.body;
  try {
    const newEvent = await Event.create({
      name,
      type,
      CreatedDate,
      status,
      capacity,
      TotalBooking,
      feedback,
      rating,
      Price,
      comment,
    });
    if (!newEvent)
      return res.status(400).json({ msg: "Failed to create booking" });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ mgs: "Error" });
  }
};

//get all event details
const allEvent = async (req, res) => {
  const events = await Event.find({}).sort({ createdAt: -1 });
  res.status(200).json(events);
};

// get single event by id
const singleEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const allevent = await Event.findById(id);

  if (!allevent) {
    return res.status(404).json({ msg: "no user found" });
  }
  res.status(200).json(allevent);
};

//delete events
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "No User Found with this ID!" });
  }
  const deleteEvent = await Event.findOneAndDelete({ _id: id });
  if (!deleteEvent) {
    return res.status(404).json({ msg: "No User Found with this ID" });
  }
  res.status(201).json(deleteEvent);
};

//update event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const eventUpdate = await Event.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!eventUpdate) {
    res.status(404).json({ mgs: "user updated" });
  }

  res.status(200).json(eventUpdate);
};

module.exports = {
  addEvent,
  allEvent,
  singleEvent,
  deleteEvent,
  updateEvent,
};
