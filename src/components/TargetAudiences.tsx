"use client";

import React from "react";
import { Briefcase, Building2, Landmark, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Audience {
  badge: string;
  title: string;
  desc: string;
}

const audienceIcons = [
  <Briefcase key="1" className="h-6 w-6 text-primary" />,
  <Building2 key="2" className="h-6 w-6 text-accent" />,
  <Landmark key="3" className="h-6 w-6 text-primary" />,
];

export default function TargetAudiences() {
  const { t } = useLanguage();
  const audiences: Audience[] = t("targetAudiences.audiences") || [];

  return (
    <section className="py-20 bg-neutral-bg border-b border-neutral-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-xs">
            <span>{t("targetAudiences.tag")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            {t("targetAudiences.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("targetAudiences.titleGradient")}
            </span>
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-border/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary-soft/60 flex items-center justify-center border border-primary/10">
                    {audienceIcons[idx] || <Briefcase className="h-6 w-6 text-primary" />}
                  </div>
                  <span className="text-[10px] font-technical uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-primary-soft/50 text-primary border border-primary/10">
                    {aud.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {aud.title}
                </h3>

                <p className="text-sm text-neutral-text/80 leading-relaxed font-light">
                  {aud.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-border/50 text-xs font-technical text-accent font-semibold flex items-center space-x-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Impacto comprobable</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
