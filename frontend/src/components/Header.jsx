// components/Header.jsx
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col items-start justify-center min-h-screen px-12 bg-black bg-opacity-50">
      <h1 className="text-5xl font-bold mb-4">Empower Change Through Giving</h1>
      <p className="text-lg max-w-2xl mb-6">
        Join our global community and make an impact in the lives of those in need.
      </p>
      <div className="flex space-x-4">
        <button className="bg-green-600 px-6 py-2 rounded-md hover:bg-green-700 transition">
          Start Your Journey
        </button>
        <button
          className="bg-red-600 px-6 py-2 rounded-md hover:bg-red-700 transition"
          onClick={() => navigate("/donate")}
        >
          DONATE NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
