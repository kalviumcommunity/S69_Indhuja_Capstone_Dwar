// components/DonorProfile.jsx
import { useLocation } from "react-router-dom";

const DonorProfile = () => {
  const { state } = useLocation();
  const donorData = state?.donorData || {};

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            value={donorData.name || ""}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={donorData.email || ""}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            value={donorData.phone || ""}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={donorData.location || ""}
            className="w-full border rounded px-3 py-2"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;
