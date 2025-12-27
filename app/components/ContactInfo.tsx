import React from "react";
import { Phone, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <section className="py-12 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
         <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-[#114232] uppercase tracking-wide">Get in Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Still Have a Questions?
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Phone Card */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <Phone className="w-5 h-5 text-[#114232]" />
          </div>
          <h3 className="text-2xl font-bold text-[#114232] mb-2">+6232456678</h3>
          <p className="text-gray-500 text-sm">We Are Always Ready to Help</p>
        </div>

        {/* Email Card */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-5 h-5 text-[#114232]" />
          </div>
          <h3 className="text-2xl font-bold text-[#114232] mb-2">Support@help.com</h3>
          <p className="text-gray-500 text-sm">The Best Way to get Faster Answer</p>
        </div>
      </div>
    </section>
  );
};
