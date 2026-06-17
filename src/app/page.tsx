import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SuccessStories";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Modules / Soluciones */}
        <Modules />

        {/* Section 3: How It Works / DIM Data Bus */}
        <HowItWorks />

        {/* Section 4: Case Studies / Success Stories */}
        <SuccessStories />

        {/* Section 5: Contact Form / Call to Action */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
