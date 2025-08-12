import { ArrowRight, Play, Zap } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero-1"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Next-Gen Hiring
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The First Autonomous{" "}
            <span className="text-blue-600">Hiring Platform</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your entire recruitment workflow—from job posting to
            final hire—with advanced AI-driven precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center transition-colors">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-colors">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            Trusted already by <span className="font-semibold">10k+</span>{" "}
            companies
          </p>
        </div>

        {/* Hero Image/Video Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8" />
                </div>
                <p className="text-gray-300">Demo Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
