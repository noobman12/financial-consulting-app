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
