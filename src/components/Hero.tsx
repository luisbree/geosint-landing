"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Activity, ShieldCheck, Database } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Autoplay defaults to true
  const [isMuted, setIsMuted] = useState(true);     // Autoplay must be muted
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Attempt play on mount (helps with autoplay edge cases)
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Video playback error:", err));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newProgress = Number(e.target.value);
    const newTime = (newProgress / 100) * duration;
    videoRef.current.currentTime = newTime;
    setProgress(newProgress);
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center bg-radial from-accent-soft/20 via-neutral-bg to-neutral-bg overflow-hidden text-center"
    >
      {/* Background grids and abstract decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Copywriting Section */}
        <div className="max-w-4xl mx-auto space-y-6 mb-12 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 bg-primary-soft text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-primary/15 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            <span>Tecnología y Medio Ambiente Integrados</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight tracking-tight">
            GeoSint: El Poder de tus Datos,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Decisiones Fundamentadas.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-text/85 max-w-2xl mx-auto font-light leading-relaxed">
            Análisis Ambiental Autogestivo para Consultoras. Transforma la
            información geoespacial y series temporales en acción con precisión,
            autonomía y cumplimiento normativo.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2 w-full sm:w-auto">
            <a
              href="#modules"
              className="bg-primary text-white hover:bg-primary-hover px-8 py-4 rounded-xl font-bold text-center transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Empiece a Tomar Decisiones Fundamentadas
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center bg-white text-primary border border-primary/20 hover:bg-primary/5 px-8 py-4 rounded-xl font-bold transition-all duration-200 w-full sm:w-auto"
            >
              Solicitar Demo Personalizada
            </a>
          </div>
        </div>

        {/* Centerpiece Prominent Video Player Container (70-80% desktop width) */}
        <div className="w-full max-w-5xl relative rounded-3xl overflow-hidden shadow-2xl border border-primary/15 bg-marine-dark aspect-video group">
          {/* Top terminal-style info bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-marine-medium/90 text-[10px] text-gray-400 font-technical border-b border-white/5 relative z-30">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span>DIM_Data_Bus_Overview.mp4 // live_simulation</span>
          </div>

          {/* HTML5 Video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover relative z-10"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            loop
            muted={isMuted}
            autoPlay
            playsInline
            preload="metadata"
            poster="/video_poster.png"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-winding-river-in-a-forest-42526-large.mp4"
              type="video/mp4"
            />
            {/* Accessibility captions */}
            <track
              kind="captions"
              src="/subtitles.vtt"
              srcLang="es"
              label="Español"
              default
            />
            Su navegador no soporta reproducción de videos HTML5.
          </video>

          {/* Overlay Play State indicator */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all z-20"
              aria-label="Reproducir video"
            >
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transform transition-all scale-100 hover:scale-110">
                <Play className="h-8 w-8 text-white fill-white translate-x-0.5" />
              </div>
            </button>
          )}

          {/* Micro-simulation cards overlaying on top left / top right corners */}
          <div className="absolute top-12 left-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="glass-dark p-2 rounded-lg border border-white/5 space-y-1 text-left">
              <div className="flex items-center space-x-1.5">
                <Database className="h-3 w-3 text-accent" />
                <span className="text-[9px] font-technical text-gray-300">DIM Bus payload</span>
              </div>
              <div className="text-[10px] font-bold text-white font-technical">Series: 200 pts/s</div>
            </div>
          </div>

          <div className="absolute top-12 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="glass-dark p-2 rounded-lg border border-white/5 space-y-1 text-right">
              <div className="flex items-center space-x-1.5 justify-end">
                <span className="text-[9px] font-technical text-gray-300">Cumplimiento</span>
                <Activity className="h-3 w-3 text-accent" />
              </div>
              <div className="text-[10px] font-bold text-accent font-technical">Ley 25.688 / 25.675</div>
            </div>
          </div>

          {/* Bottom Hover Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2 z-20">
            {/* Progress Slider */}
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1 bg-white/20 hover:h-1.5 rounded-lg appearance-none cursor-pointer accent-accent transition-all"
                aria-label="Progreso del video"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center space-x-4">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="hover:text-accent transition-colors"
                  aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                >
                  {isPlaying ? (
                    <Pause className="h-4.5 w-4.5 fill-current" />
                  ) : (
                    <Play className="h-4.5 w-4.5 fill-current" />
                  )}
                </button>

                {/* Time Indicator */}
                <span className="font-technical">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Mute/Unmute Control */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="hover:text-accent transition-colors flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/10"
                  aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="h-4 w-4 text-accent" />
                      <span className="text-[10px] font-bold">Activar Sonido</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4 text-accent animate-pulse" />
                      <span className="text-[10px] font-bold">Silenciar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar (Balanced Grid) */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 pt-12 mt-12 border-t border-primary/10 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-primary font-technical">100%</span>
            <span className="text-[10px] md:text-xs text-neutral-text/70 uppercase tracking-wider font-semibold font-technical mt-1">
              Plataforma Autogestiva
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-primary font-technical">3D</span>
            <span className="text-[10px] md:text-xs text-neutral-text/70 uppercase tracking-wider font-semibold font-technical mt-1">
              Visualización e Informes
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-primary font-technical">B2B</span>
            <span className="text-[10px] md:text-xs text-neutral-text/70 uppercase tracking-wider font-semibold font-technical mt-1">
              Sustento Técnico-Legal
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
