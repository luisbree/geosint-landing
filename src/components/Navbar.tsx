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
          : "shadow-sm py-5"
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
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-neutral-text/900 hover:text-primary font-medium transition-colors"
            >
              {t("navbar.home")}
            </a>
            
            <a
              href="#how-it-works"
              className="px-3.5 py-1.5 rounded-full text-accent font-semibold bg-accent-soft hover:bg-accent hover:text-white transition-all duration-200 border border-accent/15"
            >
              {t("navbar.howItWorks")}
            </a>
            
            <a
              href="#success-stories"
              className="text-neutral-text/900 hover:text-primary font-medium transition-colors"
            >
              {t("navbar.successStories")}
            </a>
            
            {/* Language Selector Dropdown */}
            <div className="relative lang-selector flex items-center">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 text-neutral-text/900 hover:text-primary font-semibold text-sm transition-colors px-2 py-1.5 rounded-lg focus:outline-hidden cursor-pointer"
              >
                <Globe className="h-4.5 w-4.5 text-primary/80" />
                <span className="uppercase text-xs tracking-wider">{language}</span>
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

            <a
              href={`${appUrl}/ddb`}
              className="bg-primary text-white hover:bg-primary-hover px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center space-x-1.5"
            >
              <span>{t("navbar.enter")}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
        <div className="md:hidden bg-white border-b border-neutral-border transition-all duration-200 animate-in slide-in-from-top duration-150">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.home")}
            </a>
            
            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-accent bg-accent-soft hover:bg-accent hover:text-white transition-all duration-200"
            >
              {t("navbar.howItWorks")}
            </a>
            
            <a
              href="#success-stories"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t("navbar.successStories")}
            </a>
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-3 border-t border-neutral-border/60 flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-text/60 uppercase tracking-wider flex items-center">
                <Globe className="h-4 w-4 mr-2 text-primary" /> {language === "es" ? "Idioma" : "Language"}
              </span>
              <div className="flex bg-neutral-bg p-0.5 rounded-lg border border-neutral-border">
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    language === "es" ? "bg-white text-primary shadow-xs" : "text-neutral-text/70"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    language === "en" ? "bg-white text-primary shadow-xs" : "text-neutral-text/70"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href={`${appUrl}/ddb`}
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full bg-primary text-white hover:bg-primary-hover px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>{t("navbar.enter")}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
