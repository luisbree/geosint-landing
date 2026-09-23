"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, ShieldCheck, WifiOff, FileCheck2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => { })
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch((err) => {
              console.log("Autoplay failed:", err);
            });
          }
        });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center bg-radial from-accent-soft/20 via-neutral-bg to-neutral-bg overflow-hidden text-center"
    >
      {/* Background grids and abstract decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

        {/* Copywriting Section */}
        <div className="w-full max-w-6xl mx-auto space-y-6 mb-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>{t("hero.tag")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight tracking-tight max-w-6xl">
            <span className="font-extrabold">{t("hero.title")}</span>{" "}
            <span className="font-light block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("hero.subtitle")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-text/85 max-w-3xl mx-auto font-light leading-relaxed">
            {t("hero.desc")}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-primary text-white hover:bg-primary-hover px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2 cursor-pointer"
            >
              <span>{t("hero.ctaTrial")}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#plataforma"
              className="bg-white text-primary hover:bg-primary-soft/50 border border-primary/20 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-xs hover:shadow cursor-pointer"
            >
              <span>{t("hero.ctaPlatform")}</span>
            </a>
          </div>

          {/* 3 Pillar Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-3 text-xs font-technical text-neutral-text/80">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>{t("hero.badges.sha")}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <WifiOff className="h-4 w-4 text-accent" />
              <span>{t("hero.badges.offline")}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <FileCheck2 className="h-4 w-4 text-accent" />
              <span>{t("hero.badges.protocols")}</span>
            </div>
          </div>
        </div>

        {/* Centerpiece Video Player Container */}
        <div className="w-full max-w-7xl relative aspect-video rounded-2xl overflow-hidden border border-neutral-border shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            autoPlay
            playsInline
            preload="metadata"
            poster="/video_poster.png"
          >
            <source
              src="/video_01.mp4"
              type="video/mp4"
            />
            {t("hero.videoFallback")}
          </video>
        </div>

      </div>
    </section>
  );
}
