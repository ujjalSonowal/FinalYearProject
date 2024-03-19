import React from "react";
import "./style.css";

export function Organizers({ organizer }) {
  return (
    <div className="organizers">
      <p>company Name:{organizer.companyName}</p>
      <p>Description: {organizer.description}</p>
      <p>Owner Name: {organizer.ownerName}</p>
      <p>Contact Email: {organizer.contactEmail}</p>
      <p>Contact Phone: {organizer.contactPhone}</p>
      <p>Address: {organizer.address}</p>
      <p>Rating: {organizer.rating}</p>
      <p className="p2">Services:</p>
      <div>
        {organizer.services &&
          organizer.services.map((service, index) => (
            <div key={index}>
              <p className="p3">Service Name: {service.serviceName} </p>
              <p className="p3">Service Description: {service.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
