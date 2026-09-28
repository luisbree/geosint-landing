"use client";

import React, { useState } from "react";
import {
  Check,
  ArrowRight,
  Users,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type TableTab = "all" | "summary" | "features" | "quotas";

interface FeatureCell {
  type: "yes" | "no" | "text";
  main?: string;
  note?: string;
  details?: string[];
  hasCheck?: boolean;
}

interface MasterFeature {
  title: string;
  subtitle?: string;
  freelancer: FeatureCell;
  starter: FeatureCell;
  pro: FeatureCell;
  enterprise: FeatureCell;
}

export default function Pricing() {
  const { language } = useLanguage();
  const [annualBilling, setAnnualBilling] = useState(false);
  const [activeTab, setActiveTab] = useState<TableTab>("all");

  const isEs = language !== "en";

  // 4 Tiers definition
  const tiers = [
    {
      id: "freelancer",
      name: "FREELANCER",
      badge: isEs ? "Pay-as-you-go" : "Pay-as-you-go",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description: isEs
        ? "Geólogos, inspectores independientes y consultores freelance."
        : "Geologists, independent field inspectors, and freelance consultants.",
      priceMonthly: 50,
      priceLabel: isEs ? "USD 50" : "USD 50",
      period: isEs ? "/ campaña" : "/ campaign",
      subPeriod: isEs ? "60 días de vigencia (ampliable)" : "60 days validity (extendable)",
      isAnnualApplicable: false,
      annualNote: isEs ? "Venta spot / unitaria" : "Spot / per-campaign purchase",
      highlight: false,
      ctaText: isEs ? "Comenzar Campaña" : "Start Campaign",
      keySpecs: [
        isEs ? "1 Campaña única (60 días corridos)" : "1 Single campaign (60 calendar days)",
        isEs ? "Usuarios ILIMITADOS en esa campaña" : "UNLIMITED users in that campaign",
        isEs ? "2 GB Storage (tope cerrado)" : "2 GB Storage (fixed limit)",
        isEs ? "5 GB Tráfico mensual incluido" : "5 GB Traffic included",
        isEs ? "5 Dictámenes IA (Gemini 2.0 Flash)" : "5 AI Opinions (Gemini 2.0 Flash)",
        isEs ? "6 protocolos a elección libre" : "6 protocols of your choice",
        isEs ? "Sin excedentes (cupo cerrado)" : "No overages (closed quota)"
      ]
    },
    {
      id: "starter",
      name: "STARTER",
      badge: isEs ? "Micro-Equipos" : "Small Teams",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description: isEs
        ? "Consultores individuales activos y micro-equipos de campo."
        : "Active solo consultants and compact field teams.",
      priceMonthly: 220,
      priceAnnualPerMonth: 180,
      priceLabel: annualBilling ? "USD 180" : "USD 220",
      period: isEs ? "/ mes" : "/ mo",
      subPeriod: annualBilling
        ? isEs
          ? "Facturado anual (USD 2.160/año)"
          : "Billed annually (USD 2,160/yr)"
        : isEs
        ? "Facturación mensual recurrente"
        : "Monthly recurring billing",
      isAnnualApplicable: true,
      highlight: false,
      ctaText: isEs ? "Suscribirse a Starter" : "Subscribe to Starter",
      keySpecs: [
        isEs ? "Proyectos ILIMITADOS" : "UNLIMITED Projects",
        isEs ? "Usuarios ILIMITADOS" : "UNLIMITED Users",
        isEs ? "5 GB Storage incluido" : "5 GB Storage included",
        isEs ? "10 GB Tráfico / mes" : "10 GB Traffic / mo",
        isEs ? "5 Dictámenes IA / mes (Gemini Flash)" : "5 AI Opinions / mo (Gemini Flash)",
        isEs ? "37 Protocolos Oficiales Completos" : "37 Complete Official Protocols",
        isEs ? "Régimen de excedentes a mes vencido" : "Overage billing at month end"
      ]
    },
    {
      id: "pro",
      name: "PRO",
      badge: isEs ? "MÁS ELEGIDO" : "MOST POPULAR",
      badgeColor: "bg-accent text-marine-dark border-accent font-extrabold shadow-lg shadow-accent/20",
      description: isEs
        ? "Consultoras ambientales consolidadas y laboratorios de ensayo."
        : "Consolidated environmental consultancies and testing laboratories.",
      priceMonthly: 550,
      priceAnnualPerMonth: 450,
      priceLabel: annualBilling ? "USD 450" : "USD 550",
      period: isEs ? "/ mes" : "/ mo",
      subPeriod: annualBilling
        ? isEs
          ? "Facturado anual (USD 5.400/año)"
          : "Billed annually (USD 5,400/yr)"
        : isEs
        ? "Facturación mensual recurrente"
        : "Monthly recurring billing",
      isAnnualApplicable: true,
      highlight: true,
      ctaText: isEs ? "Solicitar Trial Pro" : "Request Pro Trial",
      keySpecs: [
        isEs ? "Proyectos y Usuarios ILIMITADOS" : "UNLIMITED Projects & Users",
        isEs ? "37 Protocolos Completos de monitoreo" : "All 37 Full monitoring protocols",
        isEs ? "Gemelo Digital Hidráulico y Topológico" : "Hydraulic & Topological Digital Twin",
        isEs ? "Grafo de Conocimiento 3D (WebGL)" : "3D Knowledge Graph (WebGL)",
        isEs ? "GPS Heartbeat en vivo (60s)" : "Live GPS Heartbeat (60s)",
        isEs ? "50 Dictámenes IA / mes (Flash/Pro)" : "50 AI Opinions / mo (Flash/Pro)",
        isEs ? "20 GB Storage + 40 GB Tráfico / mes" : "20 GB Storage + 40 GB Traffic / mo",
        isEs ? "Soporte prioritario email/chat (12 hs)" : "Priority email/chat support (12 hs)"
      ]
    },
    {
      id: "enterprise",
      name: "ENTERPRISE",
      badge: isEs ? "Corporativo / Estado" : "Corporate / Gov",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      description: isEs
        ? "Autoridades de Cuenca (ADA, ACUMAR), Ministerios, Petroleras y Mineras."
        : "Watershed Authorities, Ministries, Oil & Gas, and Mining Corporations.",
      priceMonthly: 1200,
      priceAnnualPerMonth: 1000,
      priceLabel: annualBilling ? "USD 1.000" : "USD 1.200",
      period: isEs ? "/ mes" : "/ mo",
      subPeriod: annualBilling
        ? isEs
          ? "Facturado anual (USD 12.000/año)"
          : "Billed annually (USD 12,000/yr)"
        : isEs
        ? "Abono mensual o contrato anual"
        : "Monthly plan or annual contract",
      isAnnualApplicable: true,
      highlight: false,
      ctaText: isEs ? "Contactar a Ventas" : "Contact Sales",
      keySpecs: [
        isEs ? "37 Protocolos + Planillas Custom" : "37 Protocols + Custom Checklists",
        isEs ? "Grafo 3D (Heatmap + Aislamiento)" : "3D Graph (Heatmap + Route isolation)",
        isEs ? "300 Dictámenes IA / mes (Gemini Pro alta res.)" : "300 AI Opinions / mo (Gemini Pro high res.)",
        isEs ? "Dossier oficial para juzgados sin marca" : "Official court dossier without watermark",
        isEs ? "80 GB Storage + 150 GB Tráfico / mes" : "80 GB Storage + 150 GB Traffic / mo",
        isEs ? "Soporte dedicado + SLA 24/7 garantizado" : "Dedicated Support + 24/7 SLA guaranteed",
        isEs ? "Multi-tenancy con cifrado AES-256" : "Multi-tenancy with AES-256 encryption"
      ]
    }
  ];

  // Table 1: Resumen de Tiers y Precios
  const summaryRows = [
    {
      tier: "FREELANCER",
      modality: isEs ? "Por Campaña Única (Pay-as-you-go)" : "Single Campaign (Pay-as-you-go)",
      basePrice: isEs ? "USD 50 / campaña" : "USD 50 / campaign",
      annualPrice: isEs ? "No aplica (Venta spot / unitaria)" : "N/A (Spot purchase)",
      userLimit: isEs ? "Ilimitados (en esa campaña)" : "Unlimited (within that campaign)",
      projectLimit: isEs
        ? "1 Campaña (60 días de vigencia, ampliable sin costo para espera de laboratorio)"
        : "1 Campaign (60 days validity, extendable at no cost for lab results)",
      overages: isEs ? "Sin excedentes (cupo cerrado)" : "No overages (closed quota)"
    },
    {
      tier: "STARTER",
      modality: isEs ? "Suscripción Mensual" : "Monthly Subscription",
      basePrice: isEs ? "USD 220 / mes" : "USD 220 / mo",
      annualPrice: isEs ? "USD 180 / mes (USD 2.160/año)" : "USD 180 / mo (USD 2,160/yr)",
      userLimit: isEs ? "Ilimitados" : "Unlimited",
      projectLimit: isEs ? "Ilimitados" : "Unlimited",
      overages: isEs ? "Sí (facturación a mes vencido)" : "Yes (billed at month end)"
    },
    {
      tier: "PRO",
      modality: isEs ? "Suscripción Mensual" : "Monthly Subscription",
      basePrice: isEs ? "USD 550 / mes" : "USD 550 / mo",
      annualPrice: isEs ? "USD 450 / mes (USD 5.400/año)" : "USD 450 / mo (USD 5,400/yr)",
      userLimit: isEs ? "Ilimitados" : "Unlimited",
      projectLimit: isEs ? "Ilimitados" : "Unlimited",
      overages: isEs ? "Sí (facturación a mes vencido)" : "Yes (billed at month end)",
      isPro: true
    },
    {
      tier: "ENTERPRISE",
      modality: isEs ? "Suscripción Mensual / Anual" : "Monthly / Annual Subscription",
      basePrice: isEs ? "USD 1.200 / mes" : "USD 1,200 / mo",
      annualPrice: isEs ? "USD 1.000 / mes (USD 12.000/año)" : "USD 1,000 / mo (USD 12,000/yr)",
      userLimit: isEs ? "Ilimitados" : "Unlimited",
      projectLimit: isEs ? "Ilimitados" : "Unlimited",
      overages: isEs ? "Sí (facturación a mes vencido)" : "Yes (billed at month end)"
    }
  ];

  // Table 2: Tabla Maestra de Prestaciones y Herramientas por Segmento
  const masterFeatures: MasterFeature[] = [
    {
      title: isEs ? "Cadena de Custodia Legal" : "Legal Chain of Custody",
      subtitle: isEs ? "(Firma SHA-256 en cliente, Audit Trail, EXIF)" : "(Client-side SHA-256 signature, Audit Trail, EXIF)",
      freelancer: { type: "yes" },
      starter: { type: "yes" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "GPS Heartbeat en Vivo" : "Live GPS Heartbeat",
      subtitle: isEs ? "(Telemetría de cuadrilla cada 60s en mapa)" : "(Field crew telemetry every 60s on map)",
      freelancer: { type: "no" },
      starter: { type: "no" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Operación Offline-First (PWA)" : "Offline-First Operation (PWA)",
      subtitle: isEs ? "(IndexedDB, compresión de fotos en barro)" : "(IndexedDB, photo compression in harsh field)",
      freelancer: { type: "yes" },
      starter: { type: "yes" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Visor Cartográfico de Campo y Contexto Espacial" : "Field Cartographic Viewer & Spatial Context",
      subtitle: isEs ? "(Cuencas oficiales PBA, spiderfy, exportable a QGIS)" : "(Official PBA watersheds, spiderfy, QGIS export)",
      freelancer: { type: "yes" },
      starter: { type: "yes" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Exportación Universal" : "Universal Data Export",
      subtitle: isEs ? "(GeoJSON, CSV normalizado, shapefile para QGIS/ArcGIS)" : "(GeoJSON, normalized CSV, shapefile for QGIS/ArcGIS)",
      freelancer: { type: "yes" },
      starter: { type: "yes" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Catálogo de Protocolos de Monitoreo" : "Monitoring Protocol Catalog",
      subtitle: isEs ? "(37 protocolos oficiales estructurados)" : "(37 structured official protocols)",
      freelancer: {
        type: "text",
        main: isEs
          ? "6 protocolos a elección libre según especialidad (geología, biota, calidad de aire, suelos, etc.)"
          : "6 protocols of your choice by specialty (geology, biota, air quality, soils, etc.)"
      },
      starter: {
        type: "text",
        main: isEs ? "37 Protocolos Completos" : "37 Complete Protocols",
        hasCheck: true
      },
      pro: {
        type: "text",
        main: isEs ? "37 Protocolos Completos" : "37 Complete Protocols",
        note: isEs ? "(Ensayos de bombeo, Lugeon, Edafología, Biota, eDNA, Radón, Residuos)" : "(Pumping tests, Lugeon, Soil profiles, Biota, eDNA, Radon, Waste)",
        hasCheck: true
      },
      enterprise: {
        type: "text",
        main: isEs ? "37 Protocolos Completos" : "37 Complete Protocols",
        note: isEs ? "(+ Posibilidad de configurar planillas custom)" : "(+ Ability to configure custom checklists)",
        hasCheck: true
      }
    },
    {
      title: isEs ? "Motor de Reglas y Normativas" : "Rules Engine & Legal Frameworks",
      subtitle: isEs ? "(Límites legales: Ley 24.051, ADA, ACUMAR)" : "(Legal limits: Law 24.051, ADA, ACUMAR)",
      freelancer: {
        type: "text",
        main: isEs ? "Alertas básicas" : "Basic alerts",
        note: isEs ? "(Semáforo verde/rojo)" : "(Green/red traffic light)"
      },
      starter: {
        type: "text",
        main: isEs ? "Alertas básicas" : "Basic alerts",
        note: isEs ? "(Semáforo verde/rojo)" : "(Green/red traffic light)"
      },
      pro: {
        type: "text",
        main: isEs ? "Completo multi-normativa" : "Full multi-normative",
        note: isEs ? "(Semáforo 4 niveles + Alertas cruzadas)" : "(4-level traffic light + Cross alerts)"
      },
      enterprise: {
        type: "text",
        main: isEs ? "Completo multi-normativa" : "Full multi-normative",
        note: isEs ? "(Personalización de directivas canónicas)" : "(Customization of canonical directives)"
      }
    },
    {
      title: isEs ? "Biblioteca de Cálculos Científicos" : "Scientific Calculation Library",
      subtitle: isEs ? "(LSI Langelier, RSI Ryznar, Balance Iónico, Ratios HAP/DDT)" : "(LSI Langelier, RSI Ryznar, Ionic Balance, PAH/DDT Ratios)",
      freelancer: { type: "yes" },
      starter: { type: "yes" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Módulo Climático y Balance Hídrico" : "Climate Module & Water Balance",
      subtitle: isEs ? "(Malla Fishnet PBA, 30 días lluvias, PET, % reserva)" : "(PBA Fishnet grid, 30-day rain series, PET, % reserve)",
      freelancer: { type: "yes" },
      starter: { type: "yes" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Gemelo Digital Hidráulico y Topológico" : "Hydraulic & Topological Digital Twin",
      subtitle: isEs ? "(Escurrimiento sobre rutas/FFCC, DEM COG Zmax → Zmin)" : "(Runoff over roads/railways, DEM COG Zmax → Zmin)",
      freelancer: { type: "no" },
      starter: { type: "no" },
      pro: { type: "yes" },
      enterprise: { type: "yes" }
    },
    {
      title: isEs ? "Grafo de Conocimiento 3D (WebGL)" : "3D Knowledge Graph (WebGL)",
      subtitle: isEs ? "(9 zonas de compuestos químicos y sinergias)" : "(9 chemical compound zones and synergistic interactions)",
      freelancer: { type: "no" },
      starter: { type: "no" },
      pro: {
        type: "text",
        main: isEs ? "Sí" : "Yes",
        note: isEs ? "(Consulta y visualización)" : "(Query & 3D visualization)"
      },
      enterprise: {
        type: "text",
        main: isEs ? "Sí" : "Yes",
        note: isEs ? "(Modo Heatmap + Aislamiento de rutas)" : "(Heatmap mode + Route isolation)"
      }
    },
    {
      title: isEs ? "Copiloto Forense IA (Google Gemini)" : "AI Forensic Copilot (Google Gemini)",
      subtitle: isEs ? "(Inferencia pericial, evidencia negativa, tono formal/informal)" : "(Forensic inference, negative evidence, formal tone)",
      freelancer: {
        type: "text",
        main: isEs ? "5 Dictámenes / campaña" : "5 Opinions / campaign",
        note: "(Gemini 2.0 Flash)"
      },
      starter: {
        type: "text",
        main: isEs ? "5 Dictámenes / mes" : "5 Opinions / mo",
        note: "(Gemini 2.0 Flash)"
      },
      pro: {
        type: "text",
        main: isEs ? "50 Dictámenes / mes" : "50 Opinions / mo",
        note: "(Gemini Flash / Pro)"
      },
      enterprise: {
        type: "text",
        main: isEs ? "300 Dictámenes / mes" : "300 Opinions / mo",
        note: isEs ? "(FUP · Gemini Pro alta resolución)" : "(FUP · Gemini Pro high res)"
      }
    },
    {
      title: isEs ? "Longitud Máxima Dictamen IA" : "Max AI Opinion Length",
      subtitle: isEs ? "(Profundidad y fundamentación analítica)" : "(Analytical depth and legal grounding)",
      freelancer: { type: "text", main: isEs ? "Hasta 400 palabras" : "Up to 400 words" },
      starter: { type: "text", main: isEs ? "Hasta 400 palabras" : "Up to 400 words" },
      pro: { type: "text", main: isEs ? "Hasta 750 palabras" : "Up to 750 words" },
      enterprise: { type: "text", main: isEs ? "Hasta 1.000 palabras" : "Up to 1,000 words" }
    },
    {
      title: isEs ? "Dossier Pericial Criptográfico (PDF)" : "Cryptographic Forensic Dossier (PDF)",
      subtitle: isEs ? "(Auditoría completa del payload, clima y OSM)" : "(Full audit of payload, weather, and OSM context)",
      freelancer: {
        type: "text",
        main: isEs ? "Reporte estándar de campaña" : "Standard campaign report"
      },
      starter: {
        type: "text",
        main: isEs ? "Reporte estándar de campaña" : "Standard campaign report"
      },
      pro: {
        type: "text",
        main: isEs ? "Dossier pericial con marca de agua digital" : "Forensic dossier with digital watermark"
      },
      enterprise: {
        type: "text",
        main: isEs ? "Dossier oficial para tribunales / sin marca" : "Official court dossier / without watermark"
      }
    },
    {
      title: isEs ? "Soporte Técnico" : "Technical Support",
      subtitle: isEs ? "(Canal y tiempo de respuesta)" : "(Channel and response SLA)",
      freelancer: {
        type: "text",
        main: isEs ? "Mesa de ayuda por email" : "Email help desk"
      },
      starter: {
        type: "text",
        main: isEs ? "Mesa de ayuda por email (48 hs)" : "Email help desk (48 hrs)"
      },
      pro: {
        type: "text",
        main: isEs ? "Prioritario email/chat (12 hs)" : "Priority email/chat (12 hrs)"
      },
      enterprise: {
        type: "text",
        main: isEs ? "Dedicado + SLA 24/7" : "Dedicated + 24/7 SLA",
        note: isEs ? "(+ Onboarding corporativo)" : "(+ Corporate onboarding)"
      }
    }
  ];

  // Table 3: Matriz de Cuotas (FUP) y Régimen de Excedentes
  const quotaRows = [
    {
      resource: isEs ? "Storage (Fotos/Datos)" : "Storage (Photos/Data)",
      resourceDetail: isEs ? "Almacenamiento permanente cifrado" : "Encrypted permanent cloud storage",
      freelancer: isEs ? "2 GB (Tope fijo)" : "2 GB (Fixed cap)",
      starter: isEs ? "5 GB" : "5 GB",
      pro: isEs ? "20 GB" : "20 GB",
      enterprise: isEs ? "80 GB" : "80 GB",
      overageRate: isEs ? "USD 0,15 / GB extra / mes" : "USD 0.15 / extra GB / mo",
      overageNote: isEs ? "(No aplica a Freelancer)" : "(Does not apply to Freelancer)"
    },
    {
      resource: isEs ? "Tráfico (Descargas)" : "Traffic (Downloads/Egress)",
      resourceDetail: isEs ? "Transferencia de datos, reportes y mapas" : "Data transfer, PDF dossiers & map queries",
      freelancer: isEs ? "5 GB (Tope fijo)" : "5 GB (Fixed cap)",
      starter: isEs ? "10 GB / mes" : "10 GB / mo",
      pro: isEs ? "40 GB / mes" : "40 GB / mo",
      enterprise: isEs ? "150 GB / mes" : "150 GB / mo",
      overageRate: isEs ? "USD 0,25 / GB extra / mes" : "USD 0.25 / extra GB / mo",
      overageNote: isEs ? "(No aplica a Freelancer)" : "(Does not apply to Freelancer)"
    },
    {
      resource: isEs ? "Dictámenes IA" : "AI Forensic Opinions",
      resourceDetail: isEs ? "Consultas periciales a Google Gemini" : "Forensic queries with Google Gemini",
      freelancer: isEs ? "5 (Tope fijo)" : "5 (Fixed cap)",
      starter: isEs ? "5 / mes" : "5 / mo",
      pro: isEs ? "50 / mes" : "50 / mo",
      enterprise: isEs ? "300 / mes" : "300 / mo",
      overageRate: isEs ? "Pack 25 Dictámenes: USD 20" : "25 Opinions Pack: USD 20",
      overageNote: isEs ? "(Freelancer puede recargar packs)" : "(Freelancer can recharge packs)"
    }
  ];

  return (
    <section
      id="planes"
      className="py-24 bg-transparent text-neutral-text border-b border-neutral-border/60 relative overflow-hidden font-body"
    >
      {/* Anchor alias so #precios also scrolls here */}
      <div id="precios" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient glow effects */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary/20 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>{isEs ? "Planes & Suscripciones · DIM Data Bus" : "Plans & Subscriptions · DIM Data Bus"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            {isEs
              ? "Transparencia total para cada escala de operación ambiental"
              : "Total transparency for every environmental operation scale"}
          </h2>

          <p className="text-base sm:text-lg text-neutral-text/80 max-w-2xl mx-auto font-light leading-relaxed">
            {isEs
              ? "Desde campañas individuales de campo hasta despliegues corporativos e interministeriales. Diseñado con rigor pericial y sin costos ocultos."
              : "From single field campaigns to corporate and inter-ministerial deployments. Engineered for forensic rigor with zero hidden fees."}
          </p>

          {/* Key Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold font-technical border border-emerald-200 shadow-xs">
              <Users className="h-3.5 w-3.5 text-emerald-600" />
              <span>{isEs ? "Usuarios ILIMITADOS en todos los planes" : "UNLIMITED Users in all tiers"}</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-800 px-3.5 py-1.5 rounded-full text-xs font-bold font-technical border border-cyan-200 shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />
              <span>{isEs ? "Firma SHA-256 en cliente incluida" : "Client-side SHA-256 included"}</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-medium font-technical border border-slate-200 shadow-xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-slate-500" />
              <span>{isEs ? "Excedentes transparentes a mes vencido" : "Clear overage rates at month end"}</span>
            </div>
          </div>

          {/* Annual Billing Toggle */}
          <div className="pt-6 flex items-center justify-center">
            <div className="bg-neutral-100/90 p-1 rounded-2xl border border-neutral-200 shadow-xs flex items-center">
              <button
                type="button"
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  !annualBilling
                    ? "bg-primary text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {isEs ? "Facturación Mensual" : "Monthly Billing"}
              </button>
              <button
                type="button"
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-1.5 cursor-pointer ${
                  annualBilling
                    ? "bg-accent text-marine-dark shadow-sm font-bold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <span>{isEs ? "Facturación Anual" : "Annual Billing"}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {isEs ? "Ahorro ~18%" : "Save ~18%"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          {tiers.map((tier) => {
            const isHighlighted = tier.highlight;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                  isHighlighted
                    ? "bg-marine-dark text-white border-2 border-accent shadow-2xl scale-[1.02] ring-1 ring-accent/40"
                    : "bg-white/95 text-neutral-text border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary/30 backdrop-blur-xs"
                }`}
              >
                {/* Popular badge */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-6 bg-accent text-marine-dark font-extrabold text-[10px] font-technical tracking-wider px-3 py-0.5 rounded-full uppercase shadow-md flex items-center space-x-1">
                    <Sparkles className="h-3 w-3" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Top Badge & Tier Name */}
                  <div>
                    {!isHighlighted && (
                      <span className={`inline-block text-[11px] font-technical font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-2.5 ${tier.badgeColor}`}>
                        {tier.badge}
                      </span>
                    )}
                    <h3 className={`text-xl font-bold font-heading ${isHighlighted ? "text-white" : "text-primary"}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-xs mt-1 min-h-[32px] leading-relaxed ${isHighlighted ? "text-slate-300/80" : "text-neutral-text/75"}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`pt-1 pb-2 border-y ${isHighlighted ? "border-white/10" : "border-neutral-100"}`}>
                    <div className="flex items-baseline space-x-1.5">
                      <span className={`text-3xl sm:text-4xl font-extrabold font-heading ${isHighlighted ? "text-white" : "text-primary"}`}>
                        {tier.priceLabel}
                      </span>
                      <span className={`text-xs font-medium ${isHighlighted ? "text-slate-400" : "text-neutral-text/70"}`}>
                        {tier.period}
                      </span>
                    </div>
                    <span className={`text-[11px] block mt-1 ${isHighlighted ? "text-slate-400" : "text-neutral-text/50"}`}>
                      {tier.subPeriod}
                    </span>
                  </div>

                  {/* Key specs bullet list */}
                  <ul className="space-y-2.5 text-xs font-light">
                    {tier.keySpecs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-2">
                        <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isHighlighted ? "text-accent" : "text-emerald-600"}`} />
                        <span className={`leading-snug ${isHighlighted ? "text-slate-200" : "text-neutral-700"}`}>
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="mt-7 pt-2">
                  <a
                    href="#contact"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer ${
                      isHighlighted
                        ? "bg-accent hover:bg-accent-hover text-marine-dark shadow-md hover:shadow-lg hover:shadow-accent/20"
                        : "bg-primary hover:bg-primary-hover text-white shadow-xs hover:shadow"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Divider & Table Navigation Tabs */}
        <div className="pt-4 pb-10 border-t border-neutral-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold font-technical uppercase tracking-wider text-primary block">
                {isEs ? "Desglose Técnico Exhaustivo" : "Comprehensive Technical Breakdown"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mt-1">
                {isEs ? "Comparativa y Cuotas Detalladas" : "Detailed Feature & Quota Matrix"}
              </h3>
              <p className="text-sm text-neutral-text/75 mt-1 max-w-xl font-light">
                {isEs
                  ? "Revisá las especificaciones exactas por segmento, herramientas analíticas y condiciones de excedentes."
                  : "Review the exact segment-by-segment specs, analytical tools, and overage policies."}
              </p>
            </div>

            {/* Table Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-neutral-100/90 p-1.5 rounded-2xl border border-neutral-200/80 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-primary text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {isEs ? "Todas las Tablas" : "All Tables"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("summary")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "summary"
                    ? "bg-primary text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {isEs ? "1. Resumen de Tiers" : "1. Tiers Summary"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("features")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "features"
                    ? "bg-primary text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {isEs ? "2. Prestaciones & Herramientas" : "2. Features & Modules"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("quotas")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "quotas"
                    ? "bg-primary text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {isEs ? "3. Cuotas & Excedentes" : "3. Quotas & Overages"}
              </button>
            </div>
          </div>

          <div className="space-y-14">
            
            {/* ---------------------------------------------------- */}
            {/* TABLA 1: Resumen de Tiers y Precios                 */}
            {/* ---------------------------------------------------- */}
            {(activeTab === "all" || activeTab === "summary") && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary">
                  <span className="w-6 h-6 rounded-lg bg-primary-soft text-primary flex items-center justify-center text-xs font-bold font-technical border border-primary/20">
                    1
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-heading">
                    {isEs ? "1. Resumen de Tiers y Precios" : "1. Tiers and Pricing Summary"}
                  </h4>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white/95 shadow-sm backdrop-blur-xs">
                  <table className="w-full text-left text-sm border-collapse min-w-[760px]">
                    <thead>
                      <tr className="bg-neutral-50/90 border-b border-neutral-200 text-xs font-technical uppercase tracking-wider text-primary">
                        <th className="py-4 px-5 font-bold">{isEs ? "Tier" : "Tier"}</th>
                        <th className="py-4 px-5 font-bold">{isEs ? "Modalidad" : "Modality"}</th>
                        <th className="py-4 px-5 font-bold">{isEs ? "Precio Base" : "Base Price"}</th>
                        <th className="py-4 px-5 font-bold">{isEs ? "Límite Usuarios" : "User Limit"}</th>
                        <th className="py-4 px-5 font-bold">{isEs ? "Límite Proyectos" : "Project Limit"}</th>
                        <th className="py-4 px-5 font-bold">{isEs ? "Excedentes" : "Overages"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {summaryRows.map((row) => (
                        <tr
                          key={row.tier}
                          className={`transition-colors ${
                            row.isPro
                              ? "bg-emerald-50/40 hover:bg-emerald-50/70 border-l-4 border-l-accent"
                              : "hover:bg-primary-soft/20"
                          }`}
                        >
                          <td className="py-4 px-5 font-extrabold font-heading text-primary whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <span>{row.tier}</span>
                              {row.isPro && (
                                <span className="bg-accent text-marine-dark text-[9px] font-technical uppercase font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                                  {isEs ? "MÁS ELEGIDO" : "POPULAR"}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-5 text-neutral-700">
                            {row.modality}
                          </td>
                          <td className="py-4 px-5 font-bold text-neutral-900 whitespace-nowrap">
                            <span className="text-primary font-technical text-base">
                              {row.basePrice}
                            </span>
                            {row.annualPrice && (
                              <span className="block text-[11px] font-normal text-neutral-500 mt-0.5">
                                {isEs ? `Anual: ${row.annualPrice}` : `Annual: ${row.annualPrice}`}
                              </span>
                            )}
                          </td>
                          <td className="py-4 px-5 font-semibold text-neutral-800">
                            {row.userLimit}
                          </td>
                          <td className="py-4 px-5 text-neutral-700">
                            {row.projectLimit}
                          </td>
                          <td className="py-4 px-5 text-neutral-700">
                            {row.overages}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* TABLA 2: Tabla Maestra de Prestaciones y Herramientas */}
            {/* ---------------------------------------------------- */}
            {(activeTab === "all" || activeTab === "features") && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary">
                  <span className="w-6 h-6 rounded-lg bg-primary-soft text-primary flex items-center justify-center text-xs font-bold font-technical border border-primary/20">
                    2
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-heading">
                    {isEs
                      ? "2. Tabla Maestra de Prestaciones y Herramientas por Segmento"
                      : "2. Master Matrix of Features & Tools by Segment"}
                  </h4>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white/95 shadow-sm backdrop-blur-xs">
                  <table className="w-full text-left text-sm border-collapse min-w-[840px]">
                    <thead>
                      <tr className="bg-neutral-50/90 border-b border-neutral-200 text-xs font-technical uppercase tracking-wider text-primary">
                        <th className="py-4 px-5 font-bold w-[30%]">
                          {isEs ? "Módulo / Prestación" : "Module / Feature"}
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[17%]">
                          <span className="block text-primary">FREELANCER</span>
                          <span className="text-[11px] text-neutral-500 font-normal">
                            {isEs ? "(USD 50 / campaña)" : "(USD 50 / campaign)"}
                          </span>
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[17%]">
                          <span className="block text-primary">STARTER</span>
                          <span className="text-[11px] text-neutral-500 font-normal">
                            {isEs ? "(USD 220 / mes)" : "(USD 220 / mo)"}
                          </span>
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[18%] bg-emerald-50/60 border-x border-emerald-200/80">
                          <div className="flex items-center justify-center space-x-1">
                            <span className="block text-primary font-extrabold">PRO</span>
                            <span className="text-[9px] bg-accent/30 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full uppercase">
                              ★
                            </span>
                          </div>
                          <span className="text-[11px] text-primary/80 font-normal">
                            {isEs ? "(USD 550 / mes)" : "(USD 550 / mo)"}
                          </span>
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[18%]">
                          <span className="block text-primary">ENTERPRISE</span>
                          <span className="text-[11px] text-neutral-500 font-normal">
                            {isEs ? "(USD 1.200 / mes)" : "(USD 1,200 / mo)"}
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {masterFeatures.map((feat, fIdx) => (
                        <tr
                          key={fIdx}
                          className="hover:bg-primary-soft/15 transition-colors"
                        >
                          {/* Module name + description */}
                          <td className="py-3.5 px-5 align-top">
                            <span className="font-semibold text-primary block text-sm">
                              {feat.title}
                            </span>
                            {feat.subtitle && (
                              <span className="text-[12px] text-neutral-500 font-light block mt-0.5 leading-snug">
                                {feat.subtitle}
                              </span>
                            )}
                          </td>

                          {/* Freelancer Cell */}
                          <td className="py-3.5 px-4 text-center align-top">
                            {renderCell(feat.freelancer)}
                          </td>

                          {/* Starter Cell */}
                          <td className="py-3.5 px-4 text-center align-top">
                            {renderCell(feat.starter)}
                          </td>

                          {/* Pro Cell (Highlighted) */}
                          <td className="py-3.5 px-4 text-center align-top bg-emerald-50/40 border-x border-emerald-200/80">
                            {renderCell(feat.pro, true)}
                          </td>

                          {/* Enterprise Cell */}
                          <td className="py-3.5 px-4 text-center align-top">
                            {renderCell(feat.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* TABLA 3: Matriz de Cuotas (FUP) y Régimen Excedentes  */}
            {/* ---------------------------------------------------- */}
            {(activeTab === "all" || activeTab === "quotas") && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-primary">
                  <span className="w-6 h-6 rounded-lg bg-primary-soft text-primary flex items-center justify-center text-xs font-bold font-technical border border-primary/20">
                    3
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-heading">
                    {isEs
                      ? "3. Matriz de Cuotas (FUP) y Régimen de Excedentes"
                      : "3. Quota Matrix (FUP) & Overages Policy"}
                  </h4>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white/95 shadow-sm backdrop-blur-xs">
                  <table className="w-full text-left text-sm border-collapse min-w-[780px]">
                    <thead>
                      <tr className="bg-neutral-50/90 border-b border-neutral-200 text-xs font-technical uppercase tracking-wider text-primary">
                        <th className="py-4 px-5 font-bold w-[22%]">
                          {isEs ? "Recurso" : "Resource"}
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[18%]">
                          <span className="block text-primary">FREELANCER</span>
                          <span className="text-[11px] text-neutral-500 font-normal">
                            {isEs ? "(USD 50/campaña)" : "(USD 50/campaign)"}
                          </span>
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[18%]">
                          <span className="block text-primary">STARTER</span>
                          <span className="text-[11px] text-neutral-500 font-normal">
                            {isEs ? "(USD 220/mes)" : "(USD 220/mo)"}
                          </span>
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[18%] bg-emerald-50/60 border-x border-emerald-200/80">
                          <span className="block text-primary font-extrabold">PRO</span>
                          <span className="text-[11px] text-primary/80 font-normal">
                            {isEs ? "(USD 550/mes)" : "(USD 550/mo)"}
                          </span>
                        </th>
                        <th className="py-4 px-4 font-bold text-center w-[18%]">
                          <span className="block text-primary">ENTERPRISE</span>
                          <span className="text-[11px] text-neutral-500 font-normal">
                            {isEs ? "(USD 1.200/mes)" : "(USD 1,200/mo)"}
                          </span>
                        </th>
                        <th className="py-4 px-5 font-bold w-[26%] text-left">
                          {isEs ? "Tarifa de Excedente" : "Overage Rate"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {quotaRows.map((q, qIdx) => (
                        <tr
                          key={qIdx}
                          className="hover:bg-primary-soft/15 transition-colors"
                        >
                          <td className="py-4 px-5">
                            <span className="font-semibold text-primary block">
                              {q.resource}
                            </span>
                            <span className="text-[11px] text-neutral-500 font-light block mt-0.5">
                              {q.resourceDetail}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center font-medium text-neutral-800">
                            {q.freelancer}
                          </td>
                          <td className="py-4 px-4 text-center font-medium text-neutral-800">
                            {q.starter}
                          </td>
                          <td className="py-4 px-4 text-center font-bold text-primary bg-emerald-50/40 border-x border-emerald-200/80">
                            {q.pro}
                          </td>
                          <td className="py-4 px-4 text-center font-medium text-neutral-800">
                            {q.enterprise}
                          </td>
                          <td className="py-4 px-5">
                            <span className="text-emerald-700 font-bold block text-xs sm:text-sm font-technical">
                              {q.overageRate}
                            </span>
                            {q.overageNote && (
                              <span className="text-[11px] text-neutral-500 block mt-0.5 italic">
                                {q.overageNote}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Callout connecting to Free Trial Form */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-primary via-[#003B31] to-primary border border-primary/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold font-technical uppercase tracking-wider text-accent flex items-center justify-center md:justify-start space-x-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{isEs ? "Prueba sin compromiso" : "Zero-risk evaluation"}</span>
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {isEs
                ? "¿Querés evaluar DIM Data Bus con tus propios datos de campo?"
                : "Want to test DIM Data Bus with your actual field data?"}
            </h4>
            <p className="text-sm text-neutral-200 max-w-2xl font-light">
              {isEs
                ? "Solicitá tu Free Trial de 7 días con prestaciones completas equivalentes a Plan PRO (37 protocolos, Gemelo Digital y Módulo de Análisis). Sin requerir tarjeta de crédito."
                : "Request your 7-day Free Trial with full features equivalent to PRO Plan (37 protocols, Digital Twin, and Analysis Module). No credit card required."}
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 bg-accent hover:bg-accent-hover text-marine-dark px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-accent/20 flex items-center space-x-2 cursor-pointer"
          >
            <span>{isEs ? "Solicitar Trial de 7 Días" : "Request 7-Day Trial"}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

// Helper to render cell types in the master features table
function renderCell(cell: FeatureCell, isPro = false) {
  if (!cell) return null;

  if (cell.type === "yes") {
    return (
      <div className="flex items-center justify-center space-x-1 text-emerald-700 font-bold text-sm">
        <Check className="h-4 w-4 stroke-[3] text-emerald-600" />
        <span>Sí</span>
      </div>
    );
  }

  if (cell.type === "no") {
    return (
      <div className="flex items-center justify-center text-neutral-400 font-medium text-sm">
        <span>—</span>
      </div>
    );
  }

  if (cell.type === "text") {
    return (
      <div className="text-center space-y-1">
        {cell.hasCheck ? (
          <div className="flex items-center justify-center space-x-1.5 text-emerald-700">
            <Check className="h-4 w-4 stroke-[3] text-emerald-600 shrink-0" />
            <span className={`block font-semibold text-xs leading-snug ${isPro ? "text-primary font-bold" : "text-neutral-900"}`}>
              {cell.main}
            </span>
          </div>
        ) : (
          <span className={`block font-semibold text-xs leading-snug ${isPro ? "text-primary font-bold" : "text-neutral-800"}`}>
            {cell.main}
          </span>
        )}
        {cell.note && (
          <span className="block text-[11px] text-neutral-500 leading-tight font-normal">
            {cell.note}
          </span>
        )}
        {cell.details && (
          <div className="mt-1.5 text-left bg-neutral-50 p-2 rounded-lg border border-neutral-200/80 space-y-1">
            {cell.details.map((d: string, i: number) => (
              <div key={i} className="flex items-center space-x-1.5 text-[11px] text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
