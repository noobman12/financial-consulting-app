import React from "react";
import { Image as ImageIcon } from "lucide-react";

export const LoanSolutionsSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Visual */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[600px] bg-gray-200 rounded-3xl flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-white/50" />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                Unlocking the Best Loan Solutions for Your Future
              </h2>
            </div>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#114232]/20 focus:border-[#114232] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#114232]/20 focus:border-[#114232] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#114232]/20 focus:border-[#114232] transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Desired Loan Amount</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#114232]/20 focus:border-[#114232] transition-colors"
                    placeholder="$0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Credit Score Range</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#114232]/20 focus:border-[#114232] transition-colors bg-white">
                    <option>Select Range</option>
                    <option>Excellent (720-850)</option>
                    <option>Good (690-719)</option>
                    <option>Fair (630-689)</option>
                    <option>Bad (300-629)</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-[#114232] text-white py-4 rounded-xl font-bold hover:bg-[#0d3326] transition-colors mt-4 cursor-pointer">
                Get Started
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
