import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  // Check login status + extract username from email
  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    if (token && email) {
      setIsLoggedIn(true);

      // extract name before @
      const nameFromEmail = email.split("@")[0];
      setUsername(nameFromEmail);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("doctorData");

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }

    setIsLoggedIn(false);
    setUsername("");
    setClick(false);

    navigate("/");
    window.location.reload();
  };

  return (
    <nav>
      {/* Logo */}
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: "#2190FF" }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>

      {/* Mobile menu */}
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      {/* Links */}
      <ul className={click ? "nav__links active" : "nav__links"}>

        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>

        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>

        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>

        {/* Logged in state */}
        {isLoggedIn ? (
          <>
            {/* Username display */}
            <li className="link" style={{ color: "#2190FF", fontWeight: "bold" }}>
              {username}
            </li>

            {/* Logout button */}
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;