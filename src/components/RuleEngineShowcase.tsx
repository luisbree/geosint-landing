"use client";

import React from "react";
import { AlertTriangle, X, Info, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RuleEngineShowcase() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white border-b border-neutral-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Description and value proposition */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-amber-200 shadow-xs">
              <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
              <span>{t("ruleEngineModal.tag")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
              {t("ruleEngineModal.title")}
            </h2>

            <p className="text-base sm:text-lg text-neutral-text/80 font-light leading-relaxed">
              {t("ruleEngineModal.desc")}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-text/85 leading-normal">
                  Comparación cruzada instantánea contra límites legales (CAA, Decreto 831/93, Código de Aguas PBA).
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-text/85 leading-normal">
                  Detección de firmas geogénicas vs. fuentes antrópicas mediante evaluación hidroquímica multivariada.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-text/85 leading-normal">
                  Cálculo automático in-situ de índices agronómicos y forenses (RAS, CSR, Langelier, Ryznar).
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-primary text-white hover:bg-primary-hover px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>{t("hero.ctaTrial")}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): The Modal */}
          <div className="lg:col-span-7">
            <div className="w-full bg-white rounded-2xl border border-neutral-border shadow-xl overflow-hidden">
              
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-neutral-border/60 flex items-center justify-between bg-neutral-bg/30">
                <div className="flex items-center space-x-2.5">
                  <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-amber-600 tracking-tight">
                    {t("ruleEngineModal.alertTitle")}
                  </h3>
                </div>
                <button
                  className="p-1 rounded-md text-neutral-text/40 hover:text-neutral-text/80 hover:bg-neutral-border/40 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-6 text-neutral-text font-body">

                {/* Hipótesis Asociada */}
                <div className="space-y-1">
                  <span className="text-[11px] font-technical uppercase font-bold tracking-wider text-neutral-text/60 block">
                    {t("ruleEngineModal.hypothesisLabel")}
                  </span>
                  <p className="text-sm font-bold text-primary">
                    {t("ruleEngineModal.hypothesis")}
                  </p>
                </div>

                {/* Descripción Técnica */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-technical uppercase font-bold tracking-wider text-neutral-text/60 block">
                    {t("ruleEngineModal.techDescLabel")}
                  </span>
                  <div className="bg-neutral-bg/60 p-3.5 rounded-xl border border-neutral-border/70 text-xs sm:text-sm text-neutral-text/85 leading-relaxed font-light">
                    {t("ruleEngineModal.techDesc")}
                  </div>
                </div>

                {/* Acción Requerida: Cálculo de Índices */}
                <div className="space-y-3 pt-1 border-t border-neutral-border/50">
                  <span className="text-[11px] font-technical uppercase font-bold tracking-wider text-neutral-text/60 block">
                    {t("ruleEngineModal.actionLabel")}
                  </span>
                  <span className="text-xs font-bold text-primary block">
                    {t("ruleEngineModal.irrigationCalcTitle")}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Sodio (RAS) */}
                    <div className="bg-cyan-50/40 p-3.5 rounded-xl border border-cyan-200/60 flex flex-col justify-between space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-900 font-technical tracking-wide">
                          {t("ruleEngineModal.rasTitle")}
                        </span>
                        <Info className="h-3.5 w-3.5 text-cyan-600" />
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-extrabold text-cyan-950 font-heading">
                          {t("ruleEngineModal.rasValue")}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {t("ruleEngineModal.rasBadge")}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-text/80 leading-snug">
                        {t("ruleEngineModal.rasDesc")}
                      </p>
                    </div>

                    {/* Carbonato (CSR) */}
                    <div className="bg-cyan-50/40 p-3.5 rounded-xl border border-cyan-200/60 flex flex-col justify-between space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-900 font-technical tracking-wide">
                          {t("ruleEngineModal.csrTitle")}
                        </span>
                        <Info className="h-3.5 w-3.5 text-cyan-600" />
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-extrabold text-cyan-950 font-heading">
                          {t("ruleEngineModal.csrValue")}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {t("ruleEngineModal.csrBadge")}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-text/80 leading-snug">
                        {t("ruleEngineModal.csrDesc")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Potenciación Concomitante Detectada */}
                <div className="space-y-3 pt-1 border-t border-neutral-border/50">
                  <span className="text-[11px] font-technical uppercase font-bold tracking-wider text-neutral-text/60 block">
                    {t("ruleEngineModal.concomitantLabel")}
                  </span>

                  {/* Concomitante 1 */}
                  <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/70 space-y-1.5">
                    <span className="text-xs font-bold text-amber-900 block">
                      {t("ruleEngineModal.concomitant1Title")}
                    </span>
                    <p className="text-xs text-neutral-text/80 leading-relaxed font-light">
                      {t("ruleEngineModal.concomitant1Desc")}
                    </p>
                  </div>

                  {/* Concomitante 2 */}
                  <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/70 space-y-1.5">
                    <span className="text-xs font-bold text-amber-900 block">
                      {t("ruleEngineModal.concomitant2Title")}
                    </span>
                    <p className="text-xs text-neutral-text/80 leading-relaxed font-light">
                      {t("ruleEngineModal.concomitant2Desc")}
                    </p>
                  </div>
                </div>

                {/* Límites Normativos Excedidos */}
                <div className="space-y-2 pt-1 border-t border-neutral-border/50">
                  <span className="text-[11px] font-technical uppercase font-bold tracking-wider text-neutral-text/60 block">
                    {t("ruleEngineModal.limitsLabel")}
                  </span>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-neutral-border/40">
                      <span className="text-neutral-text/85 font-medium">
                        {t("ruleEngineModal.limit1")}
                      </span>
                      <span className="font-bold text-red-600 font-technical">
                        {t("ruleEngineModal.limit1Val")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-neutral-border/40">
                      <span className="text-neutral-text/85 font-medium">
                        {t("ruleEngineModal.limit2")}
                      </span>
                      <span className="font-bold text-red-600 font-technical">
                        {t("ruleEngineModal.limit2Val")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-neutral-text/85 font-medium">
                        {t("ruleEngineModal.limit3")}
                      </span>
                      <span className="font-bold text-red-600 font-technical">
                        {t("ruleEngineModal.limit3Val")}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
