import React from "react";
import OrganizationList from "./OrganizationList"; // ✅ Now within the same folder

const FeaturedOrganizations = () => {
  return (
    <div className="py-10">
      <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">
        Featured Organizations
      </h2>
      <OrganizationList />
    </div>
  );
};

export default FeaturedOrganizations;
