import React from "react";
import { Globe, Box, Image as ImageIcon } from "lucide-react";

export const TrustedBy = () => {
  return (
    <footer className="mt-12 lg:mt-auto pb-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 border-t border-transparent lg:border-none pt-6 lg:pt-0">
        <p className="text-gray-500 text-sm max-w-[200px] leading-tight">
          Trusted by more than 99,000+ companies across the world
        </p>

        {/* Logos */}
        <div className="flex items-center gap-8 opacity-60 grayscale">
          {/* Mock Logos */}
          <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
            <Globe className="w-6 h-6" />
            <span>ipsum</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
            <Box className="w-6 h-6" />
            <span>LOGO</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
            <ImageIcon className="w-6 h-6" />
            <span>logoipsum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
