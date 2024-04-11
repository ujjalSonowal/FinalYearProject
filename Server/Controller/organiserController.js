const mongoose = require("mongoose");
const Organizer = require("../Model/organiserModel");

//Add new organizer
const addOrganizer = async(req, res) => {
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
const allOrganizer = async(req, res) => {
    const organizers = await Organizer.find({}).sort({ createdAt: 1 });
    res.status(200).json(organizers);
};

//get all organize by top rating
const getByTopRating = async(req, res) => {
    const topRating = await Organizer.find().sort({ rating: -1 });
    res.status(200).json(topRating);
};

//get all organization gy low rating
const getByLowestRating = async(req, res) => {
    const lowRating = await Organizer.find().sort({ rating: 1 });
    res.status(200).json(lowRating);
};

// get single organizer by id
const getSingleOrganizer = async(req, res) => {
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
const deleteOrganizer = async(req, res) => {
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
const updateOrganizer = async(req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ mgs: "not valid id" });
    }

    const eventOrganizers = await Organizer.findOneAndUpdate({ _id: id }, { $set: {...updates } });

    if (!eventOrganizers) {
        res.status(404).json({ mgs: "user updated" });
    }

    res.status(200).json(eventOrganizers);
};

//top rating with limit
const getByTopRatingWithLimit = async(req, res) => {
    const highRating = await Organizer.find().sort({ rating: -1 }).limit(6);
    res.status(200).json(highRating);
};

module.exports = {
    addOrganizer,
    allOrganizer,
    getSingleOrganizer,
    deleteOrganizer,
    updateOrganizer,
    getByTopRating,
    getByLowestRating,
    getByTopRatingWithLimit,
};