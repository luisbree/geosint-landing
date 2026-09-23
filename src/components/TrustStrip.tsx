"use client";

import React from "react";
import { ShieldCheck, Scale, FileCheck2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustStrip() {
  const { t } = useLanguage();
  const laws: string[] = t("trustStrip.laws") || [];

  return (
    <section className="w-full bg-white border-y border-neutral-border py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm font-technical">
          <div className="flex items-center space-x-2 text-primary font-bold tracking-wide mr-2">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>{t("trustStrip.badge")}</span>
          </div>

          <div className="h-4 w-px bg-neutral-border hidden sm:block" />

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-neutral-text/75">
            {laws.map((law, index) => (
              <span
                key={index}
                className="inline-flex items-center space-x-1.5 hover:text-primary transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                <span>{law}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
