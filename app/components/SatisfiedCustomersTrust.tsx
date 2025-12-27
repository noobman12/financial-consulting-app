import React from "react";
import { Globe, Box, Image as ImageIcon } from "lucide-react";

export const SatisfiedCustomersTrust = () => {
  return (
    <section className="py-16 px-8 md:px-12 lg:px-20 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 text-lg font-medium mb-10">
          Trusted by more than 99,000+ companies across the world
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
          {/* Mock Logos */}
          <div className="flex items-center gap-2 font-bold text-2xl text-gray-400">
             <Box className="w-8 h-8" />
             <span>LOGO</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-2xl text-gray-400">
             <ImageIcon className="w-8 h-8" />
             <span>Brand</span>
          </div>
           <div className="flex items-center gap-2 font-bold text-2xl text-gray-400">
             <Box className="w-8 h-8" />
             <span>LOGO</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-2xl text-gray-400">
            <Globe className="w-8 h-8" />
            <span>logoipsum</span>
          </div>
           <div className="flex items-center gap-2 font-bold text-2xl text-gray-400">
             <ImageIcon className="w-8 h-8" />
             <span>Company</span>
          </div>
        </div>
      </div>
    </section>
  );
};
