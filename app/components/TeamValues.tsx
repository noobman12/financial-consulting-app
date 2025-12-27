import React from "react";
import { ShieldCheck, Zap, Users, Image as ImageIcon } from "lucide-react";

export const TeamValues = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <div className="inline-block bg-gray-100 px-3 py-1 rounded-full mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Core Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
            Integrity in Every Step <br />
            Innovation at Every Turn
          </h2>

          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#114232]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Integrity at the Core</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We prioritize transparency, accountability, and ethical practices across all engagements.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#114232]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation for Impact</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We develop solutions that deliver measurable results and long-term value.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[#114232]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Collaboration and Inclusion</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We work cross-functionally to bring diverse perspectives to complex challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="h-[500px] bg-gray-200 rounded-3xl flex items-center justify-center">
           <ImageIcon className="w-20 h-20 text-white opacity-50" />
        </div>

      </div>
    </section>
  );
};
