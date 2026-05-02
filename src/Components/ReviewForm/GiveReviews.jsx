// src/Components/ReviewForm/ReviewForm.jsx

import React, { useState } from "react";

/**
 * ReviewForm Component
 * 
 * This component allows users to submit a review with their Name, Review text,
 * and a rating (1-5). Once submitted, the form disables the Submit button to 
 * prevent duplicate submissions.
 */
function ReviewForm() {
  // State to store form inputs
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  // State to track if form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handles the form submission
   * Prevents default form action, logs the data (or send to API),
   * and disables the Submit button after successful submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: send data to server
    const reviewData = { name, review, rating };
    console.log("Review submitted:", reviewData);

    // Set submission state to disable the button
    setIsSubmitted(true);

    // Optional: reset form fields after submission
    // setName("");
    // setReview("");
    // setRating(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Give a Review</h2>

      {/* Name input */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Review text area */}
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>

      {/* Rating selector */}
      <div>
        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Submit button is disabled after submission */}
      <button type="submit" disabled={isSubmitted}>
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
    </form>
  );
}

export default ReviewForm;
