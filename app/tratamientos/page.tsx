import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Feather,
  Zap,
} from "lucide-react";
import TratamientosCatalog from "@/components/TratamientosCatalog";
import TratamientosFAQ from "@/components/TratamientosFAQ";

export const metadata: Metadata = {
  title: "Tratamientos Odontológicos en Valladolid | Clínica Doctores Rey",
  description:
    "Especialistas en implantes dentales MIDI mínimamente invasivos, estética dental biológica, microabrasión del esmalte sin dolor, anestesia digital y dolor orofacial en Valladolid.",
  keywords: [
    "tratamientos dentales Valladolid",
    "implantes MIDI Valladolid",
    "implantes dentales poco hueso Valladolid",
    "estetica dental Valladolid",
    "microabrasion esmalte Valladolid",
    "anestesia digital Valladolid",
    "odontologia neuromuscular Valladolid",
    "bruxismo Valladolid",
    "ATM mandibula Valladolid",
    "dentista centro Valladolid",
  ],
  alternates: {
    canonical: "/tratamientos",
  },
};

export default function TratamientosPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION: Full-bleed standard with gradient fade */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center bg-white overflow-hidden border-b border-slate-100">
        {/* Right Photo Container: Full-bleed, free (NOT inside cards, containers or grid columns) */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[54%] h-full pointer-events-none">
          <img
            src="/images/hero-tratamientos.webp"
            alt="Tratamientos odontológicos en Clínica Dental Doctores Rey Valladolid"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Tratamientos odontológicos avanzados y sin dolor
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Más de 30 años en el centro de Valladolid. Creadores de la técnica de implantes mínimamente invasivos{" "}
              <strong className="text-slate-900 font-semibold">MIDI</strong> y protocolos sin dolor que preservan tu diente natural.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-brand-navy hover:bg-brand-dark transition-all duration-200 shadow-md shadow-brand-navy/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Pedir Cita Previa</span>
              </Link>

              <a
                href="tel:983372504"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl border border-slate-200/90 text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-blue" />
                <span>983 37 25 04</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                <span className="font-medium text-slate-800">+30 Años</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                <span className="font-medium text-slate-800">Técnica MIDI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                <span className="font-medium text-slate-800">Cero Dolor</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                <span className="font-medium text-slate-800">C/ Santiago 19</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOQUE 1: IMPLANTOLOGÍA AVANZADA & TÉCNICA MIDI */}
      <section id="implantes-midi" className="py-16 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Implantología Avanzada & Técnica MIDI Mínimamente Invasiva
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                La técnica{" "}
                <strong className="text-slate-900 font-semibold">MIDI (Minimally Invasive Dental Implants)</strong>{" "}
                coloca el implante con una microapertura en la encía, sin abrir
                colgajos ni dar puntos agresivos.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sin incisiones ni suturas</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Sin abrir la encía: sin inflamación ni puntos molestos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Solución con poco hueso</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Implantes basales que evitan injertos largos y costosos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Titanio y Circonio</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Máxima biocompatibilidad, ideal si tienes alergia a metales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto?tratamiento=Implantes%20Dentales%20%26%20T%C3%A9cnica%20MIDI"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-dark transition-all duration-200 shadow-sm"
                >
                  <span>Consultar técnica MIDI</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <div className="text-xs text-slate-500 font-medium">
                  Estudio radiológico 3D previo en Valladolid
                </div>
              </div>
            </div>

            {/* Right Photo Block */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 group">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/implante-midi.webp"
                    alt="Implantes dentales de titanio y circonio con instrumental de técnica MIDI"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOQUE 2: ODONTOLOGÍA SIN DOLOR (MICROABRASIÓN, LÁSER Y ANESTESIA DIGITAL) */}
      <section id="sin-dolor" className="py-16 lg:py-24 bg-brand-navy text-white relative overflow-hidden scroll-mt-28">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Photo Block (Alternating) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="relative aspect-[4/3] w-full bg-slate-900">
                  <Image
                    src="/images/laser-microabrasion.webp"
                    alt="Instrumental de microabrasión y láser odontológico con luz guía en Clínica Doctores Rey"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Odontología Sin Dolor: Microabrasión, Láser y Anestesia Digital
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                El miedo al torno aleja a muchos pacientes del dentista.
                Nuestro protocolo de 3 tecnologías convierte tu visita en una
                experiencia tranquila y confortable.
              </p>

              {/* 3 Pillars Bento */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky shrink-0">
                    <Feather className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">1. Microabrasión por Aire</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Chorro de aire preciso. Sin vibración ni calor.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">2. Láser de Baja Potencia</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Calma y regenera encías sin fármacos agresivos.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-sky shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">3. Anestesia Digital</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                      Solo duerme una pieza, sin labios dormidos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contacto?tratamiento=Microabrasi%C3%B3n%20del%20Esmalte"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-sky text-white text-sm font-semibold transition-all duration-200 shadow-md"
                >
                  <span>Consultar tratamientos sin dolor</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BLOQUE 3: ESTÉTICA DENTAL & ARMONÍA FUNCIONAL */}
      <section id="estetica-sonrisa" className="py-16 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Estética Dental Biológica: La Belleza de una Sonrisa Funcional
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                La estética real es devolver tu sonrisa natural, respetando el
                diente, tu fisonomía y la función masticatoria.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Carillas cerámicas ultrafinas y composite biomimético</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Mínimo desgaste del diente sano. Materiales de alta resistencia y translucidez que imitan con exactitud la luminosidad y textura del esmalte natural.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Integración con la articulación mandibular (ATM)</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Alineamos la forma y longitud de los dientes con la trayectoria del movimiento mandibular, evitando desgastes anormales, fracturas o dolores de cabeza posteriores.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Blanqueamiento médico controlado</h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Aclarado del tono dental sin dañar la estructura cristalina del esmalte ni provocar hipersensibilidad prolongada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto?tratamiento=Est%C3%A9tica%20Dental"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-dark transition-all duration-200 shadow-sm"
                >
                  <span>Pedir valoración de estética</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">
                  Asesoramiento médico individualizado
                </span>
              </div>
            </div>

            {/* Right Photo Block */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 group">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/images/estetica-sonrisa.webp"
                    alt="Sonrisa radiante, natural y auténtica de paciente en Clínica Dental Doctores Rey"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CATÁLOGO COMPLETO DE LAS 15 ESPECIALIDADES */}
      <section id="catalogo" className="py-16 lg:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 mb-3">
              Catálogo de Especialidades Odontológicas
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Descubre en detalle las especialidades y tratamientos desarrollados en nuestra clínica en el centro de Valladolid.
            </p>
          </div>

          {/* Interactive Catalog Component */}
          <TratamientosCatalog />
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Dudas Frecuentes de Nuestros Pacientes
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Resolvemos de forma directa las consultas más comunes sobre la técnica de implantes MIDI, anestesia digital y dolor articular.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <TratamientosFAQ />
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL CON INFORMACIÓN DE CONTACTO Y UBICACIÓN */}
      <section className="py-16 lg:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                ¿Necesitas un diagnóstico claro y honesto sobre tu boca?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Visítanos en la Calle Santiago 19-21. Más de 30 años ofreciendo la odontología más rigurosa, cercana y avanzada de Valladolid.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-brand-sky mr-1.5 shrink-0" />
                  <span>C/ Santiago 19-21, 1-D, 47001 Valladolid</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-brand-sky mr-1.5 shrink-0" />
                  <span>L-J: 9:30-13:30 / 16:00-20:00 · V: 9:30-14:00</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold bg-brand-blue hover:bg-brand-sky text-white transition-all duration-200 shadow-md text-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Pedir Cita Online</span>
              </Link>
              <a
                href="tel:983372504"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 text-center"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-sky" />
                <span>983 37 25 04</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
