import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Dashboard() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="side-links">
          <li className="side-item">
            <Link to={"/"}>Profile</Link>
          </li>
          <li className="side-item">
            <Link to={"/"}>Events</Link>
          </li>
          <li className="side-item">
            <Link to={"/"}>Organization</Link>
          </li>
          <li className="side-item">
            <Link to={"/"}>Booking Request</Link>
          </li>
          <li className="side-item">
            <Link to={"/"}>Logout</Link>
          </li>
          <li className="side-item">
            <Link to={"/"}>Setting</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
