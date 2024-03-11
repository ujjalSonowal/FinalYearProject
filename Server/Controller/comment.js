const mongoose = require("mongoose");
const event = require("../Model/eventModel");

const postcomment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody } = req.body;

  const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Event unavailable...");
  }

  try {
    const updatedEvent = await event.findByIdAndUpdate(_id, {
      $addToSet: { comment: [{ commentBody, userId }] },
    });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json("error in updating");
  }
};

const deleteComment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    //check if event id is valid or not..if not then give "event unavailable"
    return res.status(404).send("event unavailable...");
  }
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    return res.status(404).send("comment unavailable...");
  }
  try {
    await event.updateOne({ _id }, { $pull: { comment: { _id: commentId } } });
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(405).json(error);
  }
};

module.exports = {
  postcomment,
  deleteComment,
};
