import { ArrowRight } from "lucide-react";
import React from "react";

function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Answers to help you get started faster.
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from teams who streamlined their workflow and delivered
            more with less.
          </p>
        </div>

        <div className="space-y-6">
          {[
            "How does the autonomous hiring process work?",
            "What integrations are available?",
            "How do you ensure candidate quality?",
            "What kind of support do you provide?",
          ].map((question, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {question}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
