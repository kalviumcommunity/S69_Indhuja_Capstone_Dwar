// Home.jsx
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Feedback from "../components/Feedback/Feedback";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-left text-white"
      style={{ backgroundImage: "url('/pexels-ron-lach-9196490.jpg')" }}
    >
      <Navbar />
      <Header />
      <HowItWorks />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
