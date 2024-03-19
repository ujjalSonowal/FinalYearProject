import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import { Events } from "../../components/Events";
// import { Bookings } from "../../components/Bookings";
import { Organizers } from "../../components/Organizers";
import { Footer } from "../../components/Footer";

function Home() {
  const [events, setEvents] = useState(null);
  // const [bookinglist, setBooking] = useState(null);
  const [organizerlist, setOrganizer] = useState(null);

  useEffect(() => {
    async function getEventRecords() {
      const response = await fetch(`http://localhost:3002/events`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const allevents = await response.json();
      setEvents(allevents);
    }

    getEventRecords();

    // async function BookingData() {
    //   const bookings = await fetch(`http://localhost:3002/bookings`);
    //   if (!bookings.ok) {
    //     const message = `An error occurred: ${bookings.statusText}`;
    //     console.error(message);
    //     return;
    //   }
    //   const allBooking = await bookings.json();
    //   setBooking(allBooking);
    // }
    // BookingData();

    async function OrganizerData() {
      const organise = await fetch(`http://localhost:3002/organizer`);
      if (!organise.ok) {
        const message = `An error occurred: ${organise.statusText}`;
        console.error(message);
        return;
      }
      const allorganise = await organise.json();
      setOrganizer(allorganise);
    }

    OrganizerData();

    return;
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="container-items">
          <div className="evetns-items">
            <h2>Events</h2>
            <div className="events">
              {events &&
                events.map((Event) => <Events key={Event._id} event={Event} />)}
            </div>
          </div>
          {/* <div className="bookings-items">
            <h2>My Bookings</h2>
            <div className="bookings">
              {bookinglist &&
                bookinglist.map((Booking) => (
                  <Bookings key={Booking._id} booking={Booking} />
                ))}
            </div>
          </div> */}
          <div className="organizer-items">
            <h2>Organizers</h2>
            <div className="events">
              {organizerlist &&
                organizerlist.map((Organizer) => (
                  <Organizers key={Organizer._id} organizer={Organizer} />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
