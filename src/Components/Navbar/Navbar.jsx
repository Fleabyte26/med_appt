import React from "react";
import "./Navbar.css";

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
        <a href="/Landing_Page/LandingPage.html">
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
        </a>
        <span>.</span>
      </div>

      {/* Hamburger Icon */}
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Navigation Links */}
      <ul className="nav__links">
        <li className="link">
          <a href="/Landing_Page/LandingPage.html">Home</a>
        </li>

        <li className="link">
          <a href="#">Appointments</a>
        </li>

        <li className="link">
          <a href="/Sign_Up/Sign_Up.html">
            <button className="btn1">Sign Up</button>
          </a>
        </li>

        <li className="link">
          <a href="/Login/Login.html">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;