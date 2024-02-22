const mongoose = require("mongoose");
const { Schema } = mongoose;
const usermodel = new Schema(
  {
    //image for profile
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phoneNumber: { type: Number, required: false },
    password: { type: String },
    address: {
      street: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      zipCode: { type: Number, required: false },
    },

    role: {
      type: String,
      enum: ["organizer", "customer"],
      default: "customer",
    },
    isAdmin: { type: Boolean, default: false }, //admin can do anything user cannot.
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", usermodel);
