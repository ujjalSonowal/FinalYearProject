const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
      required: true,
    },
    services: [
      {
        serviceName: String,
        description: String,
        pricing: Number,
      },
    ],
    portfolio: [
      // for company logo
      {
        title: String,
        description: String,
        images: [String],
      },
    ],
    feedback: { type: String }, //feedback on Organizer/company
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);
const Organizer = mongoose.model("Organizer", organizerSchema);

module.exports = Organizer;
