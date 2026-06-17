"use client";

import React, { useState } from "react";
import {
  Compass,
  Layers,
  Activity,
  ChevronRight,
  TrendingUp,
  FileCheck,
  DollarSign,
  Eye,
  ShieldAlert,
  Database,
  X,
  CheckCircle2,
  Waves
} from "lucide-react";

interface ModuleData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  law: string;
  benefits: string[];
  metrics: string;
  color: string;
  icon: React.ReactNode;
  mockUI: React.ReactNode;
}

export default function Modules() {
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

  const modules: ModuleData[] = [
    {
      id: "geomorfologico",
      title: "Módulo de Modelado Geomorfológico Predictivo",
      shortDesc:
        "Simule escenarios de erosión y sedimentación con datos de batimetría y granulometría. Cuantifique impactos y fundamente decisiones de cumplimiento con la Ley N° 25.675 (Estudios de Impacto Ambiental).",
      fullDesc:
        "Este módulo autogestivo procesa perfiles batimétricos y datos granulométricos de sedimentos para modelar la dinámica fluvial o costera. Permite predecir tasas de sedimentación y erosión bajo diferentes caudales y condiciones de operación, asegurando el cumplimiento robusto de la Ley General del Ambiente N° 25.675.",
      law: "Ley Nacional N° 25.675 (Ley General del Ambiente - Art. 11: Evaluación de Impacto Ambiental)",
      benefits: [
        "Simulación de erosión a 5, 10 y 25 años",
        "Integración directa de nubes de puntos batimétricos (.las, .csv)",
        "Cuantificación exacta de volumen de sedimentación",
        "Generación automática de reportes de impacto listos para presentar ante autoridades"
      ],
      metrics: "Reducción del 35% en tiempos de modelación fluvial",
      color: "from-teal-600 to-emerald-800",
      icon: <Compass className="h-6 w-6 text-accent" />,
      mockUI: (
        <div className="bg-marine-dark p-4 rounded-xl text-white font-technical text-[11px] space-y-3 border border-white/10">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-accent">MODELADOR GEOMORFOLÓGICO</span>
            <span>BATIMETRÍA_RÍO_PARANÁ.CSV</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center py-2">
            <div className="bg-white/5 p-2 rounded">
              <div className="text-[9px] text-gray-400">Erosión Estimada</div>
              <div className="text-sm font-bold text-red-400">12.4 m³/año</div>
            </div>
            <div className="bg-white/5 p-2 rounded">
              <div className="text-[9px] text-gray-400">Sedimentación</div>
              <div className="text-sm font-bold text-green-400">4.1 m³/año</div>
            </div>
          </div>
          <div className="h-24 bg-marine-medium/60 rounded flex items-center justify-center relative overflow-hidden">
            {/* Simulation lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49%,rgba(76,175,80,0.2)_50%,transparent_51%)] bg-[size:20px_20px]" />
            <svg className="w-full h-12 text-accent stroke-current" viewBox="0 0 100 20" fill="none">
              <path d="M0 15 Q25 5, 50 12 T100 8" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute bottom-1 right-2 text-[9px] text-gray-500">Vista de Perfil 2D</span>
          </div>
          <div className="text-[10px] text-gray-300">Cumplimiento: Ley 25.675 - Nivel de Riesgo: BAJO</div>
        </div>
      )
    },
    {
      id: "plumas",
      title: "Visor de Plumas de Contaminantes 3D",
      shortDesc:
        "Visualice la dispersión de contaminantes en agua superficial y subterránea. Obtenga visibilidad predictiva para la mitigación de riesgos y la optimización de la gestión ambiental.",
      fullDesc:
        "Herramienta avanzada de renderizado 3D en navegador que proyecta la pluma de dispersión de solutos e hidrocarburos en acuíferos o cuerpos superficiales. Permite ingresar coeficientes de dispersión, conductividad y tasas de decaimiento para estimar la evolución temporal del contaminante.",
      law: "Ley Nacional N° 25.688 (Régimen de Gestión Ambiental de Aguas)",
      benefits: [
        "Visualización interactiva 3D con isolíneas de concentración",
        "Simulación de escenarios de bombeo y remediación",
        "Predicción de llegada a pozos de abastecimiento cercanos",
        "Optimización de ubicación de frentes de monitoreo"
      ],
      metrics: "Optimiza la gestión de riesgos en proyectos hidráulicos",
      color: "from-blue-700 to-teal-800",
      icon: <Layers className="h-6 w-6 text-accent" />,
      mockUI: (
        <div className="bg-marine-dark p-4 rounded-xl text-white font-technical text-[11px] space-y-3 border border-white/10">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-accent">VISOR PLUMAS 3D</span>
            <span>MODELO_DISPERSIÓN_V1</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Soluto: Nitratos</span>
              <span className="text-red-400">Exceso Límite</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-4/5" />
            </div>
          </div>
          <div className="h-24 bg-marine-medium/60 rounded flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-red-500/20 via-orange-500/5 to-transparent blur-md" />
            <div className="border border-dashed border-accent/30 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-red-500/40 animate-pulse" />
            </div>
            <span className="absolute top-1 left-2 text-[9px] text-gray-400">Acuífero: Pampeano</span>
          </div>
          <div className="text-[10px] text-gray-300">Monitoreo: 5 Pozos - Coef. Dispersión: 0.15 m²/d</div>
        </div>
      )
    },
    {
      id: "acuiferos",
      title: "Módulo de Evaluación de Vulnerabilidad de Acuíferos",
      shortDesc:
        "Mapee y simule riesgos de filtración en 3D, integrando piezometría y conductividad hidráulica. Reduzca pasivos ambientales y fortalezca la responsabilidad hídrica en conformidad con la Ley N° 25.688.",
      fullDesc:
        "Evalúa la susceptibilidad a la contaminación de acuíferos libres y semiconfinados mediante metodologías internacionales parametrizadas (GOD/DRASTIC) y simulaciones 3D personalizadas. Integra datos de litología, recarga neta y profundidad de la napa para generar mapas de vulnerabilidad interactivos.",
      law: "Ley Nacional N° 25.688 (Régimen de Gestión Ambiental de Aguas - Protección del Recurso)",
      benefits: [
        "Clasificación automática de vulnerabilidad (Baja, Media, Alta)",
        "Simulaciones de recarga y transporte de solutos en la zona no saturada",
        "Reducción directa de pasivos ambientales en proyectos de infraestructura",
        "Informes consolidados con validez legal"
      ],
      metrics: "Reduce pasivos ambientales y previene filtraciones",
      color: "from-emerald-700 to-green-950",
      icon: <Waves className="h-6 w-6 text-accent" />,
      mockUI: (
        <div className="bg-marine-dark p-4 rounded-xl text-white font-technical text-[11px] space-y-3 border border-white/10">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-accent">EVALUACIÓN VULNERABILIDAD</span>
            <span>MÉTODO: DRASTIC</span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-1">
            <div className="bg-white/5 p-1 rounded text-center">
              <div className="text-[8px] text-gray-400">Prof. Napa</div>
              <div className="text-xs font-bold">14.2 m</div>
            </div>
            <div className="bg-white/5 p-1 rounded text-center">
              <div className="text-[8px] text-gray-400">Recarga</div>
              <div className="text-xs font-bold text-accent">120 mm/a</div>
            </div>
            <div className="bg-white/5 p-1 rounded text-center">
              <div className="text-[8px] text-gray-400">Litología</div>
              <div className="text-xs font-bold">Arena/Limo</div>
            </div>
          </div>
          <div className="h-20 bg-marine-medium/60 rounded p-2 text-[10px] space-y-1 relative">
            <div className="flex justify-between text-[9px] text-gray-400">
              <span>Zonificación de Riesgo:</span>
              <span className="text-yellow-400 font-bold">MODERADO</span>
            </div>
            <div className="flex justify-between">
              <span>Índice DRASTIC:</span>
              <span>138 / 200</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-yellow-400 h-full w-2/3" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "as-a-service",
      title: "Análisis Predictivo As-a-Service",
      shortDesc:
        "Active reportes y modelos pre-configurados para estimar riesgos y la evolución de plumas. Optimice recursos y tome decisiones fundamentadas con total autonomía.",
      fullDesc:
        "Un motor en la nube que procesa tus datos bajo plantillas pre-configuradas para generar informes ejecutivos de simulación al instante. Diseñado para analistas ambientales que requieren resultados rápidos con bases científicas sólidas sin requerir infraestructura de cómputo local.",
      law: "Normativas Nacionales e Internacionales de Calidad de Agua y Suelo",
      benefits: [
        "Acceso instantáneo sin licencias de software complejas",
        "Algoritmos calibrados y validados científicamente",
        "Reportes PDF personalizables con la marca de su consultora",
        "Ahorro de hasta un 60% en costos de licencias e ingeniería"
      ],
      metrics: "Ahorra costos operativos y agiliza entregas",
      color: "from-cyan-800 to-primary",
      icon: <Activity className="h-6 w-6 text-accent" />,
      mockUI: (
        <div className="bg-marine-dark p-4 rounded-xl text-white font-technical text-[11px] space-y-3 border border-white/10">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-accent">PREDICTIVO AS-A-SERVICE</span>
            <span>GENERADOR DE REPORTES</span>
          </div>
          <div className="space-y-2 py-1">
            <div className="flex items-center space-x-2 text-[10px]">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Simulación Monte Carlo: Completada (10k iteraciones)</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px]">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Reporte de Impacto PDF: Generado</span>
            </div>
          </div>
          <button className="w-full bg-primary text-white border border-primary/20 text-center py-2 rounded text-[10px] hover:bg-primary-hover font-semibold transition-colors flex items-center justify-center space-x-1.5">
            <FileCheck className="h-3.5 w-3.5" />
            <span>Descargar Reporte (.pdf)</span>
          </button>
        </div>
      )
    }
  ];

  return (
    <section id="modules" className="py-24 bg-neutral-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Nuestras Soluciones Autogestivas para Desafíos Ambientales
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-neutral-text/80 font-light">
            Acceda a herramientas avanzadas para optimizar proyectos, mitigar
            riesgos y asegurar el cumplimiento normativo con total autonomía.
          </p>
        </div>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="bg-neutral-card rounded-2xl p-6 border border-neutral-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header card */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary-soft rounded-xl transition-colors group-hover:bg-primary group-hover:text-white">
                    {mod.icon}
                  </div>
                  <span className="text-[10px] font-technical font-bold text-accent uppercase tracking-wider bg-accent-soft px-2.5 py-1 rounded-full">
                    Autogestivo
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary group-hover:text-primary-hover transition-colors leading-snug">
                  {mod.title}
                </h3>

                <p className="text-sm text-neutral-text/70 leading-relaxed font-light line-clamp-5">
                  {mod.shortDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-border mt-6">
                <button
                  onClick={() => setSelectedModule(mod)}
                  className="w-full flex items-center justify-between text-xs font-bold text-primary group-hover:text-accent transition-colors"
                >
                  <span>MÁS INFORMACIÓN</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visible Value Propositions Bar */}
        <div className="mt-20 bg-primary-soft/40 border border-primary/10 rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <h4 className="text-xs uppercase font-technical font-extrabold text-primary tracking-widest">
              Impacto de Negocio & Cumplimiento B2B
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 shadow-xs border border-primary/5">
              <ShieldAlert className="h-6 w-6 text-accent" />
              <span className="text-xs font-technical font-bold text-primary">Reduce pasivos ambientales</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 shadow-xs border border-primary/5">
              <TrendingUp className="h-6 w-6 text-accent" />
              <span className="text-xs font-technical font-bold text-primary">Optimiza gestión de riesgos</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 shadow-xs border border-primary/5">
              <FileCheck className="h-6 w-6 text-accent" />
              <span className="text-xs font-technical font-bold text-primary">Cumplimiento normativo</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 shadow-xs border border-primary/5">
              <DollarSign className="h-6 w-6 text-accent" />
              <span className="text-xs font-technical font-bold text-primary">Ahorra costos operativos</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/60 shadow-xs border border-primary/5">
              <Eye className="h-6 w-6 text-accent" />
              <span className="text-xs font-technical font-bold text-primary">Visibilidad predictiva integral</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl border border-neutral-border relative max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-border bg-neutral-bg">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary-soft rounded-lg text-primary">
                  {selectedModule.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{selectedModule.title}</h3>
              </div>
              <button
                onClick={() => setSelectedModule(null)}
                className="text-neutral-text hover:text-primary p-2 hover:bg-neutral-border/50 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Details Left */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-technical font-bold uppercase tracking-wider text-accent mb-2">Descripción General</h4>
                  <p className="text-sm text-neutral-text/90 leading-relaxed font-light">
                    {selectedModule.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-technical font-bold uppercase tracking-wider text-accent mb-2">Marco Normativo y Legal</h4>
                  <div className="bg-accent-soft text-primary p-3 rounded-lg border border-accent/20 flex items-start space-x-2.5">
                    <FileCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs font-technical font-semibold">{selectedModule.law}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-technical font-bold uppercase tracking-wider text-accent mb-3">Funcionalidades Clave</h4>
                  <ul className="space-y-2">
                    {selectedModule.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-neutral-text/80">
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-border flex items-center justify-between">
                  <div className="text-xs text-neutral-text/60">
                    Métrica de Impacto: <span className="font-technical font-bold text-primary">{selectedModule.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Mock UI Right */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h4 className="text-xs font-technical font-bold uppercase tracking-wider text-neutral-text/50 mb-3 text-center">
                  Simulación de Interfaz Autogestiva
                </h4>
                {selectedModule.mockUI}
                <p className="text-[10px] font-technical text-neutral-text/60 mt-3 text-center leading-relaxed">
                  Las consultoras cargan sus datos de forma autónoma y el sistema genera la simulación instantáneamente.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-border bg-neutral-bg flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <span className="text-xs text-neutral-text/75 font-semibold">¿Interesado en implementar este módulo?</span>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2 border border-neutral-border hover:bg-neutral-border/50 text-neutral-text text-xs font-bold rounded-lg transition-colors"
                >
                  Cerrar
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedModule(null)}
                  className="px-5 py-2 bg-primary text-white hover:bg-primary-hover text-xs font-bold rounded-lg transition-colors shadow-sm flex items-center space-x-1"
                >
                  <span>Solicitar Demo del Módulo</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
