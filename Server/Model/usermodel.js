const mongoose = require("mongoose");
const { Schema } = mongoose;
const usermodel = new Schema({
    //image for profile
    name: { type: String, require: "Name is required" },
    email: { type: String, require: "Email is required", unique: true },
    phoneNumber: { type: Number, required: "Phone number is required" },
    password: { type: String, required: "password  is required" },
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
}, {
    timestamps: true,
});

module.exports = mongoose.model("user", usermodel);