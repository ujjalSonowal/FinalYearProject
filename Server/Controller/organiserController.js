const mongoose = require("mongoose");
const Organizer = require("../Model/organiserModel");

//Add new organizer
const addOrganizer = async (req, res) => {
  const postOrganizationData = req.body;
  const userId = req.userId;
  try {
    const newOrganization = await Organizer.create({
      ...postOrganizationData,
      userId,
    });
    if (!newOrganization)
      return res.status(400).json({ msg: "Failed to create new organization" });
    res.status(201).json(newOrganization);
  } catch (err) {
    res.status(400).json({ mgs: "Error" });
  }
};

//get all Organizer details
const allOrganizer = async (req, res) => {
  const organizers = await Organizer.find({}).sort({ createdAt: 1 });
  res.status(200).json(organizers);
};

//get all organize by top rating
const getByTopRating = async (req, res) => {
  const topRating = await Organizer.find().sort({ rating: -1 });
  res.status(200).json(topRating);
};

//get all organization gy low rating
const getByLowestRating = async (req, res) => {
  const lowRating = await Organizer.find().sort({ rating: 1 });
  res.status(200).json(lowRating);
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
    { ...updates }
  );

  if (!eventOrganizers) {
    res.status(404).json({ mgs: "user updated" });
  }

  res.status(200).json(eventOrganizers);
};

//post a service/ or add new services
const postservice = async (req, res) => {
  const { id: _id } = req.params;
  const { serviceName, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ error: "not a valid id" });
  }
  try {
    const updatedservice = await Organizer.findByIdAndUpdate(_id, {
      $addToSet: {
        services: [{ serviceName, description }],
      },
    });
    res.status(200).json(updatedservice);
  } catch (error) {
    res.status(400).json("error in updating");
  }
};

//delete services
const deleteservice = async (req, res) => {
  const { id: _id } = req.params;
  const { serviceId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("events unavailable...");
  }
  // if (!mongoose.Types.ObjectId.isValid(serviceId)) {
  //   return res.status(404).send("service unavailable...");
  // }
  try {
    await Organizer.updateOne(
      { _id },
      { $pull: { services: { _id: serviceId } } }
    );

    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(405).json(error);
  }
};

module.exports = {
  addOrganizer,
  allOrganizer,
  getSingleOrganizer,
  deleteOrganizer,
  updateOrganizer,
  getByTopRating,
  getByLowestRating,
  postservice,
  deleteservice,
};
