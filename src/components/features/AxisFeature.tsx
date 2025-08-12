import { Star, ArrowRight } from "lucide-react";

export default function AxisFeatureSection() {
  const features = [
    {
      title: "Intelligent Coordination",
      description:
        "Coordinates all agent activities with intelligent task distribution and priority management.",
    },
    {
      title: "Enterprise Security",
      description:
        "Maintains enterprise-grade security protocols and access controls across all HR systems.",
    },
    {
      title: "Dynamic Resource Allocation",
      description:
        "Dynamically allocates system resources and manages auto-scaling based on demand.",
    },
    {
      title: "Advanced Decision Making",
      description:
        "Algorithms that learn from organizational patterns to optimize processes.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#e0f2fe] to-[#f3e8ff] py-20 px-6 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Features label */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium mb-6 mx-auto">
          <Star className="w-4 h-4 mr-2 text-gray-800" />
          Features
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-900">
          What is Prime?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto text-base sm:text-lg">
          Discover how Prime HR optimizes workforce management and boosts
          operational efficiency.
        </p>

        {/* Grid layout */}
        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 sm:grid-rows-2 sm:gap-20 place-items-center min-h-[600px] mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 max-w-xs sm:max-w-sm w-full"
            >
              <div className="flex items-center mb-3">
                <ArrowRight className="w-5 h-5 text-gray-800" />
                <h3 className="text-base sm:text-lg font-semibold ml-2 text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Center axis + logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none sm:flex hidden">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300" />
            <img
              src="./Logo.png"
              alt="Prime Logo"
              className="w-28 h-28 bg-transparent z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
