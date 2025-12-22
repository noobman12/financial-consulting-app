import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PricingHero } from "../components/PricingHero";
import { PricingSection } from "../components/PricingSection";
import { PricingFeatures } from "../components/PricingFeatures";
import { PricingContent } from "../components/PricingContent";
import { PricingBenefits } from "../components/PricingBenefits";
import { PricingGuarantee } from "../components/PricingGuarantee";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>
      <PricingHero />
      <PricingSection />
      <PricingFeatures />
      <PricingContent />
      <PricingBenefits />
      <PricingGuarantee />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
