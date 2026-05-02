import React, { useState } from "react";
import "./DoctorCard.css";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const DoctorCard = ({ name, experience, rating, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setIsBooked(false);
    alert("Appointment Cancelled");
  };

  return (
    <div className="doctor-card">

      <div className="doctor-card-img">
        <img src={image} alt={name} />
      </div>

      <div className="doctor-card-details-container">

        <h3>{name}</h3>
        <p>Experience: {experience} years</p>
        <p>Rating: ⭐ {rating}</p>

        {/* BOOK BUTTON */}
        {!isBooked && (
          <button
            className="book-appointment-btn"
            onClick={handleBook}
          >
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        )}

        {/* CANCEL BUTTON */}
        {isBooked && (
          <button
            className="cancel-appointment-btn"
            onClick={handleCancel}
          >
            Cancel Appointment
          </button>
        )}

      </div>

      {/* APPOINTMENT FORM */}
      {showForm && (
        <AppointmentForm
          doctorName={name}
          onClose={() => {
            setShowForm(false);
            setIsBooked(true);
          }}
        />
      )}

    </div>
  );
};

export default DoctorCard;