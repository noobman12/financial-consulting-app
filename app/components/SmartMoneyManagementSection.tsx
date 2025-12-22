import React from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export const SmartMoneyManagementSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Financial Literacy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-2xl">
            Unlocking the Secrets to Smart Money Management
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Budgeting Basics", desc: "Master the art of tracking income and expenses." },
            { title: "Investing Fundamentals", desc: "Learn how to grow your wealth over time." },
            { title: "Retirement Planning", desc: "Secure your future with strategic planning." }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-200 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden relative">
                <ImageIcon className="w-12 h-12 text-white/50" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-4 text-sm">{item.desc}</p>
              <button className="flex items-center gap-2 text-[#114232] font-semibold text-sm hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
