import React from "react";
import { ArrowRight, Rocket, Share2, Award, Clock, ArrowUpRight, ArrowDownLeft, Wallet, Repeat } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side - Visuals */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
           {/* Background Grey Box */}
           <div className="absolute inset-4 bg-gray-200 rounded-3xl -z-10 transform -translate-x-4 translate-y-4"></div>
           <div className="absolute inset-0 bg-gray-200/50 rounded-3xl -z-20"></div> {/* Placeholder for the grey blob in bg if needed */}
           
           {/* We can use a main grey container as the base */}
           <div className="w-[80%] h-[400px] bg-gray-300 rounded-2xl relative">
              {/* Floating Card 1: My Balance (Top Left) */}
              <div className="absolute -top-12 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl w-72">
                 <div className="mb-4">
                    <p className="text-xs text-gray-500 font-medium mb-1">My Balance</p>
                    <div className="flex items-end gap-2">
                       <h3 className="text-2xl font-bold text-gray-900">$8,171.32</h3>
                       <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded mb-1">
                          +6,2%
                       </span>
                       <span className="text-[10px] text-gray-400 mb-1">Compare to last month</span>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <button className="flex-1 bg-[#114232] text-white text-xs py-2.5 rounded-lg font-medium hover:bg-[#0d3326] transition-colors">
                       Send Money
                    </button>
                    <button className="flex-1 border border-gray-200 text-gray-700 text-xs py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                       Request money
                    </button>
                 </div>
              </div>

              {/* Floating Card 2: My Card (Bottom Right) */}
              <div className="absolute -bottom-12 -right-8 md:-right-12 bg-white p-5 rounded-2xl shadow-xl w-72">
                 <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-semibold text-gray-900">My card</p>
                    <div className="flex gap-0.5">
                       <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                       <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                       <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                 </div>
                 
                 {/* Credit Card Visual */}
                 <div className="bg-[#114232] rounded-xl p-4 text-white mb-6 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                       <div className="w-8 h-5 bg-yellow-500/80 rounded flex items-center justify-center">
                          <div className="w-5 h-3 border border-gray-800/20 rounded-sm"></div>
                       </div>
                    </div>
                    <div className="mb-4">
                       <p className="font-mono text-lg tracking-wider">8763 2736 9873 0329</p>
                    </div>
                    <div className="flex justify-between items-end">
                       <div className="flex gap-6">
                          <div>
                             <p className="text-[8px] opacity-70 mb-0.5">Card Holder</p>
                             <p className="text-xs font-medium">Bessie Copper</p>
                          </div>
                          <div>
                             <p className="text-[8px] opacity-70 mb-0.5">Expired</p>
                             <p className="text-xs font-medium">10/28</p>
                          </div>
                       </div>
                       <span className="font-bold italic text-lg leading-none">VISA</span>
                    </div>
                 </div>

                 {/* Action Icons */}
                 <div className="flex justify-between px-2">
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">
                          <ArrowUpRight className="w-4 h-4" />
                       </div>
                       <span className="text-[10px] text-gray-500">Transfer</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">
                          <ArrowDownLeft className="w-4 h-4" />
                       </div>
                       <span className="text-[10px] text-gray-500">Receive</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">
                          <Wallet className="w-4 h-4" />
                       </div>
                       <span className="text-[10px] text-gray-500">Top Up</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer">
                          <Repeat className="w-4 h-4" />
                       </div>
                       <span className="text-[10px] text-gray-500">Swap</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2">
           <div className="bg-gray-100 px-4 py-1.5 rounded-full w-fit mb-6">
              <span className="text-sm font-semibold text-[#114232]">About Us</span>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Simplifying Finance with Personalized Solutions
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
                 <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-4 text-[#114232]">
                    <Rocket className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission & Vision</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                    TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
                 <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-4 text-[#114232]">
                    <Share2 className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Team</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                    Our leadership team is composed of visionary thinkers and industry experts who are committed to guiding the company with integrity, innovation, and excellence.
                 </p>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
                 <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-4 text-[#114232]">
                    <Award className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Awards & Recognition</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                    Over the years, our dedication to innovation, transparency, and client satisfaction has earned us numerous awards and accolades from leading industry organizations.
                 </p>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
                 <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-4 text-[#114232]">
                    <Clock className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Company Timeline</h3>
                 <p className="text-sm text-gray-500 leading-relaxed">
                    Our journey in the finance industry is a story of growth, innovation, and dedication to delivering exceptional financial solutions.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
