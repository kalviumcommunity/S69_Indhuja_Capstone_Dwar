// src/components/HowItWorks.jsx
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "Choose a service that fits your needs.",
    },
    {
      id: 2,
      title: "Step 2",
      description: "Provide the required information and confirm.",
    },
    {
      id: 3,
      title: "Step 3",
      description: "Our team will get in touch and process your request.",
    },
    {
      id: 4,
      title: "Step 4",
      description: "Sit back and relax while we do the rest.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full mb-4 mx-auto">
              {step.id}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
