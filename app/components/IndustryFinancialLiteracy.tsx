import React from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export const IndustryFinancialLiteracy = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Image Placeholder */}
        <div className="w-full lg:w-1/2">
             <div className="bg-gray-200 rounded-3xl h-[500px] w-full flex items-center justify-center">
                 <ImageIcon className="w-16 h-16 text-gray-400 opacity-50" />
            </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
           <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Expert Advice</span>
           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
             A Gateway to Financial<br />
             Literacy and Success
           </h2>
           <p className="text-gray-500 text-lg leading-relaxed mb-8">
             Financial literacy is key to making sound decisions. Our expert advice section provides you with the knowledge you need to navigate the complex world of finance. From understanding basic concepts to advanced strategies, we have you covered.
           </p>
           
           <div className="flex flex-col gap-4">
               <button className="w-fit bg-[#114232] text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-[#0d3326] transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
               </button>
               <p className="text-sm text-gray-400 mt-4 italic">
                   Join us to Begin Your Management Quest
               </p>
           </div>
        </div>
      </div>
    </section>
  );
};
