import React from "react";

const DonorDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold">Donor Dashboard</h2>
      <p className="mt-4">Track your donations and upcoming charity events.</p>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Make a Donation</button>
    </div>
  );
};

export default DonorDashboard;
