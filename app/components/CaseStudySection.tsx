import React from "react";
import { Star, TrendingUp } from "lucide-react";

export const CaseStudySection = () => {
  return (
    <section className="py-24 px-8 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transforming Challenges into<br />Opportunities
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* Left Panel - Green Chart Card */}
          <div className="w-full lg:w-1/2 bg-[#f0fdf4] rounded-[2rem] p-8 border border-green-100 relative h-80 flex flex-col justify-between overflow-hidden group">
              <div className="flex justify-between items-start z-10">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">Growth</span>
                  <TrendingUp className="w-6 h-6 text-[#114232]" />
              </div>
              
              {/* Mock Chart Visual */}
              <div className="flex items-end gap-2 h-32 w-full mt-4">
                  {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#114232] rounded-t-md opacity-20 group-hover:opacity-40 transition-opacity" style={{ height: `${h}%` }}></div>
                  ))}
              </div>
              
              <div className="z-10 mt-4">
                 <h3 className="text-2xl font-bold text-gray-900">Revenue Growth</h3>
                 <p className="text-sm text-gray-600">Consistent upward trend in client revenue post-consultation.</p>
              </div>
          </div>

          {/* Right Panel - 90% Metric + Phone */}
          <div className="w-full lg:w-1/2 bg-gray-50 rounded-[2rem] p-8 border border-gray-100 relative h-80 flex items-center justify-between overflow-hidden">
             <div className="z-10 max-w-[50%]">
                 <h3 className="text-6xl font-bold text-gray-900 mb-2">90%</h3>
                 <p className="text-gray-500 leading-relaxed text-sm">
                    of our clients reported significant improvement in financial stability within the first year.
                 </p>
             </div>
             
             {/* Phone Mockup Cutoff */}
             <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 bg-white border-4 border-gray-200 rounded-[2rem] shadow-xl transform rotate-[-10deg] flex items-center justify-center">
                 <div className="text-center">
                    <div className="flex justify-center mb-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />)}
                    </div>
                    <p className="font-bold text-gray-900 text-sm">Top Rated</p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
