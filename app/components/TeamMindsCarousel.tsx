"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export const TeamMindsCarousel = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block bg-gray-200 px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Members</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet the Minds <br /> Behind Our Mission
            </h2>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-gray-600">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-gray-600">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Placeholder for Carousel Items */}
        <div className="flex gap-6 overflow-hidden">
           {/* Card 1 */}
           <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-6 h-[300px] flex items-center justify-center bg-gray-200">
              <ImageIcon className="w-12 h-12 text-gray-400" />
           </div>
           {/* Card 2 */}
           <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-6 h-[300px] flex items-center justify-center bg-gray-200">
              <ImageIcon className="w-12 h-12 text-gray-400" />
           </div>
           {/* Card 3 */}
           <div className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl p-6 h-[300px] flex items-center justify-center bg-gray-200">
              <ImageIcon className="w-12 h-12 text-gray-400" />
           </div>
        </div>
      </div>
    </section>
  );
};
