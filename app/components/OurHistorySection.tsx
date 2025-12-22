import React from "react";
import { ArrowRight, Image as ImageIcon, Plus } from "lucide-react";

export const OurHistorySection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Our History</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Decades of Dedication<br />to Your Financial Future
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
            At Trustfin, we are dedicated to simplifying your financial journey. Our platform offers innovative solutions designed to empower individuals and businesses to make informed financial decisions.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Years of Experience,<br />Driven by Integrity
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded in 2003, Fintrust emerged from a vision to transform the financial landscape by making financial management accessible and straightforward for everyone. Our founders, a group of financial experts and technology enthusiasts, recognized the challenges faced by individuals and small businesses in managing their finances effectively.
            </p>
            <button className="flex items-center gap-2 bg-[#114232] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d3326] transition-colors">
              Read More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Side: Visual */}
          <div className="w-full lg:w-1/2">
             <div className="w-full h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center relative">
               <ImageIcon className="w-20 h-20 text-white/50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Plus className="w-10 h-10 text-white fill-white" strokeWidth={4} />
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
