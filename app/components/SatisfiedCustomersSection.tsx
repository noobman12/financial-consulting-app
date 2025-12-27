import React from "react";
import { Image as ImageIcon, Plus } from "lucide-react";

export const SatisfiedCustomersSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Satisfied Customers</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Customer Satisfaction Meets Financial Excellence!
          </h2>
          
          <p className="text-gray-500 mb-12 leading-relaxed">
            Our commitment to excellence is reflected in every aspect of our offerings, from personalized financial planning to advanced analytics and dedicated support. We strive to exceed our clients' expectations, ensuring they feel valued and understood at every step of their financial journey.
          </p>
          
          <div className="flex flex-wrap gap-12 md:gap-20">
            <div>
              <h3 className="text-4xl font-bold text-[#114232] mb-1">90K</h3>
              <p className="text-gray-600">Satisfied User</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#114232] mb-1">150K</h3>
              <p className="text-gray-600">Download</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#114232] mb-1">95%</h3>
              <p className="text-gray-600">Project Success</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[450px] bg-gray-200 rounded-3xl flex items-center justify-center relative">
            <ImageIcon className="w-20 h-20 text-white/50" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Plus className="w-10 h-10 text-white fill-white" strokeWidth={4} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
