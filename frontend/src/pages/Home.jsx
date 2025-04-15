// Home.jsx
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Feedback from "../components/Feedback/Feedback";
import { useEffect } from "react";

const Home = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          // Cleanup
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-left text-white overflow-x-hidden">
      {/* Hero section with background image */}
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/pexels-ron-lach-9196490.jpg')"
        }}
      >
        <Navbar />
        <Header />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Main content sections */}
      <main>
        <HowItWorks />
        <Feedback />
        
        {/* Impact Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="text-blue-300">Impact</span>
              </h2>
              <div className="w-24 h-1 bg-blue-300 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Together, we're making a difference in communities around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-white mb-2">$2.5M+</div>
                <p className="text-blue-200">Donations Raised</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-white mb-2">120+</div>
                <p className="text-blue-200">Projects Funded</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-white mb-2">50K+</div>
                <p className="text-blue-200">Lives Impacted</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center">
                <div className="text-5xl font-bold text-white mb-2">35+</div>
                <p className="text-blue-200">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of donors who are changing lives through their generosity.
              Every contribution, no matter how small, creates ripples of positive change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium 
                hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                Start Donating
              </button>
              <button className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-medium 
                hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Home;
