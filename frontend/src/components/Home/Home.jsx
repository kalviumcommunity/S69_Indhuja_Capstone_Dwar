import React from "react";
import SearchBar from "../SearchBar/SearchBar"; // ✅ Ensure correct import path
import FeaturedOrganizations from "../FeaturedOrganizations/FeaturedOrganizations"; // ✅ Ensure correct import path
import Events from "../Events/Events"; // ✅ Ensure correct import path

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <SearchBar />
      <FeaturedOrganizations />
      <Events />
    </div>
  );
};

export default Home;
