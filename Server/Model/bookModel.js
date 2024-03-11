//userid, eventid, bookingDate{type: Date, default: Date,now}, bookingDay,  TimeSlot(from-to), status, price, Organiserid
//paymentStatus
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookingModel = new Schema({
    bookingDate: { type: Date, default: Date.now },
    bookingDay: { type: String },
    totalDays: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    eventId: { type: Schema.Types.ObjectId, ref: "Event" },
    TimeSlot: {
        Start_date: { type: String },
        End_date: { type: String },
    },
    PaymentStatus: {
        type: String,
        enum: ["Unpaid", "Paid"],
        default: "Unpaid",
    },
    price: { type: Number },
    organiserId: { type: Schema.Types.ObjectId, ref: "Organisation" },
    Status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Booking", bookingModel);