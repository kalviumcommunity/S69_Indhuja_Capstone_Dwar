import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { feedback, rating });
    setFeedback("");
    alert("Thank you for your feedback!");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <form onSubmit={handleSubmit} className="w-80 bg-white p-4 shadow-md rounded-lg">
        <label className="block mb-2">Rate:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full p-2 border rounded mb-2">
          <option value="5">Excellent</option>
          <option value="4">Good</option>
          <option value="3">Average</option>
          <option value="2">Poor</option>
          <option value="1">Bad</option>
        </select>
        <textarea placeholder="Your feedback..." className="w-full p-2 border rounded mb-2" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
