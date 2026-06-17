"use client";

import React, { useState, useEffect } from "react";
import { Database, Cpu, TrendingUp, CheckSquare, Terminal, ArrowRight, Play } from "lucide-react";

interface FlowStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  desc: string;
  logs: string[];
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  const steps: FlowStep[] = [
    {
      id: 0,
      title: "Recopilación",
      icon: <Database className="h-6 w-6" />,
      subtitle: "Series Temporales e IoT",
      desc: "Conectamos múltiples fuentes de datos ambientales en bruto, incluyendo sensores IoT en pozos de monitoreo, archivos de batimetría (.csv, .las), estaciones meteorológicas y datos de sensores remotos.",
      logs: [
        "Connecting to IoT node #A4-309...",
        "Connection established. Protocols: MQTT / HTTPS",
        "Stream: Water Level (Piezometry) -> 14.53 m",
        "Reading raw bathymetry grid point (X:342.3, Y:984.1, Z:-12.4)",
        "Buffering temporal telemetry series..."
      ]
    },
    {
      id: 1,
      title: "Integración (DIM Bus)",
      icon: <Cpu className="h-6 w-6" />,
      subtitle: "El Núcleo de Normalización",
      desc: "Nuestra columna vertebral procesa, limpia y estructura datos heterogéneos en un repositorio unificado y geo-referenciado. Sincroniza variables de campo en tiempo real.",
      logs: [
        "DIM Data Bus core initializing pipeline...",
        "Normalizing units: converting feet to meters...",
        "Performing spatial interpolation (Kriging)...",
        "Validating telemetry timestamps (offset fixed: +0.02s)",
        "Data bus payload packaged. Size: 1.2MB"
      ]
    },
    {
      id: 2,
      title: "Análisis Predictivo",
      icon: <TrendingUp className="h-6 w-6" />,
      subtitle: "Simulaciones y Modelado 3D",
      desc: "Los motores automatizados corren modelos numéricos directamente en la nube. Simulan dispersión de solutos, vulnerabilidad de acuíferos o cambios morfológicos costeros.",
      logs: [
        "Invoking 3D dispersion engine...",
        "Running finite-difference groundwater model...",
        "Iterative solver converged. Residual error < 0.001",
        "Generating 3D plume isolines (Concentration threshold: 10mg/L)",
        "Mapping DRASTIC aquifer susceptibility index: 138"
      ]
    },
    {
      id: 3,
      title: "Decisiones Fundamentadas",
      icon: <CheckSquare className="h-6 w-6" />,
      subtitle: "Acción y Cumplimiento de Leyes",
      desc: "Transforma las simulaciones en informes técnicos listos para presentar ante auditores y autoridades públicas, garantizando el cumplimiento estricto de la legislación nacional.",
      logs: [
        "Formatting reports for regulatory compliance...",
        "Generating document under Law N° 25.675 (EIA)",
        "Applying environmental safety factor calculations...",
        "Generating PDF Report: 'Impact_Report_Parana_Sint.pdf'",
        "System State: READY. Secure data backup completed."
      ]
    }
  ];

  // Auto-advance progress effect
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((prevStep) => (prevStep + 1) % steps.length);
          return 0;
        }
        return prev + 1.5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [steps.length]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    setProgress(0);
  };

  const renderStepCard = (idx: number) => {
    const step = steps[idx];
    const isActive = idx === activeStep;
    return (
      <div
        key={step.id}
        onClick={() => handleStepClick(idx)}
        className={`flex items-start space-x-4 p-5 rounded-2xl cursor-pointer border transition-colors duration-300 ${
          isActive
            ? "bg-marine-medium/90 border-accent shadow-[0_0_15px_rgba(76,175,80,0.15)]"
            : "bg-marine-medium/30 border-white/5 hover:bg-marine-medium/50 hover:border-white/10"
        }`}
      >
        {/* Circle Icon Indicator */}
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-xl border transition-colors duration-300 shrink-0 ${
            isActive
              ? "bg-accent text-marine-dark border-accent"
              : "bg-marine-dark text-gray-400 border-white/10"
          }`}
        >
          {step.icon}
        </div>

        {/* Step Content */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase font-technical font-bold tracking-widest text-accent">
              Paso 0{idx + 1}
            </span>
            <span className="text-[10px] text-gray-500">•</span>
            <span className="text-[11px] font-technical font-semibold text-gray-300">
              {step.subtitle}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white">{step.title}</h3>
          
          {/* Step Description - Always visible */}
          <p className="text-sm text-gray-300 leading-relaxed font-light mt-2">
            {step.desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="how-it-works" className="py-24 bg-marine-dark text-white relative overflow-hidden">
      {/* Absolute Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-accent text-xs font-technical font-bold uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
            Nuestra Columna Vertebral
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            DIM Data Bus: Inteligencia Ambiental Centralizada
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-light">
            Integramos series temporales y datos geoespaciales multi-paramétricos, transformando datos brutos en insights accionables para una gestión ambiental sin precedentes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4 items-stretch">
          
          {/* Row 1 Left: Step 1 Card */}
          <div className="lg:col-span-7 order-1 lg:row-start-1">
            {renderStepCard(0)}
          </div>
          
          {/* Row 1 Right: Access Platform Button */}
          <a
            href="http://localhost:9003"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-5 order-3 lg:order-2 lg:row-start-1 group relative w-full bg-accent hover:bg-accent-hover text-marine-dark hover:text-white font-heading font-extrabold tracking-wider uppercase text-sm py-5 lg:py-0 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(76,175,80,0.15)] hover:shadow-[0_0_35px_rgba(76,175,80,0.35)] flex items-center justify-center space-x-3 transform hover:-translate-y-0.5 border border-accent/20 cursor-pointer"
          >
            <span>INGRESAR A LA PLATAFORMA</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

          {/* Row 2 Left: Steps 2, 3, 4 */}
          <div className="lg:col-span-7 flex flex-col space-y-4 order-2 lg:order-3 lg:row-start-2">
            {renderStepCard(1)}
            {renderStepCard(2)}
            {renderStepCard(3)}
          </div>

          {/* Row 2 Right: Console Terminal */}
          <div className="lg:col-span-5 flex flex-col justify-end order-4 lg:row-start-2 self-end">
            <div className="bg-marine-medium rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[350px]">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-marine-dark/60 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4.5 w-4.5 text-accent animate-pulse" />
                  <span className="text-xs font-technical text-gray-300 tracking-wider">Console: {steps[activeStep].title}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                </div>
              </div>

              {/* Console Logs Output */}
              <div className="p-4 flex-1 font-technical text-[11px] space-y-3.5 overflow-y-auto leading-relaxed bg-marine-dark/40">
                <div className="text-gray-500">// Simulación en tiempo real de operaciones del bus</div>
                
                {steps[activeStep].logs.map((log, idx) => (
                  <div key={idx} className="flex items-start space-x-2 animate-fadeIn">
                    <span className="text-accent shrink-0 select-none">&gt;&gt;</span>
                    <span className="text-gray-200">{log}</span>
                  </div>
                ))}

                {/* Progress bar placeholder inside console */}
                <div className="pt-4 mt-4 border-t border-white/5 space-y-1.5">
                  <div className="flex justify-between text-[10px] text-gray-400 font-technical">
                    <span>Estado del Bus</span>
                    <span>Procesando... {Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-accent h-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Console Footer */}
              <div className="px-4 py-3 bg-marine-dark/60 border-t border-white/5 flex items-center justify-between text-[10px] font-technical text-gray-400">
                <span>Buffer: Active</span>
                <span>GeoSint Core Engine v2.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
