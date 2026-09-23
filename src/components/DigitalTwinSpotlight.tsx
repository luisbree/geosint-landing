"use client";

import React from "react";
import { Waves, CheckCircle2, Network, Sliders, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DigitalTwinSpotlight() {
  const { t } = useLanguage();

  return (
    <section id="digital-twin" className="py-20 bg-neutral-bg border-b border-neutral-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-xs">
              <Waves className="h-3.5 w-3.5 text-accent" />
              <span>{t("digitalTwin.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              {t("digitalTwin.title")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("digitalTwin.titleGradient")}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-text/85 font-light leading-relaxed">
              {t("digitalTwin.desc")}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-text/85 leading-normal">
                  {t("digitalTwin.item1")}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-text/85 leading-normal">
                  {t("digitalTwin.item2")}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-text/85 leading-normal">
                  {t("digitalTwin.item3")}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-primary text-white hover:bg-primary-hover px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>{t("hero.ctaTrial")}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Image & Interactive Graphic Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-border/80 shadow-2xl bg-marine-dark group">
              <img
                src="/digital_twin_map.png"
                alt="Digital Twin Hidráulico - Mapa de Luján y Grafos Topológicos"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
