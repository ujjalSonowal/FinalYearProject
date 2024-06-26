const mongoose = require("mongoose");
const { Schema } = mongoose;
const usermodel = new Schema(
  {
    name: { type: String, require: "Name is required" },
    email: { type: String, require: "Email is required", unique: true },
    phoneNumber: { type: Number },
    password: { type: String, required: "password  is required" },
    address: {
      street: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      zipCode: { type: Number, required: false },
    },
    image: { type: Buffer }, // for profile logo

    // role: {
    //   type: String,
    //   enum: ["organizer", "user"],
    // },
    usertype: { type: String }, //this will be used to check whether the user is organizer or not.
    isAdmin: { type: Boolean, default: false }, //admin can do anything user cannot.
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", usermodel);
