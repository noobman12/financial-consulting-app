import React from "react";
import { Check } from "lucide-react";

const features = [
  "Comprehensive Financial Reporting",
  "Priority Customer Support",
  "Unlimited Transactions",
  "Advanced Risk Management Tools",
  "Team Collaboration Features",
  "Custom Financial Dashboards",
  "Integration with Accounting Software",
  "Enhanced Data Security",
];

const PricingCard = ({ 
  title, 
  price, 
  description, 
  isPopular = false,
  extraFeatures = [] 
}: { 
  title: string; 
  price: string; 
  description: string; 
  isPopular?: boolean;
  extraFeatures?: string[];
}) => {
  return (
    <div className={`rounded-3xl p-8 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300 ${
      isPopular 
        ? "bg-[#114232] text-white shadow-xl ring-1 ring-gray-900/5 relative overflow-hidden" 
        : "bg-white text-gray-900 border border-gray-100 shadow-lg"
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-8 right-8 bg-white text-[#114232] text-xs font-bold px-3 py-1 rounded-full">
          Premium
        </div>
      )}

      {/* Header */}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-bold tracking-tight">{price}</span>
        <span className={`text-sm font-medium ${isPopular ? "text-gray-300" : "text-gray-500"}`}>/Month</span>
      </div>

      <p className={`text-sm leading-relaxed mb-8 ${isPopular ? "text-gray-300" : "text-gray-500"}`}>
        {description}
      </p>

      {/* Divider */}
      <div className={`h-px w-full mb-8 ${isPopular ? "bg-white/10" : "bg-gray-100"}`}></div>

      {/* Features */}
      <div className="space-y-4 mb-8 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
               isPopular ? "bg-white text-[#114232]" : "bg-[#114232] text-white"
            }`}>
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className={`text-sm ${isPopular ? "text-gray-200" : "text-gray-600"}`}>
              {feature}
            </span>
          </div>
        ))}
        {extraFeatures.map((feature, index) => (
           <div key={`extra-${index}`} className="flex items-start gap-3">
            <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${
               isPopular ? "bg-white text-[#114232]" : "bg-[#114232] text-white"
            }`}>
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className={`text-sm ${isPopular ? "text-gray-200" : "text-gray-600"}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className={`w-full py-4 rounded-full font-semibold transition-colors ${
        isPopular 
          ? "bg-[#a3e635] text-[#114232] hover:bg-[#bef264]" 
          : "bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
      }`}>
        Get Started
      </button>
    </div>
  );
};

export const PricingSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-[#114232]">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
            Affordable Solutions, Premium Financial Guidance
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Basic Plan */}
          <PricingCard
            title="Basic Plan"
            price="$20.00"
            description="The Business Plan on Trustfin is designed for growing businesses that require comprehensive financial management tools and premium support."
          />

          {/* Business Plan (Highlighted) */}
          <PricingCard
            title="Business Plan"
            price="$50.00"
            description="The Business Plan on Trustfin is designed for growing businesses that require comprehensive financial management tools and premium support."
            isPopular={true}
          />

          {/* Enterprise Plan */}
          <PricingCard
            title="Enterprise Plan"
            price="$80.00"
            description="The Business Plan on Trustfin is designed for growing businesses that require comprehensive financial management tools and premium support."
            extraFeatures={["Integration with Accounting Software"]}
          />
        </div>
      </div>
    </section>
  );
};
