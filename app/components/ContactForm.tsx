import React from "react";

export const ContactForm = () => {
  return (
    <section className="py-12 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-[#114232] uppercase tracking-wide">Contact Form</span>
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

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Write a Message</label>
            <textarea 
              rows={6}
              placeholder="Write your experience here!" 
              className="w-full px-4 py-3 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 text-sm resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit" className="bg-[#114232] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#0d3326] transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
