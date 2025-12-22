import React from "react";
import { Star, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export const RealStoriesSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-[#114232] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
             Real Stories, Real Success Inspired by You
           </h2>
           <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                 <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white text-[#114232] flex items-center justify-center hover:bg-gray-100 transition-colors">
                 <ChevronRight className="w-5 h-5" />
              </button>
           </div>
        </div>

        <div className="bg-[#1a5642] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-white/10">
           <div className="w-full md:w-1/3">
              <div className="w-full aspect-square bg-gray-200/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                 <ImageIcon className="w-16 h-16 text-white/30" />
              </div>
           </div>
           
           <div className="w-full md:w-2/3">
              <div className="flex gap-1 mb-6">
                 {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                 ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                "Discover how our tailored strategies helped clients achieve financial freedom, confidence, and lasting wealth. Their success is our greatest achievement."
              </h3>
              <div>
                 <p className="text-white font-bold text-lg">Sarah Johnson</p>
                 <p className="text-white/60">Business Owner</p>
              </div>
           </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
           <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
           </button>
           <button className="w-12 h-12 rounded-full bg-white text-[#114232] flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
           </button>
        </div>

      </div>
    </section>
  );
};
