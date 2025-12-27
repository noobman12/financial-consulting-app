"use client";

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { ExpenseCard } from "./components/ExpenseCard";
import { AboutSection } from "./components/AboutSection";
import { ServiceSection } from "./components/ServiceSection";
import { PricingSection } from "./components/PricingSection";
import { InsightSection } from "./components/InsightSection";
import { TeamSection } from "./components/TeamSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { CaseStudySection } from "./components/CaseStudySection";
import { CTASection } from "./components/CTASection";
import { CoreServiceSection } from "./components/CoreServiceSection";
import { Footer } from "./components/Footer";
import { AuthButtons } from "./components/AuthButtons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      {/* Hero Section Wrapper */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Main Content */}
        <div className="flex-1 flex flex-col relative z-10">
          <div className="px-8 md:px-12 lg:px-20 py-6">
            <Navbar showAuthButtons={false} />
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-20 pb-6">
            <Hero />
            <TrustedBy />
          </div>
        </div>

        {/* Right Column - Visuals */}
        <div className="hidden lg:flex w-[40%] bg-[#e5e7eb] px-12 py-6 flex-col relative">
          <div className="flex justify-end mb-8">
            <AuthButtons />
          </div>
          <div className="flex-1 flex items-center justify-center">
             <ExpenseCard />
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Service Section */}
      <ServiceSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Insight Section */}
      <InsightSection />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Case Study Section */}
      <CaseStudySection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
