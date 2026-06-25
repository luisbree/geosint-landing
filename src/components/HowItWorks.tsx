"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  iconPath: string;
  technicalDetails: React.ReactNode;
  scientificValue: React.ReactNode;
  marketingValue: React.ReactNode;
}

export default function HowItWorks() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ddb.geosint.com.ar";
  const { t } = useLanguage();

  // Helper to parse formatting placeholder e.g. {activity_logs} into styled HTML code tag
  const parseCodes = (text: string) => {
    if (!text) return "";
    const parts = text.split(/(\{.*?\})/g);
    return parts.map((part, index) => {
      if (part.startsWith("{") && part.endsWith("}")) {
        const codeText = part.slice(1, -1);
        return (
          <code key={index} className="font-mono text-[11px] font-semibold px-1 py-0.5 bg-primary-soft text-primary rounded border border-primary/10">
            {codeText}
          </code>
        );
      }
      return part;
    });
  };

  const steps: Pillar[] = [
    {
      id: 0,
      title: t("howItWorks.pillars.0.title"),
      subtitle: t("howItWorks.pillars.0.subtitle"),
      iconPath: "/sello_cadena_2.png",
      technicalDetails: parseCodes(t("howItWorks.pillars.0.technicalDetails")),
      scientificValue: t("howItWorks.pillars.0.scientificValue"),
      marketingValue: t("howItWorks.pillars.0.marketingValue")
    },
    {
      id: 1,
      title: t("howItWorks.pillars.1.title"),
      subtitle: t("howItWorks.pillars.1.subtitle"),
      iconPath: "/sello_inmutabilidad_2.png",
      technicalDetails: parseCodes(t("howItWorks.pillars.1.technicalDetails")),
      scientificValue: t("howItWorks.pillars.1.scientificValue"),
      marketingValue: t("howItWorks.pillars.1.marketingValue")
    },
    {
      id: 2,
      title: t("howItWorks.pillars.2.title"),
      subtitle: t("howItWorks.pillars.2.subtitle"),
      iconPath: "/sello_geolocalizacion_2.png",
      technicalDetails: parseCodes(t("howItWorks.pillars.2.technicalDetails")),
      scientificValue: t("howItWorks.pillars.2.scientificValue"),
      marketingValue: t("howItWorks.pillars.2.marketingValue")
    }
  ];

  return (
    <section id="how-it-works" className="pt-12 pb-24 bg-radial from-accent-soft/10 via-neutral-bg to-neutral-bg border-y border-primary/5 relative overflow-hidden text-neutral-text">
      {/* Background grids and abstract decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-sm">
            <span>{t("howItWorks.tag")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            {t("howItWorks.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("howItWorks.titleGradient")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-black max-w-2xl mx-auto font-light leading-relaxed">
            {t("howItWorks.desc")}
          </p>
        </div>

        {/* Layout Grid - 3 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="group bg-white hover:bg-neutral-bg/30 border border-neutral-border/40 hover:border-accent/20 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Icon Container with PNG image */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary p-3 border border-primary/20 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                    <img src={step.iconPath} alt={step.title} className="w-full h-full object-contain" />
                  </div>
                  {/* Step Badge */}
                  <span className="text-[10px] uppercase font-technical font-bold tracking-widest text-accent bg-accent-soft/50 px-2.5 py-1 rounded-full border border-accent-soft/10">
                    {t("howItWorks.pilarBadge")} 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-[11px] uppercase font-technical font-bold text-accent tracking-wider">
                    {step.subtitle}
                  </p>
                  <div className="text-sm text-black leading-relaxed font-light pt-2">
                    {step.technicalDetails}
                  </div>
                </div>

                {/* Subsections: Rigor Científico & Garantía Comercial */}
                <div className="mt-5 pt-5 border-t border-neutral-border/50 space-y-3">
                  <div className="bg-primary-soft/30 p-3.5 rounded-xl border border-primary/10">
                    <span className="font-bold text-primary block mb-1 font-technical uppercase tracking-wider text-[10px]">
                      {t("howItWorks.rigorCientifico")}
                    </span>
                    <p className="text-[11px] text-black leading-relaxed font-light">
                      {step.scientificValue}
                    </p>
                  </div>

                  <div className="bg-accent-soft/30 p-3.5 rounded-xl border border-accent/10">
                    <span className="font-bold text-accent block mb-1 font-technical uppercase tracking-wider text-[10px]">
                      {t("howItWorks.garantiaComercial")}
                    </span>
                    <p className="text-[11px] text-black leading-relaxed font-light">
                      {step.marketingValue}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Buttons at the bottom */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center bg-white text-primary border border-primary/20 hover:bg-primary/5 px-8 py-4 rounded-xl font-bold transition-all duration-200 w-full sm:w-auto shadow-sm hover:shadow-md cursor-pointer"
          >
            {t("howItWorks.ctaTrial")}
          </a>
          <a
            href={`${appUrl}/ddb`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 border border-accent/10 cursor-pointer w-full sm:w-auto"
          >
            <span>{t("howItWorks.ctaEnter")}</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
