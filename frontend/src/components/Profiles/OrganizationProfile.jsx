import React from "react";

const OrganizationProfile = ({ orgData }) => {
  return (
    <div className="profile-container">
      <h2>Organization Profile</h2>
      <p><strong>Organization Name:</strong> {orgData.orgName}</p>
      <p><strong>Email:</strong> {orgData.email}</p>
      <p><strong>Causes Listed:</strong> {orgData.causesListed}</p>
      <p><strong>Funds Raised:</strong> {orgData.fundsRaised}</p>
    </div>
  );
};

export default OrganizationProfile;
