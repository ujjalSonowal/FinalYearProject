import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Avater } from "../Avater/Avater";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [usertype, setUserType] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("profile")
  );
  useEffect(() => {
    const userType = localStorage.getItem("userType");
    setUserType(userType);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("userType");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="logo">
            <img src="" alt="logo here" />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/organizer" className="nav-link">
                Organiser
              </Link>
            </li>
            <li className="nav-item">
              {usertype === "Organiser" && (
                <Link to="" className="nav-link">
                  show only for organiser : {usertype}
                </Link>
              )}
            </li>
            <li className="nav-item">
              {usertype === "User" && (
                <Link to="" className="nav-link">
                  Home : {usertype}
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated ? (
            <>
              <div className="profile">
                {/* <Avater backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'/> */}
                <p className="profileimg">P</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <ul className="auth">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
