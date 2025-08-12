import { Users, Zap, Target } from "lucide-react";
function ZordieSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Zordie?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Zordie is your{" "}
            <span className="font-semibold text-blue-600">
              all-in-one autonomous recruitment and onboarding platform
            </span>
            , built for speed, precision, and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI-Powered Precision
                  </h3>
                  <p className="text-gray-600">
                    Advanced algorithms match the right candidates with the
                    right roles, reducing time-to-hire by 80%.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600">
                    Autonomous workflows handle screening, scheduling, and
                    initial assessments instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Scale Effortlessly
                  </h3>
                  <p className="text-gray-600">
                    Handle hundreds of applications simultaneously without
                    compromising quality or candidate experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">
                  Interactive Demo Placeholder
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Live AI workflow demonstration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZordieSection;
