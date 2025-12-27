import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CaseStudiesHero } from "../../components/CaseStudiesHero";
import { CaseStudiesContent } from "../../components/CaseStudiesContent";
import { CaseStudiesTrust } from "../../components/CaseStudiesTrust";
import { AuthButtons } from "../../components/AuthButtons";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 md:px-12 lg:px-20 py-6 flex justify-between items-center">
        <Navbar />
        <div className="hidden lg:block">
           <AuthButtons />
        </div>
      </div>
      <main>
        <CaseStudiesHero />
        <CaseStudiesContent />
        <CaseStudiesTrust />
      </main>
      <Footer />
    </div>
  );
}
