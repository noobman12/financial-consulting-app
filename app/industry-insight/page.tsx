import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { IndustryHero } from "../components/IndustryHero";
import { InsightSection } from "../components/InsightSection";
import { IndustryMarketTrends } from "../components/IndustryMarketTrends";
import { IndustryFinancialLiteracy } from "../components/IndustryFinancialLiteracy";
import { IndustrySmartMoney } from "../components/IndustrySmartMoney";
import { CTASection } from "../components/CTASection";

export default function IndustryInsightPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>
      <IndustryHero />
      <InsightSection />
      <IndustryMarketTrends />
      <IndustryFinancialLiteracy />
      <IndustrySmartMoney />
      <CTASection />
      <Footer />
    </div>
  );
}
