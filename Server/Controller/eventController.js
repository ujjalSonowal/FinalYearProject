const mongoose = require("mongoose");
const Event = require("../Model/eventModel");

//Add new event
// const addEvent = async (req, res) => {
//   const {
//     name,
//     type,
//     CreatedDate,
//     status,
//     capacity,
//     TotalBooking,
//     rating,
//     Price,
//     noofcomment,
//     comment,
//     image,
//     video,
//   } = req.body;
//   try {
//     const newEvent = await Event.create({
//       name,
//       type,
//       CreatedDate,
//       status,
//       capacity,
//       TotalBooking,
//       rating,
//       Price,
//       noofcomment,
//       comment,
//       image,
//       video,
//     });
//     if (!newEvent)
//       return res.status(400).json({ msg: "Failed to create new event" });
//     res.status(201).json(newEvent);
//   } catch (err) {
//     res.status(400).json({ mgs: "Error" });
//   }
// };

//create one event
const addEvent = async(req, res) => {
    const posteventdata = req.body;
    const userId = req.userId;
    // const organizerId = req.body;
    try {
        const postevent = await Event.create({
            ...posteventdata,
            userId,
            // organizerId,
        });
        if (!postevent) {
            res.status(500).json({ msg: " Server Error" });
        }
        res.status(201).json(postevent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get all event details
const allEvent = async(req, res) => {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
};

//get all event by high rating
const getByHighRating = async(req, res) => {
    const highRating = await Event.find().sort({ rating: -1 });
    res.status(200).json(highRating);
};

//get all event gy low rating
const getByLowestRating = async(req, res) => {
    const lowRating = await Event.find().sort({ rating: 1 });
    res.status(200).json(lowRating);
};

// get single event by id
const singleEvent = async(req, res) => {
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
const deleteEvent = async(req, res) => {
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
const updateEvent = async(req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ mgs: "not valid id" });
    }

    const eventUpdate = await Event.findOneAndUpdate({ _id: id }, { $set: {...updates } });

    if (!eventUpdate) {
        res.status(404).json({ mgs: "user updated" });
    }

    res.status(200).json(eventUpdate);
};

//update total no of comment
// const updatnoofcomment = async (_id, noofcomment) => {
//   try {
//     await Event.findByIdAndUpdate(_id, { $set: { noofcomment: noofcomment } });
//   } catch (error) {
//     console.log(error);
//   }
// };

//get all event by low price
const getByLowPrice = async(req, res) => {
    const lowPrice = await Event.find().sort({ Price: 1 }); //here 1 index indicate that  it will sort in ascending order(100, 200, 300...)
    res.status(200).json(lowPrice);
};

//get all event by high Price
const getByHighPrice = async(req, res) => {
    const highPrice = await Event.find().sort({ Price: -1 });
    res.status(200).json(highPrice);
};

//update price
const updatePrice = async(req, res) => {
    const { id: _id } = req.params;
    const { index, value } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            res.status(404).json({ error: "not a vaild id" });
        }

        const update = {};
        // update["Price." + index] = value;
        update[`Price.${index}`] = value;

        const data = await Event.findByIdAndUpdate({ _id }, { $set: update }, { new: true });

        if (!data) {
            res.status(400).json({ error: "fail to update" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};

//delete price
const deletePrice = async(req, res) => {
    const { id: _id } = req.params;
    const { index } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ error: "not a valid id" });
        }

        const data = await Event.findById(_id);

        if (!data) {
            return res.status(404).json({ error: "event not found" });
        }

        // Remove price at the specified index
        data.Price.splice(index, 1);
        await data.save();

        return res.status(200).json({ message: "Price deleted successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
};

//add new price
const addPrice = async(req, res) => {
    const { id: _id } = req.params;
    const { price } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json({ error: "not a valid id" });
        }

        const data = await Event.findById(_id);

        if (!data) {
            return res.status(404).json({ error: "event not found" });
        }

        // Add the new price to the Price array
        data.Price.push(price);
        await data.save();

        return res.status(200).json({ message: "Price added successfully" });
    } catch (error) {
        return res.status(400).json(error);
    }
};

//high rating with limit for slider
const getTopRating = async(req, res) => {
    const topRating = await Event.find().sort({ rating: -1 }).limit(3);
    res.status(200).json(topRating);
};
//high rating with limit for home
const getRatingHome = async(req, res) => {
    const homeRating = await Event.find().sort({ rating: -1 }).limit(6);
    res.status(200).json(homeRating);
};

module.exports = {
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
};