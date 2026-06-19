"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
              Inicio
            </a>
            {/* 
            <a
              href="#modules"
              className="text-neutral-text/900 hover:text-primary font-medium transition-colors"
            >
              Soluciones
            </a>
            */}
            <a
              href="#how-it-works"
              className="text-neutral-text/900 hover:text-primary font-medium transition-colors"
            >
              DIM Data Bus
            </a>
            <a
              href="#success-stories"
              className="text-neutral-text/900 hover:text-primary font-medium transition-colors"
            >
              Casos de Éxito
            </a>
            <a
              href="/ddb"
              className="bg-primary text-white hover:bg-primary-hover px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center space-x-1.5"
            >
              <span>Ingresar</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-border transition-all duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Inicio
            </a>
            {/* 
            <a
              href="#modules"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Soluciones
            </a>
            */}
            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              DIM Data Bus
            </a>
            <a
              href="#success-stories"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              Casos de Éxito
            </a>
            <a
              href="/ddb"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full bg-primary text-white hover:bg-primary-hover px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Ingresar</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
