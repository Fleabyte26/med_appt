import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";

// Notification import
import Notification from "./Components/Notification/Notification";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* GLOBAL NOTIFICATION WRAPPER */}
        <Notification>

          {/* Navbar visible on all pages */}
          <Navbar />

          <Routes>

            {/* Home */}
            <Route path="/" element={<Landing_Page />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign_Up />} />

            {/* Instant Consultation */}
            <Route
              path="/instant-consultation"
              element={<InstantConsultation />}
            />

            {/* Booking Consultation */}
            <Route
              path="/booking-consultation"
              element={<BookingConsultation />}
            />

          </Routes>

        </Notification>

      </BrowserRouter>

    </div>
  );
}

export default App;