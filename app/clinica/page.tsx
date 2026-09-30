import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Activity,
  Cpu,
  Layers,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "La Clínica | Doctores Rey · Odontología Avanzada y Diagnóstico en Valladolid",
  description:
    "Conozca la Clínica Dental Doctores Rey en C/ Santiago 19-21, Valladolid: +20 años de innovación diagnóstica, tecnología sin dolor, kinesiografía neuromuscular y un equipo médico de referencia.",
};

// Doctors team data - formato compacto para demo
const TEAM_MEMBERS = [
  {
    name: "Dr. Antonio Rey Gil",
    role: "Fundador y Director Médico",
    specialty: "Implantología MIDI y Diagnóstico ATM",
    image: "/images/antonio-rey.webp",
    bio: "Creador de la técnica MIDI de implantes sin cortes y referente en diagnóstico neuromuscular.",
    highlights: [
      "Técnica MIDI sin colgajo ni puntos",
      "Kinesiografía 3D y electromiografía",
      "Tratamiento integral de ATM",
    ],
  },
  {
    name: "Dra. Ana Rey",
    role: "Ortodoncia y Estética Dental",
    specialty: "Ortodoncia invisible y Microabrasión",
    image: "/images/ana-rey.webp",
    bio: "Corrige posición dental y armonía facial con microabrasión conservadora, sin tallados agresivos.",
    highlights: [
      "Ortodoncia invisible y ortopedia funcional",
      "Microabrasión sin tallado del esmalte",
      "Diseño digital de la sonrisa",
    ],
  },
  {
    name: "Dr. Alberto Rey",
    role: "Rehabilitación y Periodoncia",
    specialty: "Prótesis estética y Salud periodontal",
    image: "/images/alberto-rey.webp",
    bio: "Conserva el diente natural con prótesis biomimética y protocolos indoloros con anestesia digital.",
    highlights: [
      "Prótesis estética sobre implantes",
      "Periodoncia avanzada",
      "Anestesia digital sin dolor",
    ],
  },
];

// Advanced Technologies - 6 esenciales para demo
const TECHNOLOGIES = [
  {
    title: "Microabrasión del Esmalte",
    category: "Sin Dolor",
    badge: "Conservador",
    description:
      "Elimina manchas y caries iniciales sin torno ni anestesia.",
    icon: Sparkles,
  },
  {
    title: "Láser Terapéutico",
    category: "Sin Dolor",
    badge: "Bioestimulación",
    description:
      "Desinfección y cicatrización sin bisturí ni inflamación.",
    icon: Zap,
  },
  {
    title: "Kinesiografía 3D",
    category: "Diagnóstico",
    badge: "Pioneros",
    description:
      "Registra el movimiento mandibular con precisión micrométrica.",
    icon: Activity,
  },
  {
    title: "Electromiografía (EMG)",
    category: "Diagnóstico",
    badge: "Objetiva",
    description:
      "Mide la actividad muscular para equilibrar la mordida.",
    icon: Cpu,
  },
  {
    title: "Tratamiento ATM",
    category: "Articular",
    badge: "Bruxismo",
    description:
      "Alivio de chasquidos, bloqueos y cefaleas de origen dental.",
    icon: ShieldCheck,
  },
  {
    title: "Anestesia Digital",
    category: "Sin Dolor",
    badge: "Sin pinchazo",
    description:
      "Solo duerme una pieza, sin adormecer toda la boca.",
    icon: CheckCircle2,
  },
];


export default function ClinicaPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION: Standard Full-Bleed with Atmospheric Gradients */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-white overflow-hidden border-b border-slate-100">
        {/* Right Photo Container: Full-bleed, free (NOT inside cards, containers or grid columns) */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[54%] h-full pointer-events-none">
          <img
            src="/images/hero-clinica.webp"
            alt="Instalaciones de la Clínica Dental Doctores Rey en Valladolid"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              Clínica Dental <br />
              <span className="text-brand-navy">Doctores Rey</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Más de 20 años de experiencia e innovación diagnóstica en el centro de Valladolid. Nuestro equipo médico, encabezado por el Dr. Antonio Rey Gil, centra su propuesta de valor en las personas: cuidando de su salud y mejorando su sonrisa mediante tratamientos personalizados, técnicas de mínima invasión y total ausencia de dolor.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Pedir Cita Online</span>
              </Link>

              <a
                href="tel:983372504"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300/80 bg-white text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-blue" />
                <span>983 37 25 04</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center text-xs sm:text-sm text-slate-500">
              <MapPin className="w-4 h-4 mr-1.5 text-brand-blue shrink-0" />
              <span>C/ Santiago 19-21, 1-D · 47001 Valladolid · Tel: 983 37 25 04</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOUR VISUAL DE LAS INSTALACIONES: Photographic Mosaic in C/ Santiago 19-21 */}
      <section className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Un espacio sereno diseñado para su tranquilidad y bienestar
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              En <strong>Calle Santiago 19-21 (1ºD)</strong>: gabinetes con luz
              natural, esterilización certificada y consulta privada.
            </p>
          </div>

          {/* Photo Mosaic Grid: 3 Rich Cards with authentic images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. Recepción */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/clinica-recepcion.webp"
                  alt="Recepción luminosa y sala de espera contemporánea en Doctores Rey Valladolid"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                    Recepción y Atención al Paciente
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    Serenidad desde la llegada. Citas puntuales, sin salas masificadas.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-medium text-brand-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-1.5 shrink-0" />
                  <span>Ambiente libre de ruidos y estrés clínico</span>
                </div>
              </div>
            </div>

            {/* 2. Gabinete Clínico */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/clinica-gabinete.webp"
                  alt="Gabinete de tratamiento amplio y moderno con luz natural en Clínica Dental Doctores Rey"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                    Gabinetes con Luz Natural y Asepsia
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    Sillones ergonómicos con anestesia digital y láser. Confort total.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-medium text-brand-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-1.5 shrink-0" />
                  <span>Luz natural directa y vistas despejadas</span>
                </div>
              </div>
            </div>

            {/* 3. Sala de Diagnóstico */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/consulta-paciente.webp"
                  alt="Consulta personalizada doctor-paciente con radiodiagnóstico 3D y vista a Valladolid"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                    Sala de Diagnóstico y Consulta Privada
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    Analizamos tu TAC 3D en pantalla grande, con total transparencia.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-medium text-brand-navy">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-1.5 shrink-0" />
                  <span>Explicación didáctica y comprensible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick facilities credentials banner */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-2 md:pt-0">
              <span className="text-2xl lg:text-3xl font-extrabold text-brand-navy block">+20</span>
              <span className="text-xs font-medium text-slate-600">Años en Valladolid</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-2xl lg:text-3xl font-extrabold text-brand-navy block">100%</span>
              <span className="text-xs font-medium text-slate-600">Atención por doctores</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-2xl lg:text-3xl font-extrabold text-brand-navy block">0%</span>
              <span className="text-xs font-medium text-slate-600">Intermediarios comerciales</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="text-2xl lg:text-3xl font-extrabold text-brand-navy block">3D</span>
              <span className="text-xs font-medium text-slate-600">Diagnóstico computerizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL DIAGNÓSTICO FUNCIONAL: NUESTRA DIFERENCIACIÓN (With tech-diagnostico.webp) */}
      <section id="tecnologia" className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Photo of the Diagnostic Cabinet & Neuromuscular Tech */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[4/3]">
                <Image
                  src="/images/tech-diagnostico.webp"
                  alt="Gabinete de diagnóstico neuromuscular computerizado en Clínica Doctores Rey"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Column: Deep Explanation of Why It Makes Doctores Rey Unique */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
                Diagnóstico funcional: <span className="text-brand-sky">tratamos el origen</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                Entendemos la boca como un sistema integrado de dientes, músculos y articulación (ATM). Analizamos la causa biomecánica real antes de intervenir para garantizar resultados estables y duraderos.
              </p>

              {/* 3 Specialized Medical Instruments */}
              <div className="space-y-3.5 pt-1">
                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/20 border border-white/10 flex items-center justify-center text-brand-sky shrink-0 mt-0.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Kinesiógrafo Mandibular
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      Registro tridimensional del movimiento y velocidad mandibular.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/20 border border-white/10 flex items-center justify-center text-brand-sky shrink-0 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Electromiografía (EMG)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      Medición objetiva de la actividad y tensión muscular facial.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/20 border border-white/10 flex items-center justify-center text-brand-sky shrink-0 mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Scuadratura Gnatológica Basal
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      Calibración oclusal para estabilizar la mordida y proteger la ATM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EQUIPO MÉDICO DE ESPECIALISTAS (Cards with Authentic Photos) */}
      <section id="equipo" className="py-16 md:py-24 bg-slate-50/70 border-t border-b border-slate-200/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nuestro Equipo Médico de Especialistas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              En Doctores Rey siempre le atiende su especialista titular. Sin intermediarios, sin rotación de personal y con dedicación exclusiva a cada paciente.
            </p>
          </div>

          {/* Grid of 3 Doctors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {TEAM_MEMBERS.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Doctor Portrait Image Container */}
                <div className="relative aspect-[4/4.6] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`Fotografía oficial de ${doctor.name} - Clínica Dental Doctores Rey Valladolid`}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block bg-brand-navy/90 backdrop-blur-xs text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md text-brand-sky mb-1">
                      {doctor.role}
                    </span>
                    <h3 className="text-xl font-bold leading-tight drop-shadow-sm text-white">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Doctor Content - formato compacto */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-brand-navy leading-snug">
                      {doctor.specialty}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>

                  {/* Highlights list - 3 puntos */}
                  <div className="pt-3 border-t border-slate-100">
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {doctor.highlights.map((h, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECNOLOGÍAS Y MÉTODOS SIN DOLOR */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Métodos clínicos para una experiencia 100% sin dolor
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              El miedo y la incomodidad no tienen cabida en nuestra consulta. Hemos sustituido los métodos agresivos por tecnologías de alta precisión que respetan el esmalte, la encía y la tranquilidad del paciente.
            </p>
          </div>

          {/* Grid of technologies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNOLOGIES.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="bg-slate-50/70 hover:bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-brand-blue/50 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-brand-navy">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {tech.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Painless Techniques Special Banner */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white p-8 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  ¿Tiene fobia o aprensión al dentista?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Muchos de nuestros pacientes actuales retrasaron su visita durante años por malas experiencias previas. En Doctores Rey aplicamos anestesia digital computarizada sin dolor de pinchazo y láser térmico de baja frecuencia para que vuelva a sonreír con total tranquilidad.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-blue text-white text-sm font-bold hover:bg-brand-sky transition-colors shadow-md text-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Pedir Cita Sin Compromiso</span>
                </Link>
                <a
                  href="tel:983372504"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors text-center"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand-sky" />
                  <span>Llamar al 983 37 25 04</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. LLAMADA A LA ACCIÓN FINAL */}
      <section className="bg-slate-950 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            ¿Desea una valoración diagnóstica con nuestro equipo médico?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Visítenos en pleno centro de Valladolid, junto a la Plaza Mayor. Evaluaremos su caso con radiología 3D y diagnóstico neuromuscular sin ningún compromiso.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white text-sm font-bold hover:bg-brand-sky transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Solicitar Cita Previa</span>
            </Link>

            <a
              href="tel:983372504"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/90 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-brand-sky" />
              <span>Llamar al 983 37 25 04</span>
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800/80 max-w-2xl mx-auto text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
              C/ Santiago 19-21, 1-D, 47001 Valladolid
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
              L-J: 9:30-13:30 / 16:00-20:00 · V: 9:30-14:00
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
