import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { TeamHero } from "../../components/TeamHero";
import { TeamSection } from "../../components/TeamSection";
import { TeamMindsCarousel } from "../../components/TeamMindsCarousel";
import { TeamValues } from "../../components/TeamValues";
import { TeamActivities } from "../../components/TeamActivities";
import { TeamCTA } from "../../components//TeamCTA";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>
      <main>
        <TeamHero />
        <TeamSection />
        <TeamMindsCarousel />
        <TeamValues />
        <TeamActivities />
        <TeamCTA />
      </main>
      <Footer />
    </div>
  );
}
