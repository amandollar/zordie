//Features
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Features/Hero";
import AxisFeatureSection from "../components/Features/AxisFeature";

const Feature = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section with equal horizontal spacing */}
      <section className="px-8 sm:px-12 lg:px-24 mt-5">
        <HeroSection />
      </section>

      {/* Axis Feature Section with same spacing */}
      <section className="px-8 sm:px-12 lg:px-24">
        <AxisFeatureSection />
      </section>

      <Footer />
    </div>
  );
};

export default Feature;
