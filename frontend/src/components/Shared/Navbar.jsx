import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-600">CharityConnect</h1>

      {/* User Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg"
        >
          <FaUserCircle className="text-lg" />
          <span>John Smith</span>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
