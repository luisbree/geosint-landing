"use client";

import React from "react";
import { Sparkles, Bot, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AnalystAgentSpotlight() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white border-b border-neutral-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Text Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>{t("analystAgent.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              {t("analystAgent.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("analystAgent.titleGradient")}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-text/85 font-light leading-relaxed">
              {t("analystAgent.desc")}
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-neutral-bg border border-neutral-border/70 space-y-2">
                <span className="text-xs font-bold font-technical text-primary uppercase tracking-wider block">
                  Genkit + Gemini en DIM Data Bus
                </span>
                <p className="text-xs text-neutral-text/80 leading-relaxed font-light">
                  El agente analiza las series temporales, las matrices de suelo y agua, y los límites normativos cruzados para sugerir planes de muestreo de precisión sin sesgo humano.
                </p>
              </div>
            </div>
          </div>

          {/* Technical UI Card Right (7 cols) - Recreating Capture 3 with vector Tailwind components */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-marine-dark text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden font-body">
              
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-white/90">
                    {t("analystAgent.cardHeader")}
                  </span>
                </div>
                <span className="text-[10px] font-technical uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                  Google Genkit
                </span>
              </div>

              {/* Hypothesis Block */}
              <div className="space-y-3 p-4 sm:p-5 rounded-xl bg-marine-medium/60 border border-white/10 mb-6">
                <h4 className="text-sm sm:text-base font-bold text-violet-300 leading-snug">
                  {t("analystAgent.hypothesisTitle")}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed font-light">
                  {t("analystAgent.hypothesisDesc")}
                </p>
              </div>

              {/* Recommended Measures Title */}
              <div className="flex items-center space-x-2 mb-3 text-amber-400 font-technical text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse" />
                <span>{t("analystAgent.recommendedTitle")}</span>
              </div>

              {/* Measures List */}
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start space-x-3">
                  <span className="text-neutral-200 leading-relaxed font-light">
                    {t("analystAgent.measure1")}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start space-x-3">
                  <span className="text-neutral-200 leading-relaxed font-light">
                    {t("analystAgent.measure2")}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start space-x-3">
                  <span className="text-neutral-200 leading-relaxed font-light">
                    {t("analystAgent.measure3")}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start space-x-3">
                  <span className="text-neutral-200 leading-relaxed font-light">
                    {t("analystAgent.measure4")}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
