const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: "Company name is required",
    },

    description: { type: String },

    ownerName: {
      type: String,
      required: "owner Name  is required",
    },
    contactEmail: {
      type: String,
      required: "Valid email address is required.",
    },

    contactPhone: {
      type: Number,
      required: "Contact phone number is required.",
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    services: [
      {
        serviceName: { type: String },
        description: { type: String },
        // pricing: Number,
      },
    ],

    address: { type: String },
    feedback: { type: String }, //feedback on Organizer/company
    rating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);
const Organizer = mongoose.model("Organizer", organizerSchema);

module.exports = Organizer;
