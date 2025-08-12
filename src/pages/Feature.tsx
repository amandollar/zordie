import Navbar from "../components/Navbar";
import HeroSection from "../components/features/Hero";
import Footer from "../components/Footer";

const Feature = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;