import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/70 text-slate-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Identity & Overview */}
          <div className="space-y-4">
            {/* Logo rendered directly as requested - no wrapper card, box, or borders */}
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-95"
              aria-label="Clínica Dental Doctores Rey - Inicio"
            >
              <img
                src="/images/logo.png"
                alt="Clínica Dental Doctores Rey"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Más de 30 años dedicados al cuidado bucodental en el centro de Valladolid. Especialistas pioneros en implantología mínimamente invasiva MIDI y odontología integral.
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs font-medium text-slate-500">
                Dr. Antonio Rey Gil · Dra. Ana Rey · Dr. Alberto Rey
              </span>
            </div>
          </div>

          {/* Column 2: Páginas principales */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-navy transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/tratamientos"
                  className="hover:text-brand-navy transition-colors"
                >
                  Tratamientos
                </Link>
              </li>
              <li>
                <Link
                  href="/clinica"
                  className="hover:text-brand-navy transition-colors"
                >
                  La Clínica
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-brand-navy transition-colors"
                >
                  Contacto y Citas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tratamientos destacados */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Tratamientos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/tratamientos#midi"
                  className="hover:text-brand-navy transition-colors"
                >
                  Implantes MIDI (Sin Cirugía Invasiva)
                </Link>
              </li>
              <li>
                <Link
                  href="/tratamientos#estetica"
                  className="hover:text-brand-navy transition-colors"
                >
                  Estética Dental y Carillas
                </Link>
              </li>
              <li>
                <Link
                  href="/tratamientos#microabrasion"
                  className="hover:text-brand-navy transition-colors"
                >
                  Microabrasión del Esmalte
                </Link>
              </li>
              <li>
                <Link
                  href="/tratamientos#anestesia"
                  className="hover:text-brand-navy transition-colors"
                >
                  Anestesia Digital Sin Dolor
                </Link>
              </li>
              <li>
                <Link
                  href="/tratamientos#neuromuscular"
                  className="hover:text-brand-navy transition-colors"
                >
                  Odontología Neuromuscular y ATM
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto y Horarios */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Contacto y Horario
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-blue mr-2.5 mt-0.5 shrink-0" />
                <span>C/ Santiago 19-21, 1-D, 47001 Valladolid</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-brand-blue mr-2.5 shrink-0" />
                <a
                  href="tel:983372504"
                  className="hover:text-brand-navy transition-colors font-medium text-slate-900"
                >
                  983 37 25 04
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-brand-blue mr-2.5 shrink-0" />
                <a
                  href="mailto:antonioreygil@gmail.com"
                  className="hover:text-brand-navy transition-colors break-all"
                >
                  antonioreygil@gmail.com
                </a>
              </div>
              <div className="flex items-start pt-2 border-t border-slate-200/60">
                <Clock className="w-4 h-4 text-brand-blue mr-2.5 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className="font-medium text-slate-700">Lunes a Jueves:</p>
                  <p>9:30 - 13:30 | 16:00 - 20:00</p>
                  <p className="font-medium text-slate-700 mt-1">Viernes:</p>
                  <p>9:30 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Clínica Dental Doctores Rey. Todos los derechos reservados. Valladolid.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contacto" className="hover:text-slate-800 transition-colors">
              Aviso Legal
            </Link>
            <Link href="/contacto" className="hover:text-slate-800 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/contacto" className="hover:text-slate-800 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
