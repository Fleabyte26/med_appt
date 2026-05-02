import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your feedback!");

    setName("");
    setFeedback("");
    setRating("");
    setShowForm(false);
  };

  return (
    <div className="review-container">

      {/* CONSULTATION INFO */}
      <div className="review-info">
        <h2>Consultation Completed</h2>
        <p>Please share your feedback about your experience.</p>

        <button
          className="open-review-btn"
          onClick={() => setShowForm(true)}
        >
          Give Feedback
        </button>
      </div>

      {/* REVIEW FORM */}
      {showForm && (
        <div className="review-form">

          <h3>Write Your Review</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="">Rating</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐⭐</option>
              <option value="3">3 ⭐⭐⭐</option>
              <option value="4">4 ⭐⭐⭐⭐</option>
              <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>

            <button type="submit">Submit Review</button>

          </form>

        </div>
      )}

    </div>
  );
};

export default ReviewForm;