import React from "react";
import OrganizationCard from "./OrganizationCard"; // ✅ Now within the same folder

const organizations = [
  {
    name: "Hope Foundation",
    description: "Fighting poverty through sustainable development programs.",
    trustScore: "95%",
    category: "Poverty",
    logo: "https://via.placeholder.com/50",
  },
];

const OrganizationList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {organizations.map((org, index) => (
        <OrganizationCard key={index} org={org} />
      ))}
    </div>
  );
};

export default OrganizationList;
