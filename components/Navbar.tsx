"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/clinica", label: "La Clínica" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Rendered directly without box/card/borders as requested */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-95"
            aria-label="Clínica Dental Doctores Rey - Inicio"
          >
            <img
              src="/images/logo.png"
              alt="Clínica Dental Doctores Rey"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-brand-navy font-semibold"
                      : "text-slate-600 hover:text-brand-navy font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="tel:983372504"
              className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-brand-navy transition-colors"
              aria-label="Llamar al 983 37 25 04"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-blue" />
              <span>983 37 25 04</span>
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-brand-navy hover:bg-brand-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Pedir Cita</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="tel:983372504"
              className="p-2 text-slate-700 hover:text-brand-navy rounded-lg"
              aria-label="Llamar al 983 37 25 04"
            >
              <Phone className="w-5 h-5 text-brand-blue" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-navy hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base transition-colors ${
                    isActive
                      ? "text-brand-navy font-semibold bg-brand-light"
                      : "text-slate-700 hover:text-brand-navy hover:bg-slate-50 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col space-y-3">
            <a
              href="tel:983372504"
              className="flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-blue" />
              <span>983 37 25 04</span>
            </a>
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-navy text-white text-sm font-medium hover:bg-brand-dark transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Pedir Cita</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
