import { useState } from "react";
import SignupModal from "../components/Authentication/SignupModal";
import LoginModal from "../components/Authentication/LoginModal";

const MainPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Our Donation Platform</h1>
      
      <div className="mt-6">
        <button onClick={() => setShowSignup(true)} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
          Sign Up
        </button>
        <button onClick={() => setShowLogin(true)} className="px-4 py-2 bg-green-500 text-white rounded">
          Login
        </button>
      </div>

      {showSignup && <SignupModal closeModal={() => setShowSignup(false)} />}
      {showLogin && <LoginModal closeModal={() => setShowLogin(false)} />}
    </div>
  );
};

export default MainPage;
