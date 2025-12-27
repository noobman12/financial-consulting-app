import React from "react";
import { ArrowRight, Wallet, LineChart, Landmark, Smartphone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side - Phone Mockup */}
        <div className="w-full lg:w-1/3 flex justify-center">
            <div className="bg-gray-100 rounded-[3rem] p-4 shadow-xl border-4 border-white w-72 h-[500px] relative overflow-hidden">
                {/* Screen Content */}
                <div className="bg-white rounded-[2.5rem] w-full h-full p-4 flex flex-col relative overflow-hidden">
                     {/* Header Mockup */}
                     <div className="flex justify-between items-center mb-6">
                         <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                         <div className="w-20 h-4 bg-gray-100 rounded-full"></div>
                     </div>
                     {/* Chart Mockup */}
                     <div className="w-full h-32 bg-gray-50 rounded-xl mb-4 flex items-end justify-between p-2 gap-1">
                        <div className="w-1/6 h-[40%] bg-gray-200 rounded-t-sm"></div>
                        <div className="w-1/6 h-[60%] bg-[#114232] rounded-t-sm"></div>
                        <div className="w-1/6 h-[30%] bg-gray-200 rounded-t-sm"></div>
                        <div className="w-1/6 h-[80%] bg-gray-200 rounded-t-sm"></div>
                        <div className="w-1/6 h-[50%] bg-gray-200 rounded-t-sm"></div>
                     </div>
                     {/* List Items Mockup */}
                     <div className="space-y-3">
                         {[1, 2, 3, 4].map(i => (
                             <div key={i} className="h-12 w-full bg-gray-50 rounded-lg flex items-center gap-3 px-3">
                                 <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                 <div className="flex-1 space-y-1">
                                     <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                     <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                                 </div>
                             </div>
                         ))}
                     </div>
                     {/* Floating Action Button Mockup */}
                     <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#114232] rounded-full shadow-lg flex items-center justify-center">
                         <ArrowRight className="w-5 h-5 text-white" />
                     </div>
                </div>
            </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-2/3">
           <div className="bg-gray-100 px-4 py-1.5 rounded-full w-fit mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#114232]"></div>
              <span className="text-sm font-semibold text-[#114232]">Our Solutions</span>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Simplifying Finance with <br/>TrustFin's Solutions
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Budgeting & Tracking */}
              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white flex flex-col">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-[#114232]">
                    <Wallet className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Budgeting & Tracking</h3>
                 <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    Manage your daily expenses and savings with our intuitive tracking tools designed for clarity.
                 </p>
                 <button className="text-[#114232] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                 </button>
              </div>

              {/* Card 2: Investments Planning */}
              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white flex flex-col">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-[#114232]">
                    <LineChart className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Investments Planning</h3>
                 <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    Grow your wealth with personalized investment strategies tailored to your financial goals.
                 </p>
                 <button className="text-[#114232] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                 </button>
              </div>

              {/* Card 3: Debt Management */}
              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white flex flex-col">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-[#114232]">
                    <Landmark className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Debt Management</h3>
                 <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    Take control of your liabilities with effective strategies to reduce and manage debt efficiently.
                 </p>
                 <button className="text-[#114232] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
