import { useState } from "react";
import LoginModal from "../components/Authentication/LoginModal";
import DonorSignup from "../components/Authentication/DonorSignup";
import OrgSignup from "../components/Authentication/OrgSignup";

const AuthenticationPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDonorSignupOpen, setIsDonorSignupOpen] = useState(false);
  const [isOrgSignupOpen, setIsOrgSignupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Platform</h1>
      <p className="text-gray-600 mb-6">Join us as a donor or an organization</p>

      <div className="flex space-x-4">
        {/* Login Button */}
        <button
          onClick={() => setIsLoginOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        {/* Sign Up as Donor Button */}
        <button
          onClick={() => setIsDonorSignupOpen(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Sign Up as Donor
        </button>

        {/* Sign Up as Organization Button */}
        <button
          onClick={() => setIsOrgSignupOpen(true)}
          className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700"
        >
          Sign Up as Organization
        </button>
      </div>

      {/* Modals */}
      {isLoginOpen && <LoginModal close={() => setIsLoginOpen(false)} />}
      {isDonorSignupOpen && <DonorSignup onClose={() => setIsDonorSignupOpen(false)} />}
      {isOrgSignupOpen && <OrgSignup onClose={() => setIsOrgSignupOpen(false)} />}
    </div>
  );
};

export default AuthenticationPage;
