"use client";

import React from "react";
import {
  MapPin,
  Layers,
  ClipboardList,
  Waves,
  AlertTriangle,
  FlaskConical,
  Sparkles,
  Boxes,
  WifiOff,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ModuleData {
  id: string;
  title: string;
  desc: string;
  tag: string;
}

const iconsMap: Record<string, React.ReactNode> = {
  "field-capture": <MapPin className="h-5 w-5 text-accent" />,
  "native-gis": <Layers className="h-5 w-5 text-primary" />,
  "protocols": <ClipboardList className="h-5 w-5 text-accent" />,
  "digital-twin": <Waves className="h-5 w-5 text-primary" />,
  "rules-engine": <AlertTriangle className="h-5 w-5 text-amber-600" />,
  "forensic-calc": <FlaskConical className="h-5 w-5 text-accent" />,
  "analyst-agent": <Sparkles className="h-5 w-5 text-primary" />,
  "knowledge-graph": <Boxes className="h-5 w-5 text-accent" />,
  "offline-multitenancy": <WifiOff className="h-5 w-5 text-primary" />,
};

export default function PlatformModules() {
  const { t } = useLanguage();
  const modules: ModuleData[] = t("platformModules.modules") || [];

  return (
    <section id="plataforma" className="pt-20 pb-20 bg-neutral-bg relative overflow-hidden text-neutral-text border-b border-neutral-border/50">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-sm">
            <span>{t("platformModules.tag")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            {t("platformModules.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("platformModules.titleGradient")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-text/85 max-w-2xl mx-auto font-light leading-relaxed">
            {t("platformModules.desc")}
          </p>
        </div>

        {/* 9 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((m, idx) => (
            <div
              key={m.id || idx}
              className="group bg-white hover:bg-neutral-bg/40 border border-neutral-border/60 hover:border-accent/40 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-primary-soft/60 flex items-center justify-center border border-primary/10 group-hover:scale-105 transition-transform duration-200">
                    {iconsMap[m.id] || <Sparkles className="h-5 w-5 text-accent" />}
                  </div>
                  <span className="text-[10px] uppercase font-technical font-bold tracking-wider text-primary/70 bg-primary-soft/40 px-2.5 py-1 rounded-full border border-primary/10">
                    {m.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-text/80 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-border/50 flex items-center justify-between text-xs font-technical text-primary/70">
                <span className="font-semibold">Módulo 0{idx + 1}</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                  DIM Data Bus <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
