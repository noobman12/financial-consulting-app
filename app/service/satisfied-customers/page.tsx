import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { SatisfiedCustomersHero } from "../../components/SatisfiedCustomersHero";
import { SatisfiedCustomersSection } from "../../components/SatisfiedCustomersSection";
import { SatisfiedCustomersTrust } from "../../components/SatisfiedCustomersTrust";

export default function SatisfiedCustomersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>
      <main>
        <SatisfiedCustomersHero />
        <SatisfiedCustomersSection />
        <SatisfiedCustomersTrust />
      </main>
      <Footer />
    </div>
  );
}
