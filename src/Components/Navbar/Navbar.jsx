import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleClick = () => {
    const navLinks = document.querySelector(".nav__links");
    const navIcon = document.querySelector(".nav__icon i");

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-times");
    } else {
      navIcon.classList.remove("fa-times");
      navIcon.classList.add("fa-bars");
    }
  };

  return (
    <nav>
      {/* Logo */}
      <div className="nav__logo">
        <Link to="/">
          StayHealthy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            width="26"
            viewBox="0 0 1000 1000"
            style={{ fill: "#3685fb" }}
          >
            <title>Doctor Icon</title>
            <circle cx="500" cy="200" r="150" />
          </svg>
        </Link>
        <span>.</span>
      </div>

      {/* Hamburger Icon */}
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Navigation Links */}
      <ul className="nav__links">

        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link to="#">Appointments</Link>
        </li>

        <li className="link">
          <Link to="/signup">
            <button className="btn1">Sign Up</button>
          </Link>
        </li>

        <li className="link">
          <Link to="/login">
            <button className="btn1">Login</button>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;