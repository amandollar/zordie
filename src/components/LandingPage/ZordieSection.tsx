import {
  Box,
  CalendarCheck,
  Play,
  Settings2,
  SlidersHorizontal,
} from "lucide-react";

function ZordieSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          {/* Key Capabilities Tag */}
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            Key Capabilities
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Zordie ?
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg text-gray-600 mb-8">
            Zordie is your{" "}
            <em>all-in-one autonomous recruitment and onboarding platform</em>,
            built for speed, precision, and scale.
          </p>

          {/* Bullet Pills */}
          <div className="flex flex-col space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full text-gray-700">
              <Box size={18} /> <span>No more manual screening</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full text-gray-700">
              <CalendarCheck size={18} /> <span>Zero scheduling conflicts</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full text-gray-700">
              <Play size={18} />{" "}
              <span>Fully integrated from job posting to onboarding</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full text-gray-700">
              <Settings2 size={18} /> <span>Higher candidate quality</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full text-gray-700">
              <SlidersHorizontal size={18} /> <span>Lower cost per hire</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <video
            src="/landingPage/blobVideo.webp"
            className="w-80 h-80 rounded-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
}

export default ZordieSection;
