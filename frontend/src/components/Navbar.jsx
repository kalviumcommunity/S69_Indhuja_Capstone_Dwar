import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({ donorData }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update isAuthenticated if donorData changes
  useEffect(() => {
    setIsAuthenticated(donorData?.email ? true : false);
  }, [donorData]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black bg-opacity-40 py-4 px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/2.png" alt="Logo" className="h-12 w-12 transition-transform hover:scale-110" />
          <span className="text-white font-bold text-xl hidden md:block">D-WAR</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white hover:text-blue-300 transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
          <a href="#services" className="text-white hover:text-blue-300 transition-colors">Services</a>
          <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
          
          {!isAuthenticated ? (
            <button
              onClick={() => navigate("/auth")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Sign Up
            </button>
          ) : (
            <div 
              className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => navigate("/donor-profile")}
            >
              <span className="text-white font-bold">
                {donorData?.name?.charAt(0) || "D"}
              </span>
            </div>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-white hover:text-blue-300 transition-colors py-2">Home</a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors py-2">About</a>
            <a href="#services" className="text-white hover:text-blue-300 transition-colors py-2">Services</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors py-2">Contact</a>
            
            {!isAuthenticated ? (
              <button
                onClick={() => navigate("/auth")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Sign Up
              </button>
            ) : (
              <button
                onClick={() => navigate("/donor-profile")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                My Profile
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
