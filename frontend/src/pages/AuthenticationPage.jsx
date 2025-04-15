import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/Authentication/LoginModal";
import DonorSignup from "../components/Authentication/DonorSignup";
import OrgSignup from "../components/Authentication/OrgSignup";
import Navbar from "../components/Navbar";

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDonorSignupOpen, setIsDonorSignupOpen] = useState(false);
  const [isOrgSignupOpen, setIsOrgSignupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left side - Content */}
        <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our <span className="text-blue-400">Community</span> of Givers
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Whether you're looking to make a difference as an individual donor or represent an organization, 
            your journey towards creating positive change starts here.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full border-2 border-white text-white font-medium 
                hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12">
            <div className="flex items-center space-x-2 mb-3">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-300">100% secure authentication</p>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-300">Your data is never shared with third parties</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-300">Join 2,500+ members making a difference</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Auth cards */}
        <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Path</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Login Card */}
              <div 
                onClick={() => setIsLoginOpen(true)}
                className="bg-gradient-to-br from-blue-900/40 to-blue-700/40 p-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-blue-700/30"
              >
                <div className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Login</h3>
                <p className="text-gray-300 text-center text-sm">Already have an account? Sign in to continue your journey.</p>
              </div>
              
              {/* Donor Signup Card */}
              <div 
                onClick={() => setIsDonorSignupOpen(true)}
                className="bg-gradient-to-br from-green-900/40 to-green-700/40 p-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-green-700/30"
              >
                <div className="bg-green-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Donor Signup</h3>
                <p className="text-gray-300 text-center text-sm">Register as an individual to start making donations.</p>
              </div>
            </div>
            
            {/* Organization Signup Card - Full width */}
            <div 
              onClick={() => setIsOrgSignupOpen(true)}
              className="bg-gradient-to-br from-purple-900/40 to-purple-700/40 p-6 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-purple-700/30"
            >
              <div className="bg-purple-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Organization Signup</h3>
              <p className="text-gray-300 text-center text-sm">Register your organization to receive donations and manage campaigns.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse animation-delay-2000"></div>

      {/* Modals */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      {isDonorSignupOpen && <DonorSignup onClose={() => setIsDonorSignupOpen(false)} />}
      {isOrgSignupOpen && <OrgSignup onClose={() => setIsOrgSignupOpen(false)} />}
    </div>
  );
};

export default AuthenticationPage;
