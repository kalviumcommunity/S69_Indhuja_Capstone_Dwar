import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthenticationPage from "./pages/AuthenticationPage";
import DonationForm from "./components/Donations/DonationForm";
import DonorProfile from "./components/Profiles/DonorProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/donor-profile" element={<DonorProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
