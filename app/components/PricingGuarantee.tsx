import React from "react";
import { Image as ImageIcon } from "lucide-react";

export const PricingGuarantee = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
         <div className="mb-12">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</span>
            <h2 className="text-4xl font-bold text-[#114232] mt-4 leading-tight">
                Your Complete Satisfaction<br />
                is Fully Guaranteed
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Image Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-[500px] w-full flex items-center justify-center">
                 <ImageIcon className="w-16 h-16 text-gray-400 opacity-50" />
            </div>

            {/* Right List */}
            <div className="space-y-8 flex flex-col justify-center">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#114232] rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-500">
                        Try our services risk-free. If you're not satisfied within the first 30 days, we'll refund your money, no questions asked.
                    </p>
                </div>
                
                 <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#114232] rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cancel and Email Refund Process</h3>
                    <p className="text-gray-500">
                        Our cancellation process is simple and straightforward. Just send us an email, and we'll handle the rest.
                    </p>
                </div>

                 <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#114232] rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer-Centered Commitment</h3>
                    <p className="text-gray-500">
                        Your satisfaction is our top priority. We are committed to providing you with the best possible service and support.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
