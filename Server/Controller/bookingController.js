const mongoose = require("mongoose");
const Booking = require("../Model/bookModel.js");

//Add new bookings
const addBookings = async (req, res) => {
  const { bookingDate, bookingDay, TimeSlot, price } = req.body;
  try {
    const newBooking = await Booking.create({
      bookingDate,
      bookingDay,
      TimeSlot,
      price,
    });
    if (!newBooking)
      return res.status(400).json({ msg: "Failed to add booking" });
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ mgs: "Error" });
  }
};

//get all bookings details
const allBookings = async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 });
  res.status(200).json(bookings);
};

// get single booking by id
const singleBookings = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const allbooking = await Booking.findById(id);

  if (!allbooking) {
    return res.status(404).json({ msg: "no user found" });
  }
  res.status(200).json(allbooking);
};

//delete bookings
const deleteBookings = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "No User Found with this ID!" });
  }
  const deleteBooking = await Booking.findOneAndDelete({ _id: id });
  if (!deleteBooking) {
    return res.status(404).json({ msg: "No User Found with this ID" });
  }
  res.status(201).json(deleteBooking);
};

//update booking
const updateBookings = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ mgs: "not valid id" });
  }

  const bookingUpdate = await Booking.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!bookingUpdate) {
    res.status(404).json({ mgs: "user updated" });
  }

  res.status(200).json(bookingUpdate);
};

module.exports = {
  addBookings,
  allBookings,
  singleBookings,
  deleteBookings,
  updateBookings,
};
