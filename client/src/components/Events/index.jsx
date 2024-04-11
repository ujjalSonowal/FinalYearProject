import { React, useState } from "react";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";
import "./style.css";
import image from "../../assets/images/img1.jpg";

export function Events({ event }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="event-container">
      <div className="events-card">
        <p>Name:{event.name}</p>
        <p>Created Date: {event.CreatedDate}</p>
        <StarRating rating={event.rating} />

        {/* Popup Card */}
        <div
          className={`popup-overlay ${showPopup ? "active" : ""}`}
          onClick={togglePopup}
        ></div>
        <button className="view-details-btn" onClick={togglePopup}>
          {showPopup ? "Close Details" : "View Details"}
        </button>
      </div>

      {/* <div className={`popup-card ${showPopup ? "active" : ""}`}>
        <button className="close-btn" onClick={togglePopup}>
          Close
        </button>
        <div className="box1">
          <div className="evt-img">
            <div className="event-images">
              <img src={image} alt="Event Images" />
            </div>
          </div>

          <div className="event-info">
            <h2>{event.name}</h2>
            <p>
              <strong>Created date:</strong> {event.CreatedDate}
            </p>
            <p>
              <strong>capacity:</strong> {event.capacity}
            </p>
            <p>
              <strong>Price:</strong> {event.Price}
            </p>
            <Link to={"/booking"}>
              <button className="book-btn">Book Now</button>
            </Link>
          </div>

          <div className="comment-cotainer">
            {event.comment &&
              event.comment.map((comment, index) => (
                <div key={index}>
                  <p className="p3">
                    <strong>Comment Body: {comment.commentBody} </strong>
                  </p>
                  <p className="p3">{comment.commentDate}</p>
                </div>
              ))}
          </div>
        </div>
      </div> */}

      {/* <button className="view-details-btn" onClick={togglePopup}>
          {showPopup ? "Close Details" : "View Details"}
        </button> */}
      <div className="event-popup">
        <div
          aria-colspan={2}
          className={`popup-card ${showPopup ? "active" : ""}`}
        >
          <button className="close-btn" onClick={togglePopup}>
            Close
          </button>
          <div className="event-images box ">
            <img src={image} alt="Event Images" />
          </div>

          <div className="event-info box">
            <h2>{event.name}</h2>
            <p>
              <strong>Created date:</strong> {event.CreatedDate}
            </p>
            <p>
              <strong>capacity:</strong> {event.capacity}
            </p>
            <p>
              <strong>Price:</strong> {event.Price}
            </p>
            <Link to={"/booking"}>
              <button className="book-btn">Book Now</button>
            </Link>
          </div>

          <div className="comment-cotainer box">
            {event.comment &&
              event.comment.map((comment, index) => (
                <div key={index}>
                  <p className="p3">
                    <strong>Comment Body: {comment.commentBody} </strong>
                  </p>
                  <p className="p3">{comment.commentDate}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
