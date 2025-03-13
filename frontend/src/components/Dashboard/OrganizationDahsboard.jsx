import React from "react";

const OrganizationDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold">Organization Dashboard</h2>
      <p className="mt-4">Manage donation requests and volunteer events.</p>
      <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded">Create New Event</button>
    </div>
  );
};

export default OrganizationDashboard;
