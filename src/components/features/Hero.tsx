import { motion } from "framer-motion";
import { Star } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#e0f2fe] to-[#f3e8ff] pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="relative inline-block">
        <div className="animated-border-btn cursor-pointer mb-6 inline-flex items-center gap-2 rounded-full overflow-hidden">
          <Star className="w-4 h-4" />
          Advance AI Hiring
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>

        {/* Headline & Subtext */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
            >
              First Full-Stack Agentic AI Copilot for Hiring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-lg text-gray-600"
            >
              Automate tasks, boost accuracy, and make faster decisions with
              intelligent tools built for modern recruiters.
            </motion.p>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-gray-600">Trusted already by 10k+</p>
            </div>
          </div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://visual.is/assets/overview/Filters_Dynamic_Dashboard-9cdef2929a645336daa0f7522d9c4781ebfe821b55bb6dc0703458d8003390d9.png"
              alt="Dashboard"
              className="rounded-2xl shadow-xl border border-gray-200"
            />
          </motion.div>
        </div>
      </div>

      {/* Gradient Circles for decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200 to-transparent rounded-full opacity-50 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200 to-transparent rounded-full opacity-50 blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
