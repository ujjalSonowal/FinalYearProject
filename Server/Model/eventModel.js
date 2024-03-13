const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    organizerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organizer",
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    CreatedDate: {
      type: String, // later Date
    },
    status: { type: Boolean }, // for active or inactive events
    capacity: { type: [Number] }, //[100-200, 200-300..]
    TotalBooking: { type: Number, default: 0 },
    rating: { type: Number },
    Price: { type: [Number] },
    noofcomment: { type: Number },
    comment: [
      {
        commentBody: { type: String },
        commentDate: { type: Date, default: Date.now },
        userId: { type: String }, //{ type: mongoose.Schema.Types.ObjectId, ref: "user" },
      },
    ],
    image: { type: Buffer },
    video: { type: Buffer }, //multer
  },

  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
