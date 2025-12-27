import React from "react";
import { Heart, Users, Coffee, Activity, Image as ImageIcon } from "lucide-react";

export const TeamActivities = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Image Placeholder */}
        <div className="h-[600px] bg-gray-200 rounded-3xl flex items-center justify-center order-2 lg:order-1">
           <ImageIcon className="w-24 h-24 text-white opacity-50" />
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <div className="inline-block bg-gray-100 px-3 py-1 rounded-full mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Team Activity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Empowering Teams <br />
            One Activity at a Time
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-[#114232]" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Volunteer Initiatives</h3>
               <p className="text-gray-500 text-xs leading-relaxed">
                 Community-driven programs that foster empathy and shared purpose.
               </p>
            </div>

            {/* Card B */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-[#114232]" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Team Building Retreats</h3>
               <p className="text-gray-500 text-xs leading-relaxed">
                 Immersive offsite experiences to strengthen collaboration.
               </p>
            </div>

            {/* Card C */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Coffee className="w-5 h-5 text-[#114232]" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Social Events</h3>
               <p className="text-gray-500 text-xs leading-relaxed">
                 Regular gatherings to build relationships beyond the workday.
               </p>
            </div>

            {/* Card D */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5 text-[#114232]" />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Wellness Programs</h3>
               <p className="text-gray-500 text-xs leading-relaxed">
                 Mindfulness, fitness, and health resources that support balance.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
