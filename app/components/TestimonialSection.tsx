import React from "react";
import { Image as ImageIcon } from "lucide-react";

const testimonials = [
  {
    name: "Mark Thompson",
    role: "CFO of Urban Solutions",
    quote: "Working with TrustFin has been transformative for our business. Their expert advice and data-driven strategies helped us streamline our finances, and we saw a noticeable improvement in cash flow within months.",
    size: "large",
  },
  {
    name: "Linda Martinez",
    role: "Accounting at Tech Innovators Inc",
    quote: "Working with TrustFin has been transformative for our business. Their expert advice and data-driven strategies helped us streamline our finances, and we saw a noticeable improvement in cash flow within months",
    size: "large",
  },
  {
    name: "Linda Martinez",
    role: "Accounting at Tech Innovators Inc",
    quote: "I’m incredibly grateful for the insights and support from TrustFin. Their team guided us through complex financial restructuring with clarity and precision. ”",
    size: "small",
  },
  {
    name: "John Peterson",
    role: "CEO of Bright Manufacturing",
    quote: "I’m incredibly grateful for the insights and support from TrustFin. Their team guided us through complex financial restructuring with clarity and precision. ”",
    size: "small",
  },
  {
    name: "Mark Thompson",
    role: "CFO of Urban Solutions",
    quote: "I’m incredibly grateful for the insights and support from TrustFin. Their team guided us through complex financial restructuring with clarity and precision. ”",
    size: "small",
  },
];

export const TestimonialSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-[#114232]">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            This is Why Customers <br /> Love TrustFin
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-6">
          
          {/* Top Row (Large Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.filter(t => t.size === "large").map((testimonial, index) => (
              <div key={`large-${index}`} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row (Small Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => t.size === "small").map((testimonial, index) => (
              <div key={`small-${index}`} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
