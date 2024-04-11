import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/BookingPage/Booking";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import OrganizerPage from "./pages/OrganizerPage";
import EventsPage from "./pages/EventsPage";
// import { EventDetails } from "./components/EventDetails";
import Dashboard from "./pages/Dashboard";
import AddEvents from "./pages/AddEvents";
import AddOrganizer from "./pages/AddOraganizer";

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
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/createevent" element={<AddEvents />} /> {/*for organizer */}
      <Route path="/addorganizer" element={<AddOrganizer />} />
      {/* <Route path="eventdetails" element={<EventDetails />} /> */}
    </Routes>
  );
}
