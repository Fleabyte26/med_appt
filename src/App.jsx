import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";

import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";

import Notification from "./Components/Notification/Notification";

// Reviews module
import Reviews from "./Components/Reviews/Reviews";
import ReviewForm from "./Components/ReviewForm/ReviewForm";

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* GLOBAL NOTIFICATION */}
        <Notification>

          {/* NAVBAR */}
          <Navbar />

          <Routes>

            {/* HOME */}
            <Route path="/" element={<Landing_Page />} />

            {/* AUTH */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign_Up />} />

            {/* CONSULTATION */}
            <Route
              path="/instant-consultation"
              element={<InstantConsultation />}
            />

            <Route
              path="/booking-consultation"
              element={<BookingConsultation />}
            />

            {/* REVIEWS */}
            <Route path="/reviews" element={<Reviews />} />

            {/* REVIEW FORM */}
            <Route path="/review-form" element={<ReviewForm />} />

          </Routes>

        </Notification>

      </BrowserRouter>

    </div>
  );
}

export default App;