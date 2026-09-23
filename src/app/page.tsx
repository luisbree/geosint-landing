import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import PlatformModules from "@/components/PlatformModules";
import RuleEngineShowcase from "@/components/RuleEngineShowcase";
import DigitalTwinSpotlight from "@/components/DigitalTwinSpotlight";
import AnalystAgentSpotlight from "@/components/AnalystAgentSpotlight";
import HowItWorks from "@/components/HowItWorks";
import TargetAudiences from "@/components/TargetAudiences";
import SuccessStories from "@/components/SuccessStories";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero con video y títulos consolidados */}
        <Hero />

        {/* Section 2: Cinta de normativas y marco legal */}
        <TrustStrip />

        {/* Section 3: Módulos de la Plataforma DIM Data Bus */}
        <PlatformModules />

        {/* Section 4: Motor de Reglas y Concomitancias en acción (Modal Captura 1) */}
        <RuleEngineShowcase />

        {/* Section 5: Digital Twin Hidráulico (Captura 2) */}
        <DigitalTwinSpotlight />

        {/* Section 6: Agente Pericial de Asistencia Analítica (Captura 3) */}
        <AnalystAgentSpotlight />

        {/* Section 7: La Trinidad de la Confianza Pericial (3 Pilares con sellos) */}
        <HowItWorks />

        {/* Section 8: Audiencias y Segmentos */}
        <TargetAudiences />

        {/* Section 9: Casos de Éxito e Impacto */}
        <SuccessStories />

        {/* Section 10: Planes y Precios sin límite de usuarios */}
        <Pricing />

        {/* Section 11: Free Trial 7 días y Formulario de Contacto */}
        <ContactForm />
      </main>

      {/* Footer con normativas, privacidad y términos */}
      <Footer />
    </>
  );
}
