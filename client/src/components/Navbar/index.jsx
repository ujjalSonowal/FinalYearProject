import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="Navbar sticky">
      <div className="leftSide">
        <div className="Links">
          <a href="/home">Home</a>
          <a href="/organizer"> Organizer</a>
          <a href="/events"> Events</a>
          <a href="/contact">Contact Us</a>
          <a href="/#">Sign up</a>
          <a href="/#">Login</a>
        </div>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Search..."></input>
        <button className="button">Search</button>
      </div>
    </div>
  );
}

export default Navbar;
