import React from "react";

export const TeamCTA = () => {
  return (
    <section className="bg-[#114232] py-20 px-8 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Abstract Leaf Shapes */}
      <div className="absolute top-10 left-10 w-32 h-64 bg-white/5 rounded-full rotate-45 hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-64 bg-white/5 rounded-full -rotate-45 hidden md:block"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Reach Out, We're Here<br />to Help You Succeed
        </h2>
        <p className="text-white/70 text-sm md:text-base mb-10 max-w-2xl mx-auto">
          Whether you’re exploring services or need tailored guidance, our team is ready.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#a3e635] text-[#114232] font-bold px-8 py-3 rounded-full hover:bg-[#92d02e] transition-colors">
            Contact the Team
          </button>
          <button className="bg-white text-[#114232] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};
