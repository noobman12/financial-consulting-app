import React from "react";
import { ArrowRight, BarChart, Cpu, TrendingUp, PieChart, Globe } from "lucide-react";

export const IndustryMarketTrends = () => {
  const trends = [
    {
      title: "Market Segmentation",
      description: "Identify and access different segments of the market, understanding unique behaviors and demographics.",
      icon: <PieChart className="w-6 h-6 text-[#114232]" />,
    },
    {
      title: "Technological Innovations",
      description: "Stay informed on emerging technologies that are reshaping the financial sector and creating new opportunities.",
      icon: <Cpu className="w-6 h-6 text-[#114232]" />,
    },
    {
      title: "Investment Opportunities and Risks",
      description: "Learn about potential high-growth areas and the associated risks to make balanced investment decisions.",
      icon: <TrendingUp className="w-6 h-6 text-[#114232]" />,
    },
    {
      title: "Current Market Trends",
      description: "Keep up with the latest market movements, from stock rallies to bond yields, and understand what drives them.",
      icon: <BarChart className="w-6 h-6 text-[#114232]" />,
    },
    {
      title: "Sector-Specific Analyses",
      description: "Deep dive into specific sectors like technology, healthcare, and energy to find hidden gems.",
      icon: <Globe className="w-6 h-6 text-[#114232]" />,
    },
  ];

  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
           <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Market Analysis and Trends</span>
           <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
             Navigate Market<br />
             Trends with Confidence
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-lg transition-all border border-gray-100 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#114232]/10 transition-colors">
                {trend.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{trend.title}</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                {trend.description}
              </p>
              <button className="bg-[#114232] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0d3326] transition-colors flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
