import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import DonorSignup from "./components/Authentication/DonorSignup";
import OrgSignup from "./components/Authentication/OrgSignup";
import DonationForm from "./components/Donations/DonationForm";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donor-signup" element={<DonorSignup />} />
        <Route path="/org-signup" element={<OrgSignup />} />
        <Route path="/donate" element={<DonationForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
