"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (isPrivacyOpen || isTermsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPrivacyOpen, isTermsOpen]);

  const laws = t("footer.laws") as string[];
  const privacyData = t("footer.privacyModal");
  const termsData = t("footer.termsModal");

  return (
    <footer className="bg-marine-dark text-gray-300 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle graphic accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">

          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2.5">
              <img src="/logo_geosint_2.svg" alt="GeoSint Logo" className="h-8 w-auto object-contain" />
              <span className="text-xl font-heading font-extrabold tracking-tight text-white flex items-center">
                Geo<span className="text-accent">Sint</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              {t("footer.brandDesc")}
            </p>
            {/* Social icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center cursor-pointer" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center cursor-pointer" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center cursor-pointer" aria-label="WhatsApp">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.592 1.97 14.12 .946 11.49.945c-5.442 0-9.869 4.372-9.873 9.802-.001 1.83.488 3.619 1.416 5.176l-1.041 3.8L5.952 19.3c1.517.828 3.033 1.254 6.695.854zm10.982-6.2c-.3-.15-1.774-.875-2.048-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.511-1.748-4.71-3.411-5.174-4.21-.175-.3-.025-.463.124-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C8.75 6.6 8 4.775 7.674 3.975c-.318-.765-.64-.659-.877-.671-.227-.012-.488-.013-.75-.013-.262 0-.687.1-.1.049 1.05.95 1.6 2.525 1.625 2.575.025.05 1.55 2.366 3.756 3.32.524.227 1.05.362 1.488.5.525.162 1.001.137 1.376.082.418-.062 1.275-.52 1.455-1.02.18-.5.18-.925.125-1.02-.055-.095-.205-.15-.505-.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4 text-left">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">{t("footer.navigationTitle")}</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-accent transition-colors font-light cursor-pointer">{t("navbar.home")}</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent transition-colors font-light cursor-pointer">{t("navbar.howItWorks")}</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-accent transition-colors font-light cursor-pointer">{t("navbar.successStories")}</a>
              </li>
            </ul>
          </div>

          {/* Legal and compliance (2.5 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">{t("footer.legalTitle")}</h4>
            <ul className="space-y-2.5 text-xs font-technical">
              {laws.map((law, idx) => (
                <li key={idx}>
                  <span className="text-gray-400 font-light block">{law}</span>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-accent transition-colors font-light text-left font-body cursor-pointer"
                >
                  {t("footer.privacyLink")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-accent transition-colors font-light text-left font-body cursor-pointer"
                >
                  {t("footer.termsLink")}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] text-gray-500 font-medium">
          <div className="text-center md:text-left">
            <span>{t("footer.copyright").replace("{year}", currentYear.toString())}</span>
          </div>
          <div className="flex space-x-1 items-center">
            <span>{t("footer.slogan")}</span>
          </div>
        </div>

      </div>

      {isPrivacyOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="bg-[#0b1a30] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#071324]">
              <h3 className="text-sm uppercase font-extrabold tracking-widest text-white">
                {t("footer.privacyLink")}
              </h3>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10 cursor-pointer"
                aria-label={language === "es" ? "Cerrar" : "Close"}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-gray-300 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10 text-left">
              <h2 className="text-lg font-heading font-extrabold text-white text-left border-b border-white/5 pb-4">
                {privacyData.title}
              </h2>

              {privacyData.sections.map((section: any, idx: number) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                    {section.title}
                  </h4>
                  {section.paragraphs.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="text-gray-400 font-light">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex justify-end bg-[#071324]">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="px-5 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                {t("footer.modalUnderstood")}
              </button>
            </div>
          </div>
        </div>
      )}

      {isTermsOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsTermsOpen(false)}
        >
          <div
            className="bg-[#0b1a30] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#071324]">
              <h3 className="text-sm uppercase font-extrabold tracking-widest text-white">
                {t("footer.termsLink")}
              </h3>
              <button
                onClick={() => setIsTermsOpen(false)}
                className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10 cursor-pointer"
                aria-label={language === "es" ? "Cerrar" : "Close"}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-gray-300 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10 text-left">
              <h2 className="text-lg font-heading font-extrabold text-white text-left border-b border-white/5 pb-4">
                {termsData.title}
              </h2>

              {termsData.sections.map((section: any, idx: number) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                    {section.title}
                  </h4>
                  {section.paragraphs.map((p: string, pIdx: number) => (
                    <p key={pIdx} className="text-gray-400 font-light">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex justify-end bg-[#071324]">
              <button
                onClick={() => setIsTermsOpen(false)}
                className="px-5 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:shadow-accent/20 cursor-pointer"
              >
                {t("footer.modalUnderstood")}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
