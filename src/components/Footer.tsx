"use client";

import React from "react";
import { Activity, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-marine-dark text-gray-300 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle graphic accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg flex items-center justify-center border border-white/5">
                <Activity className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xl font-heading font-extrabold tracking-tight text-white flex items-center">
                Geo<span className="text-accent">Sint</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Plataforma autogestiva de inteligencia y modelado hídrico ambiental para consultoras. Sustentando decisiones técnicas y normativas con total autonomía y precisión 3D.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center" aria-label="Website">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">Navegación</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-accent transition-colors font-light">Inicio</a>
              </li>
              <li>
                <a href="#modules" className="hover:text-accent transition-colors font-light">Soluciones Autogestivas</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent transition-colors font-light">DIM Data Bus Core</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-accent transition-colors font-light">Casos de Éxito</a>
              </li>
            </ul>
          </div>

          {/* Legal and compliance (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">Sustento Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-gray-400 font-technical font-light block">Ley Nacional N° 25.675 (EIA)</span>
              </li>
              <li>
                <span className="text-gray-400 font-technical font-light block">Ley Nacional N° 25.688 (Régimen de Aguas)</span>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors font-light">Política de Privacidad</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors font-light">Términos de Servicio</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] text-gray-500 font-medium">
          <div className="text-center md:text-left">
            <span>GeoSint © {currentYear}. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-1 items-center">
            <span>Decisiones Fundamentadas en Inteligencia Ambiental.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
