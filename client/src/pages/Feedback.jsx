import React, { useState } from 'react';
import '../styles/Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <p>Your feedback helps us improve! Please share your thoughts below.</p>

      {!submitted ? (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>Your Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your feedback here..."
            rows="4"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p className="success-message">Thank you for your feedback! 😊</p>
      )}
    </div>
  );
};

export default Feedback;
