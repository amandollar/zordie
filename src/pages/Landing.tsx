import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/LandingPage/Hero";
import ZordieSection from "../components/LandingPage/ZordieSection";
import IntegerationSection from "../components/LandingPage/IntegerationSection";
import UsersLoveSection from "../components/LandingPage/UsersLoveSection";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQSection from "../components/LandingPage/FAQSection";
import FinalCTA from "../components/LandingPage/FinalCTA";

const ZordieLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ZordieSection />
      <IntegerationSection />
      <UsersLoveSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default ZordieLandingPage;
