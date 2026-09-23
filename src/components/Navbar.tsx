"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ddb.geosint.com.ar";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".lang-selector")) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-neutral-border ${
        scrolled
          ? "shadow-md py-3"
          : "shadow-xs py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo_geosint_2.svg" alt="GeoSint Logo" className="h-8 w-auto object-contain" />
            <span className="text-2xl font-heading font-extrabold tracking-tight text-primary flex items-center">
              Geo<span className="text-accent">Sint</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <a
              href="#home"
              className="text-neutral-text hover:text-primary font-medium transition-colors"
            >
              {t("navbar.home")}
            </a>
            
            <a
              href="#plataforma"
              className="text-neutral-text hover:text-primary font-medium transition-colors"
            >
              {t("navbar.platform")}
            </a>

            <a
              href="#confianza"
              className="text-neutral-text hover:text-primary font-medium transition-colors"
            >
              {t("navbar.traceability")}
            </a>

            <a
              href="#digital-twin"
              className="text-neutral-text hover:text-primary font-medium transition-colors"
            >
              {t("navbar.digitalTwin")}
            </a>

            <a
              href="#success-stories"
              className="text-neutral-text hover:text-primary font-medium transition-colors"
            >
              {t("navbar.successStories")}
            </a>
            
            <a
              href="#precios"
              className="text-neutral-text hover:text-primary font-medium transition-colors"
            >
              {t("navbar.pricing")}
            </a>
            
            {/* Language Selector Dropdown */}
            <div className="relative lang-selector flex items-center">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1 text-neutral-text hover:text-primary font-semibold text-xs transition-colors px-2 py-1.5 rounded-lg focus:outline-hidden cursor-pointer"
              >
                <Globe className="h-4 w-4 text-primary/80" />
                <span className="uppercase tracking-wider">{language}</span>
                <ChevronDown className={`h-3 w-3 text-neutral-text/60 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-neutral-border rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => {
                      setLanguage("es");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                      language === "es" ? "text-primary bg-primary-soft/40" : "text-neutral-text hover:bg-neutral-bg"
                    }`}
                  >
                    <span>Español (AR)</span>
                    {language === "es" && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${
                      language === "en" ? "text-primary bg-primary-soft/40" : "text-neutral-text hover:bg-neutral-bg"
                    }`}
                  >
                    <span>English</span>
                    {language === "en" && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </button>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex items-center space-x-3">
              <a
                href={`${appUrl}/ddb`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-semibold text-xs px-3 py-2 transition-colors"
              >
                {t("navbar.enter")}
              </a>

              <a
                href="#contact"
                className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 shadow-xs hover:shadow flex items-center space-x-1.5"
              >
                <span>{t("navbar.trialCta")}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Button quick toggle */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center space-x-1 text-xs font-bold font-technical text-primary bg-primary-soft/50 px-2.5 py-1 rounded-md"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="uppercase">{language}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-border transition-all duration-200 animate-in slide-in-from-top duration-150">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.home")}
            </a>
            
            <a
              href="#plataforma"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.platform")}
            </a>

            <a
              href="#confianza"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.traceability")}
            </a>

            <a
              href="#digital-twin"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.digitalTwin")}
            </a>

            <a
              href="#success-stories"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.successStories")}
            </a>

            <a
              href="#precios"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.pricing")}
            </a>

            <div className="pt-2 border-t border-neutral-border flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-white hover:bg-primary-hover px-4 py-2.5 rounded-lg font-semibold text-sm text-center transition-all shadow-xs"
              >
                {t("navbar.trialCta")}
              </a>
              <a
                href={`${appUrl}/ddb`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-primary border border-primary/20 hover:bg-primary-soft/40 px-4 py-2.5 rounded-lg font-semibold text-sm text-center transition-all"
              >
                {t("navbar.enter")}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
