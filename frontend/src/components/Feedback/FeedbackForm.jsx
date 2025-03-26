import React, { useState } from "react";

const FeedbackForm = ({ onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <h2>Give Feedback</h2>
      <textarea placeholder="Your Feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
      <button onClick={() => onSubmitFeedback(feedback)}>Submit</button>
    </div>
  );
};

export default FeedbackForm;
