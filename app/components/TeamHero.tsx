import React from "react";

export const TeamHero = () => {
  return (
    <section className="pt-24 pb-16 px-8 md:px-12 lg:px-20 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-gray-100 px-3 py-1 rounded-full mb-6">
           <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Team</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          A Dedicated Team, <br className="hidden md:block" />
          Transforming Finance Together
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Personalized guidance and support from industry-leading professionals to help you achieve your financial goals and drive sustainable business growth.
        </p>
      </div>
    </section>
  );
};
