import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Activity,
  CheckCircle2,
  Sparkles,
  Stethoscope,
  Smile,
  Layers,
  HeartPulse,
  ChevronRight,
  Building2,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clínica Dental en Valladolid | Especialistas en Implantes Dentales Doctores Rey",
  description:
    "Clínica dental en el centro de Valladolid. Especialistas en implantes dentales, técnica MIDI sin cirugía invasiva, diagnóstico neuromuscular con kinesiógrafo y tratamientos indoloros.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-brand-blue selection:text-white">
      {/* =========================================================================
          1. HERO SECTION (Split View with Gradient Mask & Quick Coordinates)
      ========================================================================= */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-white overflow-hidden border-b border-slate-100">
        {/* Right Photo Container: Full-bleed, free (NOT inside cards, containers or grid columns) */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[54%] h-full pointer-events-none">
          <img
            src="/images/hero-home.webp"
            alt="Clínica Dental Doctores Rey en Valladolid"
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
            {/* Existing Headline, copy, action buttons, and trust indicators */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Dentista especialista en implantes en Valladolid
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Creadores de la técnica mínimamente invasiva MIDI Technique © Doctores Rey.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-white bg-brand-navy hover:bg-brand-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Pedir Cita Online
              </Link>
              <a
                href="tel:983372504"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-blue" />
                Llamar 983 37 25 04
              </a>
            </div>

            {/* Clean Location Line */}
            <div className="pt-4 border-t border-slate-100 flex items-center text-xs sm:text-sm text-slate-500">
              <MapPin className="w-4 h-4 mr-1.5 text-brand-blue shrink-0" />
              <span>C/ Santiago 19-21, 1-D · 47001 Valladolid</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. EQUIPO MÉDICO: LOS DOCTORES REY (Foto Oficial Dr. Alberto, Dr. Antonio y Dra. Ana)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Foto del Equipo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white group">
                <img
                  src="/images/los-tres-doctores.webp"
                  alt="Equipo médico Clínica Dental Doctores Rey: Dr. Alberto Rey, Dr. Antonio Rey Gil y Dra. Ana Rey"
                  className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Columna Contenido */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                El equipo médico: Los Doctores Rey
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Atención directa y cercana con los doctores titulares en el centro
                de Valladolid: el <strong className="text-slate-900 font-semibold">Dr. Antonio Rey Gil</strong>,
                la <strong className="text-slate-900 font-semibold">Dra. Ana Rey</strong> y
                el <strong className="text-slate-900 font-semibold">Dr. Alberto Rey</strong>.
                Más de 20 años de experiencia y creadores de la técnica de implantes
                mínimamente invasiva MIDI.
              </p>

              {/* Puntos destacados */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-medium">Sin rotación:</strong> Siempre le atiende su mismo doctor facultativo.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-medium">Técnica MIDI:</strong> Implantes sin cortes agresivos ni puntos.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-medium">Diagnóstico honesto:</strong> Solo los tratamientos que realmente necesita.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/clinica"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg text-white bg-brand-navy hover:bg-brand-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                >
                  Conocer al equipo médico
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SECCIÓN CON FOTOGRAFÍA 1: Diagnóstico Funcional Único en Valladolid
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Copy Clínico (Left on desktop) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                Diagnóstico funcional previo
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Analizamos la articulación (ATM) y los músculos faciales antes de
                cualquier procedimiento para garantizar resultados estables y sin molestias.
              </p>

              {/* 3 Clinical Points */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/70 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Kinesiógrafo 3D
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Mide el movimiento mandibular tridimensional en tiempo real.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/70 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Electromiógrafo (EMG)
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Evalúa la actividad muscular para calibrar la mordida.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-200/70 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Equilibrio Oclusal
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Armonía duradera entre dientes, músculos y articulación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/clinica#tecnologia"
                  className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-dark transition-colors"
                >
                  Conocer más sobre diagnóstico funcional
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Columna Foto (Right on desktop) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 group">
                <img
                  src="/images/tech-diagnostico.webp"
                  alt="Gabinete de diagnóstico neuromuscular con kinesiógrafo y electromiógrafo en Valladolid"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECCIÓN CON FOTOGRAFÍA 2: Tratamientos Sin Dolor & Mínima Invasión
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Foto (Left on desktop) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 group">
                <img
                  src="/images/laser-microabrasion.webp"
                  alt="Instrumental de precisión de microabrasión y láser terapéutico sin dolor"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Columna Copy (Right on desktop) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
                Tratamientos sin dolor
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Tecnología diseñada para eliminar la ansiedad y el dolor: intervenciones suaves que respetan el tejido natural.
              </p>

              {/* 4 Pain-Free Technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Tech 1: Microabrasión */}
                <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-xl transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky mb-2.5">
                      <Sparkles className="w-4 h-4 text-brand-sky" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Microabrasión por Aire
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Tratamiento de caries incipientes por aire, sin torno ni vibración.
                    </p>
                  </div>
                </div>

                {/* Tech 2: Láser terapéutico */}
                <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-xl transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky mb-2.5">
                      <Zap className="w-4 h-4 text-brand-sky" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Láser Oralia D Light
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Bioestimulación y cicatrización acelerada sin bisturí.
                    </p>
                  </div>
                </div>

                {/* Tech 3: Anestesia Digital */}
                <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-xl transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky mb-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Anestesia Digital
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Anestesia selectiva de una sola pieza sin adormecer el rostro.
                    </p>
                  </div>
                </div>

                {/* Tech 4: Electroterapia TENS */}
                <div className="bg-white/5 border border-white/10 hover:bg-white/10 p-5 rounded-xl transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky mb-2.5">
                      <HeartPulse className="w-4 h-4 text-brand-sky" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Electroterapia TENS
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Relajación muscular y alivio de sobrecarga articular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ESPECIALIDADES DESTACADAS (Grid Enriquecido con Enlaces a /tratamientos)
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Especialidades clínicas
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                Atención odontológica integral en el centro de Valladolid.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/tratamientos"
                className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-dark transition-colors"
              >
                Ver todos los tratamientos
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Implantes Dentales */}
            <Link
              href="/tratamientos#implantes"
              className="group bg-white p-7 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Award className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-1.5">
                  Implantes Dentales & MIDI
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Técnica MIDI mínimamente invasiva e implantes biocompatibles.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-navy">
                <span>Ver detalles de implantología</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 2. Estética Dental */}
            <Link
              href="/tratamientos#estetica"
              className="group bg-white p-7 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Smile className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-1.5">
                  Estética Dental & Sonrisas
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Carillas dentales conservadoras y blanqueamiento clínico guiado.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-navy">
                <span>Ver opciones de estética dental</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 3. Periodoncia */}
            <Link
              href="/tratamientos#periodoncia"
              className="group bg-white p-7 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-1.5">
                  Periodoncia & Encías
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Prevención, salud periodontal y regeneración asistida por láser.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-navy">
                <span>Ver tratamientos de periodoncia</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 4. Microabrasión del Esmalte */}
            <Link
              href="/tratamientos#microabrasion"
              className="group bg-white p-7 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Sparkles className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-1.5">
                  Microabrasión del Esmalte
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Tratamiento de manchas y caries incipientes sin torno ni pinchazo.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-navy">
                <span>Ver técnica de microabrasión</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 5. Láser Indoloro */}
            <Link
              href="/tratamientos#laser"
              className="group bg-white p-7 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Zap className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-1.5">
                  Láser Indoloro & Cirugía
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Cirugía de tejidos blandos sin bisturí y recuperación inmediata.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-navy">
                <span>Ver aplicaciones del láser</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 6. Odontología Neuromuscular & ATM */}
            <Link
              href="/tratamientos#neuromuscular"
              className="group bg-white p-7 rounded-xl border border-slate-200/80 shadow-sm hover:border-brand-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Stethoscope className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors mb-1.5">
                  Odontología Neuromuscular & ATM
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Alivio del bruxismo, ruidos articulares y dolores de cabeza.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-navy">
                <span>Ver tratamientos de ATM y bruxismo</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SECCIÓN CON FOTOGRAFÍA 3: Instalaciones en Pleno Centro de Valladolid
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic of 2 Photos (Left on desktop) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photo 1: Recepción */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50 group">
                <img
                  src="/images/clinica-recepcion.webp"
                  alt="Recepción luminosa y sala de espera minimalista con panel de madera en Valladolid"
                  className="w-full h-56 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Photo 2: Gabinete Moderno */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50 group sm:translate-y-4">
                <img
                  src="/images/clinica-gabinete.webp"
                  alt="Gabinete dental moderno con sillón ergonómico, luz natural y ventana en Valladolid"
                  className="w-full h-56 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Column (Right on desktop) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                Nuestras instalaciones
              </h2>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Ubicada en Calle Santiago 19-21, 1-D, entre la Plaza Mayor y la
                Plaza de Zorrilla. Espacios luminosos y tranquilos con los máximos
                estándares de asepsia hospitalaria.
              </p>

              {/* Features list */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-medium">Accesible:</strong> Primera planta con ascensor en calle peatonal.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-medium">Luz natural:</strong> Gabinetes climatizados y confortables.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong className="text-slate-900 font-medium">Sin esperas:</strong> Citas planificadas con dedicación exclusiva.
                  </span>
                </div>
              </div>

              {/* Clinic coordinates info & button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/clinica"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg text-brand-navy bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Conocer las instalaciones al detalle
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=Calle+Santiago+19,+Valladolid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-1.5 text-brand-blue" />
                  Ver mapa y cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. BANNER FINAL CON FOTO (Consulta Paciente & Llamada a la Acción)
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-br from-slate-50 to-brand-light/40 p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Copy Side */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                  Solicite su primera consulta
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Le esperamos en C/ Santiago 19-21 para un diagnóstico completo y
                  personalizado con los Doctores Rey.
                </p>

                {/* Practical Coordinates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-sm text-slate-600">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block">
                        Dirección en el Centro
                      </span>
                      <span>C/ Santiago 19-21, 1-D, 47001 Valladolid</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-brand-blue mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 block">
                        Atención Telefónica Directa
                      </span>
                      <a
                        href="tel:983372504"
                        className="font-medium text-brand-navy hover:underline"
                      >
                        983 37 25 04
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-white bg-brand-navy hover:bg-brand-dark transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Pedir Cita Online
                  </Link>
                  <a
                    href="tel:983372504"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2 text-brand-blue" />
                    Llamar ahora (983 37 25 04)
                  </a>
                </div>
              </div>

              {/* Photo Side */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-white group">
                  <img
                    src="/images/consulta-paciente.webp"
                    alt="Doctora consultando con paciente frente a pantalla con TAC 3D en Valladolid"
                    className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
