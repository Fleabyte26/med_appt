import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName, onClose }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked with ${doctorName}\nName: ${name}\nDate: ${date}\nTime: ${time}`
    );
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">

        <h2>Book Appointment</h2>
        <p>Doctor: {doctorName}</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">Confirm Booking</button>

        </form>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default AppointmentForm;