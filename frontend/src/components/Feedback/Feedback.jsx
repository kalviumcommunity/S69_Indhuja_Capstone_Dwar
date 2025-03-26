// src/components/Feedback.jsx
import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "John Doe",
      comment: "Great service! Highly recommended.",
    },
    {
      id: 2,
      name: "Sarah Lee",
      comment: "Very professional and on time. Loved the experience!",
    },
    {
      id: 3,
      name: "Michael Smith",
      comment: "Excellent support and customer service.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        User Feedback
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {feedbacks.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h4>
            <p className="text-sm text-gray-700">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
