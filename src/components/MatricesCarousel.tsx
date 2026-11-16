"use client";

import React, { useState, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

interface MatrixSlide {
  id: string;
  title: string;
  protocols: string;
  description: string;
  image: string;
}

const SLIDES: MatrixSlide[] = [
  {
    id: "hidrosfera",
    title: "Hidrósfera",
    protocols: "7 Protocolos",
    description:
      "Monitoreo integral del agua: aguas superficiales y subterráneas, sedimentos, hidrología de cuencas, ensayos hidráulicos y parámetros físico-químicos en terreno.",
    image: "/Gemini_hidrosfera.jpg",
  },
  {
    id: "geosfera",
    title: "Geósfera",
    protocols: "10 Protocolos",
    description:
      "Caracterización del subsuelo y geotecnia: calidad de suelos, ensayos de bombeo, mecánica de suelos, geología y geomorfología con trazabilidad pericial.",
    image: "/Gemini_geosfera.jpg",
  },
  {
    id: "biosfera",
    title: "Biósfera",
    protocols: "11 Protocolos",
    description:
      "Relevamiento de ecosistemas y biota: flora y vegetación, fauna y biodiversidad, microbioma y eDNA, paisaje, ecorregiones y patrimonio cultural.",
    image: "/Gemini_biosfera.jpg",
  },
  {
    id: "atmosfera",
    title: "Atmósfera",
    protocols: "5 Protocolos",
    description:
      "Control atmosférico y físico del entorno: calidad de aire y ruido, material particulado en suspensión, gases del subsuelo y radiaciones ionizantes y no ionizantes.",
    image: "/Gemini_atmosfera.jpg",
  },
  {
    id: "gestion",
    title: "Gestión y Transversales",
    protocols: "5 Protocolos",
    description:
      "Supervisión antrópica y operativa: muestreo microbiológico, residuos peligrosos, inspección ambiental de obra, cierre y restauración, y patrimonio cultural.",
    image: "/Gemini_gestion.jpg",
  },
];

export default function MatricesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = SLIDES.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Distancia circular en el rango [-2, -1, 0, 1, 2] para las 5 láminas
  const getRelativeOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 45;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const activeSlide = SLIDES[activeIndex];

  return (
    <section className="py-20 bg-transparent border-b border-neutral-border/60 relative overflow-hidden">
      {/* Sutiles acentos de fondo */}
      <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado superior centrado */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-xs">
            <Layers className="h-3.5 w-3.5 text-accent" />
            <span>Matrices Ambientales · DIM Data Bus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            37 Protocolos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Estructurados
            </span>
          </h2>
        </div>

        {/* Carrusel 3D de ancho total estándar */}
        <div className="w-full flex flex-col items-center">
          <div
            className="relative w-full h-[290px] sm:h-[430px] md:h-[520px] lg:h-[580px] flex items-center justify-center select-none"
            style={{
              perspective: "1600px",
              perspectiveOrigin: "20% 20%", // Observador ubicado a la izquierda y un poco arriba
            }}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {SLIDES.map((slide, index) => {
                const offset = getRelativeOffset(index);
                const absOffset = Math.abs(offset);
                const isActive = offset === 0;

                // Semisolapamiento amplio aprovechando el ancho total (max-w-7xl)
                const xPercent = offset * 24;
                const yPx = offset * 14 - absOffset * 6;
                const zPx = isActive ? 80 : -absOffset * 75;
                const scale = isActive
                  ? isHovered
                    ? 1.03
                    : 1
                  : 1 - absOffset * 0.13;

                // Inclinación 3D: más legible al frente y más pronunciada en las láminas semisolapadas
                const rotateY = isActive
                  ? isHovered
                    ? 3
                    : 12
                  : 22 - offset * 3;
                const rotateX = isActive ? (isHovered ? 1 : 4.5) : 7.5;
                const rotateZ = isActive ? (isHovered ? 0 : -1.2) : -2.2;

                const zIndex = 30 - absOffset * 10;
                const opacity = isActive ? 1 : absOffset === 1 ? 0.88 : 0.65;

                return (
                  <motion.div
                    key={slide.id}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={isActive ? handleDragEnd : undefined}
                    onClick={() => {
                      if (!isActive) setActiveIndex(index);
                    }}
                    onMouseEnter={() => {
                      if (isActive) setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                      if (isActive) setIsHovered(false);
                    }}
                    animate={{
                      x: `${xPercent}%`,
                      y: yPx,
                      z: zPx,
                      scale,
                      rotateY,
                      rotateX,
                      rotateZ,
                      opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 26,
                      mass: 0.9,
                    }}
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                    }}
                    className={`absolute w-[82%] sm:w-[72%] md:w-[65%] lg:w-[62%] max-w-[760px] aspect-[4/3] rounded-2xl overflow-hidden border transition-shadow duration-300 ${
                      isActive
                        ? "cursor-grab active:cursor-grabbing border-primary/30 shadow-[24px_32px_60px_-15px_rgba(10,37,64,0.42)] ring-2 ring-accent/40"
                        : "cursor-pointer border-neutral-border/80 shadow-[14px_20px_36px_-10px_rgba(10,37,64,0.24)] hover:brightness-105"
                    } bg-white`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      draggable={false}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />

                    {/* Velo suave en las láminas de atrás para destacar la lámina central */}
                    {!isActive && (
                      <div
                        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background:
                            offset < 0
                              ? "linear-gradient(135deg, rgba(11,45,57,0.08) 0%, rgba(11,45,57,0.24) 100%)"
                              : "linear-gradient(135deg, rgba(11,45,57,0.15) 0%, rgba(11,45,57,0.32) 100%)",
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Controles + Descripción sencilla debajo del carrusel (máximo 2 líneas) */}
          <div className="mt-6 flex flex-col items-center space-y-4 max-w-3xl mx-auto text-center px-2">
            <div className="flex items-center justify-center space-x-5">
              <button
                onClick={handlePrev}
                aria-label="Imagen anterior"
                className="p-2.5 rounded-xl bg-white border border-neutral-border hover:border-primary/40 text-primary hover:bg-primary-soft/50 shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-2">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Ver ${s.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-neutral-border hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Siguiente imagen"
                className="p-2.5 rounded-xl bg-white border border-neutral-border hover:border-primary/40 text-primary hover:bg-primary-soft/50 shadow-xs hover:shadow transition-all cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Descripción breve (a lo sumo 2 líneas) */}
            <p className="text-sm sm:text-base text-neutral-text/85 font-light leading-relaxed line-clamp-2">
              <strong className="font-bold text-primary">
                {activeSlide.title} ({activeSlide.protocols}):
              </strong>{" "}
              {activeSlide.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
