import React from "react";
import { ArrowRight, Star, Settings } from "lucide-react";

export const PricingFeatures = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#114232] mt-4 leading-tight">
            Ready to Scale? Go Further<br />
            with the Business Plan!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-[#114232]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlock Advanced Access to Services</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Get exclusive access to premium financial tools and resources designed to accelerate your business growth.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[#114232] font-semibold hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                </a>
            </div>

            {/* Card 2 */}
            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <Settings className="w-6 h-6 text-[#114232]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Options & Add-ons</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Customize your plan with add-ons that fit your specific needs, ensuring you only pay for what you use.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
