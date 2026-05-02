import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* ✅ Phone Number FIELD (THIS IS WHAT YOU ARE MISSING) */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      {/* Date */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      {/* Time */}
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
