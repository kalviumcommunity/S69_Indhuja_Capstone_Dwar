import React from "react";
import DonorProfile from "./DonorProfile";
import OrganizationProfile from "./OrganizationProfile";

const Profile = ({ userType, userData }) => {
  return (
    <div>
      {userType === "donor" ? <DonorProfile donorData={userData} /> : <OrganizationProfile orgData={userData} />}
    </div>
  );
};

export default Profile;
