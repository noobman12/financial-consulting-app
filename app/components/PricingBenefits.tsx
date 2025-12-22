import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PricingBenefits = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Benefits</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-4xl font-bold text-[#114232] mb-6 leading-tight">
                    Unlocking Financial<br />
                    Potential with the<br />
                    Business Plan!
                </h2>
                <div className="flex gap-4 mt-8">
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
            
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0"></div>
                     <div>
                         <h4 className="text-lg font-bold text-gray-900 mb-2">Advanced Financial Analytics</h4>
                         <p className="text-gray-500 leading-relaxed">
                             Our Business Plan includes powerful analytics tools that give you a deep dive into your financial data, helping you identify trends and opportunities.
                         </p>
                     </div>
                </div>
                 <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0"></div>
                     <div>
                         <h4 className="text-lg font-bold text-gray-900 mb-2">Dedicated Account Manager</h4>
                         <p className="text-gray-500 leading-relaxed">
                             Get personalized support from a dedicated account manager who understands your business and can provide tailored advice.
                         </p>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
