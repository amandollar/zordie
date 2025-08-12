import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#e0f2fe] to-[#f3e8ff] pt-12 pb-24 px-6 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Row: stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-10 sm:gap-8 mb-10">

          {/* Left 70% desktop, full width & centered on mobile */}
          <div className="flex flex-col justify-start items-center sm:items-start sm:basis-[70%] w-full">
            <div className="animated-border-btn cursor-pointer inline-flex items-center gap-2 rounded-full overflow-hidden mb-5 px-5 py-2 text-sm sm:text-base select-none">
              <Star className="w-4 h-4" />
              Advance AI Hiring
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center sm:text-left text-gray-900 leading-tight"
            >
              First Full-Stack Agentic AI Copilot for Hiring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-base sm:text-lg text-center sm:text-left text-gray-600 max-w-md sm:max-w-2xl"
            >
              Automate tasks, boost accuracy, and make faster decisions with intelligent tools built for modern recruiters.
            </motion.p>
          </div>

          {/* Right 30% desktop, full width and centered on mobile */}
          <div className="flex flex-col justify-start items-center sm:items-end sm:basis-[30%] w-full">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-base sm:text-sm text-gray-700 whitespace-nowrap font-medium ml-2">
                Trusted already by 10k+
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Image Full Width Below */}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ perspective: 800 }}
          className="relative"
        >
          <img
            src="./Dashboard.png"
            alt="Dashboard"
            className="rounded-3xl shadow-xl border border-gray-200 w-full max-w-md sm:max-w-4xl mx-auto"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          />
        </motion.div>
      </div>

      {/* Gradient Circles */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-200 to-transparent rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200 to-transparent rounded-full opacity-40 blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
