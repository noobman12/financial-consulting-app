import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactHero } from "../components/ContactHero";
import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";
import { ContactLocation } from "../components/ContactLocation";
import { ContactFAQ } from "../components/ContactFAQ";
import { CTASection } from "../components/CTASection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactLocation />
        <ContactFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
