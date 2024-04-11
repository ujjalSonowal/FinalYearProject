import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/BookingPage/Booking";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import OrganizerPage from "./pages/OrganizerPage";
import EventsPage from "./pages/EventsPage";
// import { EventDetails } from "./components/EventDetails";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/booking/:id" element={<Booking />} /> */}
      <Route path="/booking" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/organizer" element={<OrganizerPage />} />
      <Route path="/events" element={<EventsPage />} />
      {/* <Route path="eventdetails" element={<EventDetails />} /> */}
    </Routes>
  );
}
