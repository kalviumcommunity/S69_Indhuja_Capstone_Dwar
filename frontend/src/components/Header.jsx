// components/Header.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <header className="flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-20 pt-20 bg-gradient-to-b from-black/70 to-black/40">
      <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
          Empower Change <br className="hidden md:block" />
          <span className="text-blue-400">Through Giving</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200 leading-relaxed">
          Join our global community and make a meaningful impact in the lives of those in need. 
          Every contribution matters.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium 
            hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Start Your Journey
          </button>
          
          <button
            onClick={() => navigate("/donate")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium 
            hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 
            animate-pulse animation-delay-2000"
          >
            DONATE NOW
          </button>
        </div>
        
        <div className="mt-12 flex items-center space-x-4">
          <div className="flex -space-x-2">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <p className="text-sm text-gray-300">
            <span className="font-bold">2,500+</span> people joined our mission
          </p>
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
