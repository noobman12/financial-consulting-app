import React from "react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export const IndustrySmartMoney = () => {
  const articles = [
    {
      category: "Global Growth",
      date: "Oct 24, 2024",
      title: "Asia-Pacific Growth Outlook Remains Resilient",
      excerpt: "Despite global economic challenges, the Asia-Pacific region shows resilience, driven by strong consumer spending and robust manufacturing output.",
    },
    {
      category: "Job Market",
      date: "Oct 28, 2024",
      title: "U.S. Job Market Strengthens as Unemployment Hits Historic Lows",
      excerpt: "The U.S. job market continues to defy expectations, with unemployment rates reaching historic lows and wage growth remaining steady.",
    },
    {
      category: "Crypto",
      date: "Nov 02, 2024",
      title: "Digital Currency Regulations Loom as Adoption Grows",
      excerpt: "As digital currencies gain mainstream adoption, governments worldwide are considering new regulations to ensure stability and protect investors.",
    },
  ];

  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Economic News and Updates</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
                Unlocking the Secrets to Smart<br />
                Money Management
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
                <div key={index} className="group cursor-pointer">
                    <div className="bg-gray-200 rounded-3xl h-64 w-full mb-6 flex items-center justify-center overflow-hidden">
                         <ImageIcon className="w-12 h-12 text-gray-400 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="font-semibold text-[#114232]">{article.category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#114232] transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {article.excerpt}
                    </p>
                    <button className="bg-[#114232] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0d3326] transition-colors flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Read More <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
