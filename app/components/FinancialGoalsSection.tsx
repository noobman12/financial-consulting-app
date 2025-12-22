import React from "react";
import { Check, Image as ImageIcon } from "lucide-react";

export const FinancialGoalsSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Personalized Guidance</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Your Financial Goals, Our Personalized Guidance
          </h2>
          
          <ul className="space-y-4 mb-10">
            {[
              "Personalized financial planning",
              "Investment strategy tailored to your needs",
              "Risk management and retirement planning",
              "Ongoing support and monitoring",
              "Comprehensive market analysis"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-[#114232]">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-[#114232] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0d3326] transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Side: Visual */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[500px] bg-gray-200 rounded-3xl flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-white/50" />
          </div>
        </div>

      </div>
    </section>
  );
};
