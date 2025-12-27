import React from "react";
import { ChevronDown } from "lucide-react";

export const InquiryForm = () => {
  return (
    <section className="py-12 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
         <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-[#114232] uppercase tracking-wide">Inquiry</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your Feedback <br /> Fuels Our Journey
        </h2>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter Your Name" 
                className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900">Company Name</label>
               <input 
                type="text" 
                placeholder="Enter Your Company" 
                className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900">Email Address</label>
               <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900">Country</label>
               <input 
                type="text" 
                placeholder="Enter Country" 
                className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2 relative">
              <label className="text-sm font-bold text-gray-900">Project Type</label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm appearance-none text-gray-500">
                  <option>Home Loan</option>
                  <option>Business Loan</option>
                  <option>Investment</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
             <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900">Budget Range</label>
              <div className="flex gap-4">
                 <div className="relative w-full">
                    <select className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm appearance-none text-gray-500">
                      <option>$0.00</option>
                      <option>$1,000</option>
                      <option>$5,000</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                 </div>
                 <div className="relative w-full">
                    <select className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm appearance-none text-gray-500">
                      <option>$0.00</option>
                      <option>$10,000</option>
                      <option>$50,000</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                 </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Write a Message</label>
            <textarea 
              rows={6}
              placeholder="Tell Us About Your Project" 
              className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit" className="bg-[#114232] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#0d3326] transition-colors">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
