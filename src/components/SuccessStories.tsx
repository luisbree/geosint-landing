"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Timer, BarChart } from "lucide-react";

interface Testimonial {
  id: number;
  projectTitle: string;
  metric: string;
  metricLabel: string;
  consultora: string;
  quote: string;
  logoText: string;
}

export default function SuccessStories() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      projectTitle: "Monitoreo Hídrico en Gran Obra Metropolitana",
      metric: "-20%",
      metricLabel: "Tiempo de Análisis Piezométrico",
      consultora: "AquaSistemas Consultores",
      quote: "La integración de series temporales en el DIM Data Bus nos permitió cruzar registros de conductividad y niveles de napa en minutos en lugar de semanas. La simulación 3D facilitó la aprobación del estudio ante las autoridades competentes.",
      logoText: "AS"
    },
    {
      id: 2,
      projectTitle: "Evaluación de Vulnerabilidad para Corredor Logístico",
      metric: "-15%",
      metricLabel: "Reducción de Pasivos Ambientales",
      consultora: "GeoEstructuras & Asociados",
      quote: "Utilizando el Módulo de Acuíferos logramos mapear la vulnerabilidad DRASTIC de forma autónoma. Obtuvimos el sustento técnico y legal requerido por la Ley N° 25.688 sin tener que tercerizar costosas modelaciones.",
      logoText: "GE"
    },
    {
      id: 3,
      projectTitle: "Estudio Geomorfológico y Canal de Acceso Portuario",
      metric: "-40%",
      metricLabel: "Costos Operativos de Simulación",
      consultora: "Paraná Ingeniería Fluvial",
      quote: "Poder subir nuestras nubes de puntos batimétricos y procesar la granulometría de sedimentos directamente en la plataforma GeoSint aceleró el proyecto. La autonomía para correr modelos de erosión transformó nuestra consultoría.",
      logoText: "PF"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-24 bg-primary-soft/30 border-y border-primary/5 relative overflow-hidden">
      {/* Visual background circle */}
      <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            GeoSint en Acción: Historias de Impacto
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-base text-neutral-text/80 font-light">
            Conozca cómo consultoras líderes obtienen autonomía analítica y garantizan el cumplimiento normativo en proyectos reales.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-neutral-border p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
          
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-primary-soft">
            <Quote className="h-16 w-16 fill-current opacity-60" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            {/* Metric Box (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl shadow-inner">
              <span className="text-5xl font-technical font-extrabold tracking-tight text-accent animate-pulse">
                {testimonials[activeIdx].metric}
              </span>
              <span className="text-xs uppercase tracking-widest font-technical font-semibold mt-3 text-white/90">
                {testimonials[activeIdx].metricLabel}
              </span>
            </div>

            {/* Testimonial Quote (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-neutral-text/95 font-light italic leading-relaxed">
                "{testimonials[activeIdx].quote}"
              </p>

              {/* Author Metadata */}
              <div className="flex items-center space-x-3.5">
                {/* Simulated Logo */}
                <div className="w-10 h-10 rounded-full bg-accent text-white font-technical font-bold text-xs flex items-center justify-center shadow-sm">
                  {testimonials[activeIdx].logoText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">
                    {testimonials[activeIdx].projectTitle}
                  </h4>
                  <p className="text-xs text-neutral-text/60 font-medium">
                    {testimonials[activeIdx].consultora}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-border">
            {/* Slide Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? "bg-accent w-6" : "bg-neutral-border hover:bg-primary/30"
                  }`}
                  aria-label={`Ir al caso ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="p-2 border border-neutral-border hover:bg-neutral-bg rounded-lg text-primary hover:text-accent transition-colors focus:outline-none"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-neutral-border hover:bg-neutral-bg rounded-lg text-primary hover:text-accent transition-colors focus:outline-none"
                aria-label="Siguiente caso"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Aggregated impact summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center border-t border-neutral-border pt-12">
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Timer className="h-5 w-5 text-accent" />
              <span className="text-2xl font-technical font-extrabold">+20 hrs</span>
            </div>
            <p className="text-xs text-neutral-text/60 font-technical font-semibold uppercase tracking-wider">
              Ahorro de Ingeniería Semanal
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-2 text-primary">
              <BarChart className="h-5 w-5 text-accent" />
              <span className="text-2xl font-technical font-extrabold">3D Interactivo</span>
            </div>
            <p className="text-xs text-neutral-text/60 font-technical font-semibold uppercase tracking-wider">
              Visualización Autogestiva
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-2 text-primary">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="text-2xl font-technical font-extrabold">100% Legal</span>
            </div>
            <p className="text-xs text-neutral-text/60 font-technical font-semibold uppercase tracking-wider">
              Sustento bajo Leyes Ambientales
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
