import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DonorDashboard from "./components/Dashboard/DonorDashboard";
import OrganizationDashboard from "./components/Dashboard/OrganizationDahsboard"; // Fixed Typo
import DonationForm from "./components/Donations/DonationForm";
import Feedback from "./components/Feedback/Feedback";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const AppRouter = () => {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          <Route path="/org-dashboard" element={<OrganizationDashboard />} />  {/* Fixed Path */}
          <Route path="/donate" element={<DonationForm />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
