import React from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export const PricingContent = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-[#114232] leading-tight max-w-3xl mx-auto">
                Empower Your Business<br />
                with Pro Insights and Solutions
             </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-center">
            {/* Left Text */}
            <div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                     <ImageIcon className="w-6 h-6 text-[#114232]" />
                </div>
                <h3 className="text-3xl font-bold text-[#114232] mb-6">Expert Financial Insights</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                    Receive professional advice and insights tailored to your unique financial situation. Our team of experts is here to help you make informed decisions that align with your goals.
                </p>
                <button className="bg-[#114232] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#0d3326] transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
            </div>
            {/* Right Image Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-[400px] w-full flex items-center justify-center">
                 <ImageIcon className="w-16 h-16 text-gray-400 opacity-50" />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             {/* Left Image Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-[400px] w-full flex items-center justify-center order-2 lg:order-1">
                 <ImageIcon className="w-16 h-16 text-gray-400 opacity-50" />
            </div>
             {/* Right Text */}
            <div className="order-1 lg:order-2">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                     <ImageIcon className="w-6 h-6 text-[#114232]" />
                </div>
                <h3 className="text-3xl font-bold text-[#114232] mb-6">24/7 Support and Assistance</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                    We offer round-the-clock support to ensure that you have the help you need, whenever you need it. Our team is dedicated to answering your questions and resolving any issues promptly.
                </p>
                <button className="bg-[#114232] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#0d3326] transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};
