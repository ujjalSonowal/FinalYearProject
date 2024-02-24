const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    organizerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    CreatedDate: {
      type: Date,
      required: true,
    },
    status: { type: Boolean }, // for active or inactive events
    capacity: { type: Number },
    TotalBooking: { type: Number, default: 0 },
    feedback: { type: String },
    rating: { type: Number },
    Price: { type: Number },
    comment: {
      commentBody: { type: String },
      commentDate: { type: Date },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    },
    //Gallery(image & video)
  },

  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
