"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);    // Attempt unmuted autoplay
  const { t } = useLanguage();

  useEffect(() => {
    // Attempt play on mount
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => { })
        .catch(() => {
          // If unmuted autoplay is blocked by browser policies, mute and try again to guarantee it plays immediately
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
      className="relative min-h-screen pt-28 pb-10 flex flex-col justify-center items-center bg-radial from-accent-soft/20 via-neutral-bg to-neutral-bg overflow-hidden text-center"
    >
      {/* Background grids and abstract decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

        {/* Copywriting Section */}
        <div className="max-w-5xl mx-auto space-y-6 mb-12 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>{t("hero.tag")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight tracking-tight">
            <span className="font-extrabold">{t("hero.title")}</span>{" "}
            <span className="font-light block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {t("hero.subtitle")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-text/85 max-w-2xl mx-auto font-light leading-relaxed">
            {t("hero.desc")}
          </p>
        </div>

        {/* Centerpiece Video Player Container */}
        <div className="w-full max-w-5xl relative aspect-video">
          {/* HTML5 Video element */}
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
