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
    //feedback, rating, price, gallery(image & video), comment[commentbody,commentdate, userid, ]
  },

  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
