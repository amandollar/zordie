import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero-1"
      className="min-h-[calc(100vh-70px)] relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Grain background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/landingPage/grain.avif')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.2,
          filter: "invert(1)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      {/* Left Top Blob (Orange) */}
      <motion.div
        className="absolute -left-64 top-0 w-[60vh] h-[60vh] max-w-[600px] max-h-[600px] min-w-[400px] min-h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 182, 193, 0.8) 0%, rgba(255, 160, 180, 0.6) 30%, rgba(255, 140, 160, 0.4) 60%, rgba(255, 120, 140, 0.2) 100%)",
          filter: "blur(80px)",
        }}
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      />

      {/* Left Bottom Blob (Purple) */}
      <motion.div
        className="absolute -left-64 top-[40%] w-[65vh] h-[65vh] max-w-[650px] max-h-[650px] min-w-[450px] min-h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 85, 211, 0.7) 0%, rgba(147, 51, 234, 0.6) 30%, rgba(124, 58, 237, 0.4) 60%, rgba(99, 102, 241, 0.2) 100%)",
          filter: "blur(90px)",
        }}
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
      />

      {/* Right Top Blob (Purple) */}
      <motion.div
        className="absolute -right-64 top-4 w-[65vh] h-[65vh] max-w-[650px] max-h-[650px] min-w-[450px] min-h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186, 85, 211, 0.7) 0%, rgba(147, 51, 234, 0.6) 30%, rgba(124, 58, 237, 0.4) 60%, rgba(99, 102, 241, 0.2) 100%)",
          filter: "blur(90px)",
        }}
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
      />

      {/* Right Bottom Blob (Orange) */}
      <motion.div
        className="absolute -right-64 top-[45%] w-[60vh] h-[60vh] max-w-[600px] max-h-[600px] min-w-[400px] min-h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 182, 193, 0.8) 0%, rgba(255, 160, 180, 0.6) 30%, rgba(255, 140, 160, 0.4) 60%, rgba(255, 120, 140, 0.2) 100%)",
          filter: "blur(80px)",
        }}
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ scale: 0.7, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-8"
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            Next-Gen Hiring
          </motion.div>

          <motion.h1
            className="text-6xl md:text-6xl font-bold text-black mb-6 leading-tight tracking-tight text-nowrap"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          >
            The First Autonomous
            <br />
            Hiring Platform
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          >
            Streamline your entire recruitment workflow—from job posting to
            final hire—with advanced AI-driven precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center transition-colors">
              <div className="bg-white rounded-full p-1 mr-3">
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
              Start Free Trial
            </button>
            <button className="text-black hover:text-gray-700 px-8 py-4 text-lg font-medium transition-colors bg-gray-100 hover:bg-gray-200 rounded-full">
              Get Early Access
            </button>
          </motion.div>

          {/* Avatars */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 1 },
              },
            }}
          >
            {["A", "B", "C", "D", "E"].map((letter, idx) => (
              <motion.div
                key={idx}
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-medium text-sm"
                style={{
                  background: [
                    "linear-gradient(to bottom right, #60a5fa, #2563eb)",
                    "linear-gradient(to bottom right, #34d399, #059669)",
                    "linear-gradient(to bottom right, #a78bfa, #7c3aed)",
                    "linear-gradient(to bottom right, #f87171, #dc2626)",
                    "linear-gradient(to bottom right, #facc15, #ca8a04)",
                  ][idx],
                }}
                variants={{
                  hidden: { scale: 0, opacity: 0, y: 20 },
                  show: { scale: 1, opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {letter}
              </motion.div>
            ))}
            <motion.p
              className="text-gray-500 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            >
              Trusted already by 10k+
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
