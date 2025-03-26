import React from "react";
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-900 bg-opacity-90 overflow-y-auto">
      <div className="bg-white p-8 rounded-lg w-full h-full max-w-3xl overflow-y-auto">
        {/* Back Button Navigates to Home */}
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 text-lg font-bold mb-4"
        >
          &larr; Back
        </button>
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Make a Donation
        </h2>
        <p className="text-sm text-blue-500 text-center mb-6">
          Your contribution helps create positive change in the world.
        </p>

        {/* Choose Amount */}
        <div className="mb-6">
          <label className="block font-semibold text-blue-700">
            Choose Amount
          </label>
          <div className="flex space-x-3 mt-2">
            {[10, 25, 50, 100].map((amount) => (
              <button
                key={amount}
                className="px-5 py-2 border border-blue-300 rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
              >
                ${amount}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Enter custom amount"
            className="w-full mt-3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Donation Frequency */}
        <div className="mb-6">
          <label className="block font-semibold text-blue-700">
            Donation Frequency
          </label>
          <div className="flex space-x-3 mt-2">
            <button className="px-5 py-2 border border-blue-300 rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
              One-time
            </button>
            <button className="px-5 py-2 border border-blue-300 rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
              Monthly
            </button>
          </div>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <label className="block font-semibold text-blue-700">
            Select Category
          </label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {["Education", "Environment", "Pet Care", "Others"].map(
              (category) => (
                <button
                  key={category}
                  className="px-5 py-2 border border-blue-300 rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  {category}
                </button>
              )
            )}
          </div>
          <input
            type="text"
            placeholder="Enter custom category"
            className="w-full mt-3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* User Information */}
        <div className="mb-6">
          <label className="block font-semibold text-blue-700">
            Your Information
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mt-2 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mt-3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="w-full mt-3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message (Optional)"
            className="w-full mt-3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center text-sm mb-6 text-blue-600">
          <input type="checkbox" className="mr-2" />
          <span>
            I agree to the{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </span>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Complete Donation
        </button>
      </div>
    </div>
  );
};

export default DonationForm;
