"use client";

import React from "react";
import { Check, ArrowRight, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PricingPlan {
  name: string;
  badge?: string;
  price: string;
  period: string;
  users: string;
  features: string[];
}

export default function Pricing() {
  const { t } = useLanguage();
  const plans: PricingPlan[] = t("pricing.plans") || [];

  return (
    <section id="precios" className="py-20 bg-white border-b border-neutral-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-xs">
            <span>{t("pricing.tag")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            {t("pricing.title")}
          </h2>

          <p className="text-base sm:text-lg text-neutral-text/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t("pricing.subtitle")}
          </p>

          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold font-technical border border-emerald-200 mt-2">
            <Users className="h-4 w-4 text-emerald-600" />
            <span>{t("pricing.unlimitedBadge")}</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isPro = idx === 1;

            return (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? "bg-marine-dark text-white border-2 border-accent shadow-2xl scale-[1.02] lg:-translate-y-2"
                    : "bg-white text-neutral-text border border-neutral-border shadow-md hover:shadow-lg"
                }`}
              >
                {/* Popular badge for Pro */}
                {isPro && plan.badge && (
                  <div className="absolute -top-3.5 left-8 bg-accent text-marine-dark font-extrabold text-[11px] font-technical tracking-wider px-3.5 py-1 rounded-full uppercase shadow-md flex items-center space-x-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Price */}
                  <div>
                    <h3 className={`text-xl font-bold ${isPro ? "text-white" : "text-primary"}`}>
                      {plan.name}
                    </h3>
                    <div className="mt-4 flex items-baseline space-x-1">
                      <span className={`text-4xl sm:text-5xl font-extrabold font-heading ${isPro ? "text-white" : "text-primary"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${isPro ? "text-neutral-300" : "text-neutral-text/60"}`}>
                        {plan.period}
                      </span>
                    </div>

                    {/* Unlimited users badge */}
                    <div className="mt-3 flex items-center space-x-1.5 text-xs font-technical font-semibold">
                      <Users className={`h-3.5 w-3.5 ${isPro ? "text-accent" : "text-accent"}`} />
                      <span className={isPro ? "text-accent" : "text-primary font-bold"}>
                        {plan.users}
                      </span>
                    </div>
                  </div>

                  <div className={`h-px ${isPro ? "bg-white/10" : "bg-neutral-border"}`} />

                  {/* Features list */}
                  <ul className="space-y-3.5 text-sm font-light">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3">
                        <Check className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${isPro ? "text-accent" : "text-accent"}`} />
                        <span className={isPro ? "text-neutral-200" : "text-neutral-text/85"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center space-x-2 transition-all duration-200 ${
                      isPro
                        ? "bg-accent hover:bg-accent-hover text-marine-dark shadow-md hover:shadow-lg"
                        : "bg-primary text-white hover:bg-primary-hover shadow-xs hover:shadow"
                    }`}
                  >
                    <span>{idx === 2 ? t("pricing.ctaSales") : t("pricing.ctaTrial")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
