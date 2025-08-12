import { useState } from "react";

function UsersLoveSection() {
  const [activeTab, setActiveTab] = useState("recruiters");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-8 mb-8">
            <button
              onClick={() => setActiveTab("recruiters")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === "recruiters"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Why recruiters love us
            </button>
            <button
              onClick={() => setActiveTab("seekers")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === "seekers"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Why Job Seekers Love us
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">20K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">80%</div>
            <div className="text-gray-600">Users Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Jobs Landed</div>
          </div>
        </div>

        {activeTab === "recruiters" && (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Designed for recruiters to hire faster and smarter with advanced
              AI tools.
            </h3>
          </div>
        )}

        {activeTab === "seekers" && (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Empowering job seekers with personalized matches and streamlined
              applications.
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}

export default UsersLoveSection;
