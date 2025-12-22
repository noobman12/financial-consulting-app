import React from "react";
import { Image as ImageIcon, Diamond, ArrowUp } from "lucide-react";

export const InsightSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side - Visuals */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
           {/* Main Grey Container Placeholder */}
           <div className="w-[80%] h-[450px] bg-gray-200 rounded-2xl relative flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-gray-400 opacity-50" />
              
              {/* Floating Card 1: Upgrade Plan (Top Left) */}
              <div className="absolute -top-12 -left-4 md:-left-12 bg-white p-5 rounded-2xl shadow-xl w-64 z-10">
                 <div className="flex items-start gap-3 mb-3">
                    <div className="bg-[#114232] p-2 rounded-lg">
                       <Diamond className="w-5 h-5 text-white" fill="currentColor" />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-sm">Upgrade plan</h4>
                       <p className="text-xs text-gray-500">Your free trial will be over</p>
                    </div>
                 </div>
                 {/* Progress Bar */}
                 <div className="w-full bg-gray-100 h-2 rounded-full mb-2">
                    <div className="bg-[#114232] h-2 rounded-full w-[70%]"></div>
                 </div>
                 <p className="text-xs font-bold text-[#114232]">Day 5 of 7</p>
              </div>

              {/* Floating Card 2: Monthly Income (Bottom Right) */}
              <div className="absolute -bottom-12 -right-4 md:-right-12 bg-white rounded-2xl shadow-xl w-64 z-10 overflow-hidden">
                 <div className="p-5 pb-2">
                    <p className="text-xs font-semibold text-gray-900 mb-1">Monthly Income</p>
                    <h3 className="text-2xl font-bold text-gray-900">$14,890.00</h3>
                 </div>
                 <div className="bg-[#114232] p-3 flex justify-between items-center mt-2">
                    <span className="text-[10px] text-white/80">Total Monthly Income</span>
                    <div className="flex items-center gap-1 text-white text-xs font-bold">
                       <ArrowUp className="w-3 h-3" />
                       <span>+2%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
           <div className="bg-white border border-gray-100 px-4 py-1.5 rounded-full w-fit mb-6 shadow-sm">
              <span className="text-sm font-semibold text-[#114232]">TrustFin Insight</span>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Your Source for the Latest Industry and Market Insights
           </h2>

           <div className="space-y-4">
              {/* List Item 1 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow group">
                 <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
                 <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Market Analysis and Trends</span>
              </div>

              {/* List Item 2 (Active) */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-md flex items-center gap-4 cursor-pointer relative overflow-hidden">
                 {/* Active Indicator */}
                 <div className="w-4 h-4 rounded-full bg-[#114232]"></div>
                 <span className="text-lg font-medium text-gray-900">Expert Opinions and Commentary</span>
              </div>

              {/* List Item 3 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow group">
                 <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
                 <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Economic News and Updates</span>
              </div>

              {/* List Item 4 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow group">
                 <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
                 <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">Industry Reports</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
