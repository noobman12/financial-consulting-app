import React from "react";
import { Plus } from "lucide-react";

export const ContactFAQ = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Title */}
        <div className="lg:w-1/3">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-[#114232] uppercase tracking-wide">FAQ Section</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked <br /> Questions
          </h2>
          <button className="bg-[#114232] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#0d3326] transition-colors">
            View All FAQ's +
          </button>
        </div>

        {/* Right Column: Questions */}
        <div className="lg:w-2/3 space-y-4">
          {[
            "How can I get in touch with your finance team?",
            "What information should I prepare before contacting your team?",
            "How quickly will I receive a response after reaching out?",
            "Can I schedule a consultation with one of your advisors?",
            "What types of clients do you work with?"
          ].map((question, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors group">
              <div className="flex gap-4">
                 <span className="font-bold text-gray-400 text-sm">{index + 1}.</span>
                 <h3 className="font-semibold text-gray-900 text-sm md:text-base">{question}</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 group-hover:text-[#114232] transition-colors shadow-sm">
                <Plus className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
