import React from "react";
import { Plus, Minus } from "lucide-react";

export const FAQSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <button className="bg-[#114232] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0d3326] transition-colors whitespace-nowrap">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {[
            "What services do you offer and how do they work?",
            "How do I know which plan is right for me?",
            "What are the fees and are there any hidden charges?",
            "How secure is my financial information?",
            "How soon can I get started?",
            "Do you offer support after onboarding?"
          ].map((question, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl p-6 hover:border-gray-300 transition-colors cursor-pointer group bg-gray-50/50">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 pr-8">{question}</h3>
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#114232] group-hover:text-[#114232] transition-colors">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
