"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { ServiceSection } from "../components/ServiceSection";
import { FinancialGoalsSection } from "../components/FinancialGoalsSection";
import { PreservingWealthSection } from "../components/PreservingWealthSection";
import { LoanSolutionsSection } from "../components/LoanSolutionsSection";
import { SmartMoneyManagementSection } from "../components/SmartMoneyManagementSection";
import { RealStoriesSection } from "../components/RealStoriesSection";
import { FAQSection } from "../components/FAQSection";

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-20 px-8 md:px-12 lg:px-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Guiding You Through<br />Every Step of Financial Success
        </h1>
      </section>

      {/* Reusing existing Service Section for the Charts/Stats part */}
      <ServiceSection />

      <FinancialGoalsSection />

      <PreservingWealthSection />

      <LoanSolutionsSection />

      <SmartMoneyManagementSection />

      <RealStoriesSection />

      <FAQSection />

      <CTASection />
      
      <Footer />
    </div>
  );
}
