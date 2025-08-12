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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#e0f2fe] to-[#f3e8ff] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Features label */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white shadow-sm text-sm font-medium mb-6">
          <Star className="w-4 h-4 mr-2 text-gray-800" />
          Features
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
          What is Prime?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Discover how Prime HR optimizes workforce management and boosts operational efficiency.
        </p>

        {/* Grid layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-16 md:gap-28 place-items-center min-h-[500px] mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 max-w-xs md:max-w-sm"
            >
              <div className="flex items-center mb-3">
                <ArrowRight className="w-5 h-5 text-gray-800" />
                <h3 className="text-lg font-semibold ml-2 text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}

          {/* Center axis + logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-0.5 bg-gray-300" />
            <div className="absolute h-full w-0.5 bg-gray-300" />
            <img
              src="./Logo.png"
              alt="Prime Logo"
              className="w-24 h-24 md:w-32 md:h-32 bg-transparent z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
