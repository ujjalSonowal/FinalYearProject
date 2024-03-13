const mongoose = require("mongoose");
const Event = require("../Model/eventModel");

//update capacity
const updatecapacity = async (req, res) => {
  const { id: _id } = req.params;
  const { index, value } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404).json({ error: "not a vaild id" });
    }

    const update = {};
    update[`capacity.${index}`] = value;

    const data = await Event.findByIdAndUpdate(
      { _id },
      { $set: update },
      { new: true }
    );

    if (!data) {
      res.status(400).json({ error: "fail to update" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

//delete capacity
const deletecapacity = async (req, res) => {
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

    // Remove capacity at the specified index
    data.capacity.splice(index, 1);
    await data.save();

    return res.status(200).json({ message: "Price deleted successfully" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//add new capacity
const addcapacity = async (req, res) => {
  const { id: _id } = req.params;
  const { Capacity } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ error: "not a valid id" });
    }

    const data = await Event.findById(_id);

    if (!data) {
      return res.status(404).json({ error: "event not found" });
    }

    // Add the new capacity to the Capacity array
    data.capacity.push(Capacity);
    await data.save();

    return res.status(200).json({ message: "Capacity added successfully" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { updatecapacity, addcapacity, deletecapacity };
