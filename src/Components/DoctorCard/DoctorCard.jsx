import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, experience, rating, image }) => {
  return (
    <div className="doctor-card">

      <div className="doctor-card-img">
        <img src={image} alt={name} />
      </div>

      <div className="doctor-card-details-container">

        <h3>{name}</h3>

        <p>Experience: {experience} years</p>

        <p>Rating: ⭐ {rating}</p>

        {/* Book button (REQUIRED BY LAB) */}
        <div>
          <button className="book-appointment-btn">
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
          </button>
        </div>

      </div>

    </div>
  );
};

export default DoctorCard;