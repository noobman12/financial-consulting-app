import React from "react";
import { 
  Medal, 
  Plus, 
  Image as ImageIcon, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  CreditCard 
} from "lucide-react";

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

        {/* Main Content Area */}
        <div className="relative max-w-5xl mx-auto min-h-[600px] flex items-center justify-center">
          
          {/* Center Large Image Placeholder */}
          <div className="w-full md:w-[500px] h-[500px] bg-gray-200 rounded-3xl flex items-center justify-center relative z-0">
            <ImageIcon className="w-20 h-20 text-white/50" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Plus className="w-10 h-10 text-white fill-white" strokeWidth={4} />
            </div>
          </div>

          {/* Floating Element: Satisfied Result (Top Left) */}
          <div className="absolute top-0 left-0 md:left-20 bg-white p-3 px-5 rounded-2xl shadow-xl z-10 animate-float-slow hidden md:flex items-center gap-3">
            <Medal className="w-6 h-6 text-orange-400" />
            <span className="font-bold text-orange-400">Satisfied Result</span>
          </div>

          {/* Floating Element: Quick Send Card (Bottom Left) */}
          <div className="absolute bottom-0 left-0 md:-left-4 bg-white p-6 rounded-3xl shadow-2xl w-72 z-10 hidden md:block border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-4">Quick Send</h4>
            
            {/* Avatars Row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">
                  <Plus className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-[10px] text-gray-500">Add</span>
              </div>
              
              {["Leslie", "Wade", "Esther", "Darrel"].map((name, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                   <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                     {/* Placeholder Avatar */}
                     <div className="w-full h-full bg-gray-300"></div>
                   </div>
                   <span className="text-[10px] text-gray-500">{name}</span>
                </div>
              ))}
            </div>

            {/* Choose Method */}
            <div className="mb-4">
              <p className="text-xs font-medium text-gray-700 mb-2">Choose Method</p>
              <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">Visa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">$45,00</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Enter Amount */}
            <div className="mb-6">
              <p className="text-xs font-medium text-gray-700 mb-2">Enter Amount</p>
              <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                 <span className="text-lg font-bold text-gray-900">$2,34<span className="animate-pulse">|</span></span>
                 <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                 </div>
              </div>
            </div>

            {/* Send Button */}
            <button className="w-full bg-[#114232] text-white font-semibold py-3 rounded-xl hover:bg-[#0d3326] transition-colors">
              Send Money
            </button>
          </div>

          {/* Floating Element: Amazing 92% (Top Right) */}
          <div className="absolute top-10 right-0 md:right-10 bg-white p-8 rounded-3xl shadow-xl w-64 z-10 hidden md:block border border-gray-100">
            <p className="text-[#114232] font-bold mb-1">Amazing!</p>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">92%</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              We take pride in our finance solutions
            </p>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-5 h-5 text-orange-400 fill-orange-400" />
              ))}
              <Star className="w-5 h-5 text-gray-200 fill-gray-200" />
            </div>
          </div>

          {/* Floating Element: Happy Clients (Bottom Right) */}
          <div className="absolute bottom-20 right-0 md:-right-8 bg-white p-3 px-5 rounded-2xl shadow-xl z-10 animate-float-delayed hidden md:flex items-center gap-3">
            <div className="bg-[#114232] p-1.5 rounded-full">
               <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <div className="flex gap-1">
               <span className="font-bold text-[#114232]">96%</span>
               <span className="font-medium text-gray-600">Happy Clients</span>
            </div>
          </div>

          {/* Mobile View Stack (Simplified) */}
          <div className="md:hidden flex flex-col gap-4 mt-8 w-full px-4">
             <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                <span className="font-bold text-orange-400">Satisfied Result</span>
                <Medal className="w-5 h-5 text-orange-400" />
             </div>
             
             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <p className="text-[#114232] font-bold mb-1">Amazing!</p>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">92%</h3>
                <p className="text-gray-500 text-sm mb-3">We take pride in our finance solutions</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-200 fill-gray-200" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
