import { React, useState } from "react";
import StarRating from "../StarRating";
import "./style.css";

export function Organizers({ organizer }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="organizer-card">
      <p>company Name:{organizer.companyName}</p>
      <p>Description: {organizer.description}</p>
      <p>
        <strong> {organizer.ownerName}</strong>
      </p>
      {/* <p>{organizer.rating}</p> */}
      <StarRating rating={organizer.rating} />
      {/* {showDetails && (
        <div>
          <p>Contact Email: {organizer.contactEmail}</p>
          <p>Contact Phone: {organizer.contactPhone}</p>
          <p>Address: {organizer.address}</p>
        </div>
      )} */}

      {/* Popup Card */}
      <div
        className={`popup-overlay ${showPopup ? "active" : ""}`}
        onClick={togglePopup}
      ></div>
      <div className={`popup-card ${showPopup ? "active" : ""}`}>
        <button className="close-btn" onClick={togglePopup}>
          Close
        </button>
        <h2>{organizer.companyName}</h2>
        <p>
          <strong>Owner:</strong> {organizer.ownerName}
        </p>
        <p>
          <strong>Description:</strong> {organizer.description}
        </p>
        <p>
          <strong>Email:</strong> {organizer.contactEmail}
        </p>
        <p>
          <strong>Phone:</strong> {organizer.contactPhone}
        </p>
        <div className="service-cotainer">
          {organizer.services &&
            organizer.services.map((service, index) => (
              <div key={index}>
                <p className="p3">
                  <strong>Service Name: {service.serviceName} </strong>
                </p>
                <p className="p3">Service Description: {service.description}</p>
              </div>
            ))}
        </div>
      </div>

      <button className="view-details-btn" onClick={togglePopup}>
        {showPopup ? "Close Details" : "View Details"}
      </button>
    </div>
  );
}
