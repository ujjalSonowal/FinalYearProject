import React from "react";
import "./style.css";
export const Events = ({ event }) => {
  return (
    <div className="events">
      <p>event name:{event.name}</p>
      <p>event Created date: {event.CreatedDate}</p>
      <p>Status of Event: {event.status}</p>
      <p>event capacity: {event.capacity}</p>
      <p>Total Booking: {event.TotalBooking}</p>
      <p>Rating: {event.rating}</p>
      {/* <p>event Price :{event.Price}</p> */}

      {/* why we are  using map here? because price is an array and 
      we want to display all the prices in different paragraph */}
      <div>
        {event.Price &&
          event.Price.map((price, index) => (
            <div key={index}>
              <p>Event Price: {price} </p>
            </div>
          ))}
      </div>

      <div>
        {event.comment &&
          event.comment.map((comment, index) => (
            <div key={index}>
              <p>Comment: {comment.commentBody}</p>
              <p className="p1">Comment Date: {comment.commentDate}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
