import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";

// Instant Consultation Booking component
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* Navbar visible on all pages */}
        <Navbar />

        <Routes>

          {/* Home page */}
          <Route path="/" element={<Landing_Page />} />

          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Sign Up page */}
          <Route path="/signup" element={<Sign_Up />} />

          {/* Instant Consultation Booking page */}
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;