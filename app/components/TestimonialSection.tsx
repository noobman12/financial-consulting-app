import React from "react";
import { Image as ImageIcon, Star } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            This is Why Customers <br /> Love TrustFin
          </h2>
        </div>

        {/* Grid Layout - 2 Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="mb-6">
                 <div className="flex gap-1 mb-4">
                     {[1, 2, 3, 4, 5].map(i => (
                         <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                     ))}
                 </div>
                 <p className="text-gray-600 leading-relaxed italic text-lg mb-6">
                   "Working with TrustFin has been transformative for our business. Their expert advice and data-driven strategies helped us streamline our finances, and we saw a noticeable improvement in cash flow within months."
                 </p>
             </div>
             
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900">Mark Thompson</h4>
                    <p className="text-sm text-gray-500">CFO of Urban Solutions</p>
                 </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow relative">
             <div className="mb-6">
                 <div className="flex gap-1 mb-4">
                     {[1, 2, 3, 4, 5].map(i => (
                         <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                     ))}
                 </div>
                 <p className="text-gray-600 leading-relaxed italic text-lg mb-6">
                   "I’m incredibly grateful for the insights and support from TrustFin. Their team guided us through complex financial restructuring with clarity and precision that we couldn't have achieved alone."
                 </p>
             </div>
             
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-900">Linda Martinez</h4>
                    <p className="text-sm text-gray-500">Accounting at Tech Innovators</p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
