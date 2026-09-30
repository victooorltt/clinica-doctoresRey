import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Calendar,
} from "lucide-react";
import ContactoForm from "@/components/ContactoForm";
import ContactoFAQ from "@/components/ContactoFAQ";

export const metadata: Metadata = {
  title: "Contacto y Cita Previa en Valladolid | Clínica Doctores Rey",
  description:
    "Solicite su cita en Clínica Dental Doctores Rey en C/ Santiago 19-21, 1-D, Valladolid. Diagnóstico funcional y odontología avanzada dirigida por el Dr. Antonio Rey Gil. Teléfono: 983 37 25 04.",
};

export default function ContactoPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION: Full-bleed standard with gradient overlay */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-white overflow-hidden border-b border-slate-100">
        {/* Right Photo Container: Full-bleed, free (NOT inside cards, containers or grid columns) */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[54%] h-full pointer-events-none">
          <img
            src="/images/hero-contacto.webp"
            alt="Atención personalizada en Clínica Dental Doctores Rey Valladolid"
            className="w-full h-full object-cover object-center opacity-90 lg:opacity-100"
            fetchPriority="high"
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40 lg:hidden" />
          {/* Desktop Left-to-Right Horizontal Fade: Starts completely white, dissolving any edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white via-15% via-white/60 via-40% to-transparent to-85% hidden lg:block" />
          {/* Desktop Subtle Vertical Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/15 hidden lg:block" />
        </div>

        {/* Content Container (z-10 on left, constrained width) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 w-full">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.14]">
              Un buen equipo profesional a su servicio en Valladolid
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Equipo médico encabezado por el{" "}
              <span className="text-slate-900 font-semibold">
                Doctor Antonio Rey Gil
              </span>
              . Diagnóstico honesto y tratamientos avanzados en Valladolid.
            </p>

            {/* Quick direct actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-navy hover:bg-brand-dark transition-all duration-150 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Pedir cita online</span>
              </a>
              <a
                href="tel:983372504"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-blue" />
                <span>983 37 25 04</span>
              </a>
            </div>

            {/* Ubicación y accesos rápidos */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
              <div className="flex items-center">
                <MapPin className="w-3.5 h-3.5 text-brand-blue mr-1.5 shrink-0" />
                <span>Calle Santiago 19-21, 1-D (Pleno centro, Valladolid)</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 text-brand-blue mr-1.5 shrink-0" />
                <span>Lunes a Viernes con cita previa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CANALES DIRECTOS DE CONTACTO (Tarjetas dinámicas) */}
      <section className="py-10 sm:py-12 bg-slate-50/80 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Tarjeta Teléfono */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-brand-blue/60 hover:shadow-sm transition-all group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-brand-light text-brand-navy flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5 mb-1.5">
                  983 37 25 04
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Llámenos directamente para concertar o reprogramar su cita médica, o consultar dudas sobre tratamientos.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href="tel:983372504"
                  className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-blue transition-colors"
                >
                  <span>Llamar a la clínica</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Tarjeta Email */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-brand-blue/60 hover:shadow-sm transition-all group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-brand-light text-brand-navy flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 mb-1.5 break-all">
                  antonioreygil@gmail.com
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal para envío de radiografías previas, consultas clínicas no urgentes o segundas opiniones.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href="mailto:antonioreygil@gmail.com"
                  className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-blue transition-colors"
                >
                  <span>Escribir correo</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Tarjeta Ubicación */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:border-brand-blue/60 hover:shadow-sm transition-all group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-brand-light text-brand-navy flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">
                  C/ Santiago 19-21, 1-D
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  47001 Valladolid (calle peatonal entre Plaza Mayor y Plaza de Zorrilla). Edificio con ascensor.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href="#mapa"
                  className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-blue transition-colors"
                >
                  <span>Ver mapa</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN PRINCIPAL DE CONTACTO: FORMULARIO + TARJETA VISUAL */}
      <section id="formulario" className="py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Columna Izquierda: Formulario interactivo ContactoForm */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  Solicitud de Cita y Consulta Previa
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Rellene los datos a continuación indicando su motivo de consulta. Nuestro equipo de atención al paciente se pondrá en contacto con usted para confirmar la fecha y hora definitivas.
                </p>
              </div>

              <ContactoForm />
            </div>

            {/* Columna Derecha: Tarjeta visual de recepción con datos directos */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Fotografía de la Recepción */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/clinica-recepcion.webp"
                    alt="Recepción luminosa y sala de espera de Clínica Dental Doctores Rey en Valladolid"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Datos de Atención Directa
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Si lo prefiere, contáctenos de forma directa sin esperar confirmación por formulario.
                    </p>
                  </div>

                  {/* Vías directas */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <a
                      href="tel:983372504"
                      className="flex items-center justify-between p-3 rounded-xl bg-brand-light/60 hover:bg-brand-light text-slate-800 transition-colors border border-brand-blue/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-navy shadow-2xs">
                          <Phone className="w-4 h-4 text-brand-blue" />
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-500 font-medium">Teléfono de citas</p>
                          <p className="font-bold text-slate-900">983 37 25 04</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-brand-navy bg-white px-2.5 py-1 rounded-md shadow-2xs">
                        Llamar
                      </span>
                    </a>

                    <a
                      href="mailto:antonioreygil@gmail.com"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors border border-slate-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-navy shadow-2xs">
                          <Mail className="w-4 h-4 text-brand-blue" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] text-slate-500 font-medium">Email clínico</p>
                          <p className="font-semibold text-slate-900 truncate">antonioreygil@gmail.com</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md shadow-2xs shrink-0">
                        Escribir
                      </span>
                    </a>

                    <a
                      href="#mapa"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors border border-slate-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-navy shadow-2xs">
                          <MapPin className="w-4 h-4 text-brand-blue" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] text-slate-500 font-medium">Ubicación</p>
                          <p className="font-semibold text-slate-900 truncate">C/ Santiago 19-21, 1-D, Valladolid</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md shadow-2xs shrink-0">
                        Ver mapa
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UBICACIÓN Y MAPA */}
      <section id="mapa" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200/70 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Cómo llegar a la clínica
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Estamos ubicados en Calle Santiago 19-21, 1-D, la principal arteria peatonal y comercial que une la Plaza Mayor con la Plaza de Zorrilla y Campo Grande.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[400px] sm:h-[480px] bg-slate-100">
            <iframe
              title="Ubicación Clínica Dental Doctores Rey en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.429388302061!2d-4.7297883!3d41.6496464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4712c703565e3b%3A0xc0c8d103b41b9e83!2sCalle%20Santiago%2C%2019%2C%2047001%20Valladolid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-2 px-1">
            <span>Calle Santiago 19-21, 1-D, 47001 Valladolid</span>
            <a
              href="https://maps.google.com/?q=Calle+Santiago+19-21+47001+Valladolid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy font-semibold hover:underline inline-flex items-center"
            >
              <span>Abrir ruta en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. PREGUNTAS FRECUENTES SOBRE SU CITA */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Preguntas Frecuentes sobre la Consulta
            </h2>
          </div>

          <ContactoFAQ />
        </div>
      </section>

      {/* 6. BANNER FINAL DE LLAMADA A LA ACCIÓN */}
      <section className="bg-brand-navy py-12 sm:py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Estamos a su entera disposición en Valladolid
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Le esperamos en Calle Santiago 19-21 para ofrecerle un cuidado odontológico riguroso, honesto y cercano para toda la familia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-navy bg-white hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 mr-2 text-brand-navy" />
              <span>Solicitar cita previa</span>
            </a>
            <a
              href="tel:983372504"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-dark/70 border border-white/20 hover:bg-brand-dark transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-sky" />
              <span>Llamar al 983 37 25 04</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
