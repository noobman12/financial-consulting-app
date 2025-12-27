import React from "react";
import { Plus, Image as ImageIcon, Star, CheckCircle2, Trophy, CreditCard, ChevronDown } from "lucide-react";

export const CaseStudiesContent = () => {
  return (
    <section className="py-12 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Case Studies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Transforming Challenges into <br />
            Opportunities
          </h2>
        </div>

        {/* Visual Content Grid */}
        <div className="relative max-w-6xl mx-auto min-h-[600px] flex justify-center items-center">
          
          {/* Main Center Image */}
          <div className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-gray-200 rounded-3xl flex items-center justify-center relative z-10 shadow-lg">
             <ImageIcon className="w-20 h-20 text-white/50" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Plus className="w-10 h-10 text-white fill-white" strokeWidth={4} />
             </div>
          </div>

          {/* Floating Elements - Positioning is approximate to match design */}
          
          {/* Top Left: Satisfied Result Badge */}
          <div className="absolute top-10 left-0 md:left-20 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-fade-in-up">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
               <Trophy className="w-4 h-4 text-orange-500" />
            </div>
            <span className="font-bold text-orange-500 text-sm">Satisfied Result</span>
          </div>

          {/* Left Side: Quick Send Card */}
          <div className="absolute top-[150px] left-[-20px] md:left-0 lg:left-10 bg-white p-5 rounded-2xl shadow-xl w-[280px] z-20 hidden md:block border border-gray-100">
            <h4 className="font-bold text-gray-900 text-sm mb-4">Quick Send</h4>
            
            {/* Avatars */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
               <div className="flex flex-col items-center gap-1 min-w-[40px]">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-dashed border-gray-300">
                     <Plus className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-[10px] text-gray-500">Add</span>
               </div>
               {['Leslie', 'Wade', 'Esther', 'Darrel'].map((name, i) => (
                 <div key={i} className="flex flex-col items-center gap-1 min-w-[40px]">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <span className="text-[10px] text-gray-500">{name}</span>
                 </div>
               ))}
            </div>

            <div className="space-y-4">
               <div>
                  <p className="text-xs text-gray-400 mb-2">Choose Method</p>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-gray-800">Visa</span>
                     </div>
                     <span className="text-xs font-bold text-gray-900">$45.00 <ChevronDown className="w-3 h-3 inline" /></span>
                  </div>
               </div>
               
               <div>
                  <p className="text-xs text-gray-400 mb-2">Enter Amount</p>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                     <span className="text-lg font-bold text-gray-900">$2,34</span>
                     <div className="flex gap-1">
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                     </div>
                  </div>
               </div>

               <button className="w-full bg-[#114232] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#0d3326] transition-colors">
                  Send Money
               </button>
            </div>
          </div>

          {/* Right Side: Stats Card */}
          <div className="absolute top-[100px] right-[-20px] md:right-0 lg:right-20 bg-white p-6 rounded-2xl shadow-xl w-[220px] z-20 hidden md:block border border-gray-100">
             <p className="text-[#114232] font-bold text-sm mb-1">Amazing!</p>
             <h3 className="text-5xl font-bold text-gray-900 mb-2">92%</h3>
             <p className="text-xs text-gray-500 mb-4">
                We take pride in our <br /> finance solutions
             </p>
             <div className="flex gap-1">
                {[1, 2, 3, 4].map((_, i) => (
                   <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
                <Star className="w-4 h-4 text-gray-200 fill-gray-200" />
             </div>
          </div>

          {/* Bottom Right: Happy Clients Badge */}
          <div className="absolute bottom-20 right-0 md:right-40 bg-white py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-30 border border-gray-50">
             <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#114232]" />
             </div>
             <span className="font-bold text-gray-900 text-sm">96% <span className="font-normal text-gray-500">Happy Clients</span></span>
          </div>

        </div>

      </div>
    </section>
  );
};
