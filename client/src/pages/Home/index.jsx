import React, { useState, useEffect } from "react";
import "./style.css";
import { Events } from "../../components/Events";
import { Footer } from "../../components/Footer";
import { Organizers } from "../../components/Organizers";
import EventSlider from "../../components/EventSlider";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpeg";

function Home() {
  const slides = [
    {
      image: img1,
    },
    {
      image: img2,
    },
  ];
  const [events, setEvents] = useState(null);
  // const [bookinglist, setBooking] = useState(null);
  const [organizerlist, setOrganizer] = useState(null);
  // const [currentSlide, setCurrentSlide] = useState(0);

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
    //for slider
    // async function getTopRating() {
    //   const response = await fetch(`http://localhost:3002/events/topratings`);
    //   if (!response.ok) {
    //     const message = `An error occurred: ${response.statusText}`;
    //     console.error(message);
    //     return;
    //   }
    //   const topevents = await response.json();
    //   setCurrentSlide(topevents);
    // }

    // getTopRating();

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
        <div className="container-items">
          <div className="slider">
            {/* {currentSlide &&
              currentSlide.map((Event) => (
                <EventSlider key={Event._id} event={Event} />
              ))} */}
            <EventSlider slides={slides} />
          </div>
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
