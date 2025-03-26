import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({ donorData }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Update isAuthenticated if donorData changes
  useEffect(() => {
    setIsAuthenticated(donorData?.email ? true : false);
  }, [donorData]);

  return (
    <nav className="flex justify-between items-center bg-black bg-opacity-50 py-4 px-8">
      <img src="/2.png" alt="Logo" className="h-12 w-12" />
      <div className="flex items-center space-x-4">
        {!isAuthenticated && (
          <button
            onClick={() => navigate("/auth")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        )}
        {isAuthenticated && (
          <span
            role="img"
            aria-label="profile"
            className="text-3xl cursor-pointer"
            onClick={() => navigate("/donor-profile")}
          >
            😎
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
