import React from "react";
import { ArrowRight, Shield, TrendingUp, Landmark } from "lucide-react";

export const PreservingWealthSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Wealth Management</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Preserving Wealth, Creating Legacies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6 text-[#114232]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Asset Protection</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Safeguard your hard-earned assets with our comprehensive protection strategies tailored to your unique situation.
            </p>
            <button className="flex items-center gap-2 text-[#114232] font-semibold text-sm hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6 text-[#114232]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Optimization</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Maximize your returns by minimizing tax liabilities through strategic planning and efficient investment structures.
            </p>
            <button className="flex items-center gap-2 text-[#114232] font-semibold text-sm hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6 text-[#114232]">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Estate Planning</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Ensure your legacy is preserved and passed on according to your wishes with our expert estate planning services.
            </p>
            <button className="flex items-center gap-2 text-[#114232] font-semibold text-sm hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
