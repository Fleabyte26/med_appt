import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: ""
  });

  // Open form (only if not submitted yet)
  const handleButtonClick = () => {
    if (!submittedData) {
      setShowForm(true);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.review && formData.rating) {
      setSubmittedData(formData);
      setShowForm(false);
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="review-container">

      <h2>Patient Feedback</h2>

      {/* BUTTON (disabled after submission) */}
      {!showForm && (
        <button
          className="open-review-btn"
          onClick={handleButtonClick}
          disabled={submittedData !== null}
        >
          Give Feedback
        </button>
      )}

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="review-form">

          <h3>Write Your Review</h3>

          {showWarning && (
            <p className="warning">Please fill all fields.</p>
          )}

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* REVIEW */}
          <textarea
            name="review"
            placeholder="Write your review..."
            value={formData.review}
            onChange={handleChange}
          />

          {/* RATING SELECTOR (REQUIRED) */}
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Select Rating</option>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐⭐</option>
            <option value="3">3 ⭐⭐⭐</option>
            <option value="4">4 ⭐⭐⭐⭐</option>
            <option value="5">5 ⭐⭐⭐⭐⭐</option>
          </select>

          <button type="submit">Submit</button>

        </form>
      )}

      {/* DISPLAY SUBMITTED MESSAGE (RED BOX AREA IN LAB) */}
      {submittedData && (
        <div className="submitted-box">

          <h3>Submitted Review</h3>

          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Review:</strong> {submittedData.review}</p>
          <p><strong>Rating:</strong> {submittedData.rating} ⭐</p>

        </div>
      )}

    </div>
  );
};

export default ReviewForm;