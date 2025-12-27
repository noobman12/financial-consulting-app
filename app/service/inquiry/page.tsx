import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { InquiryHero } from "../../components/InquiryHero";
import { InquiryForm } from "../../components/InquiryForm";
import { AppointmentScheduler } from "../../components/AppointmentScheduler";
import { PricingSection } from "../../components/PricingSection";
import { ContactLocation } from "../../components/ContactLocation";
import { InquiryContact } from "../../components/InquiryContact";
import { ContactFAQ } from "../../components/ContactFAQ";
import { CTASection } from "../../components/CTASection";

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>
      <main>
        <InquiryHero />
        <InquiryForm />
        <AppointmentScheduler />
        <PricingSection />
        <ContactLocation />
        <InquiryContact />
        <ContactFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
