import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <main className="flex-1 flex flex-col justify-center max-w-2xl mt-12 lg:mt-0">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-fit mb-6">
        <span className="text-xs font-semibold text-gray-600 tracking-wide">
          TrustFin Top 1 Finance Consulting in The World
        </span>
        <ArrowRight className="w-3 h-3 text-gray-500" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
        Your Path to Financial <br /> Freedom Starts Here
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
        We believe that financial freedom is within everyone&apos;s reach, and we&apos;re here to guide you every step of the way.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-6">
        <button className="bg-[#114232] text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-[#0d3326] transition-colors cursor-pointer shadow-lg shadow-green-900/20">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="text-gray-900 font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
          Subscribe
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </main>
  );
};
