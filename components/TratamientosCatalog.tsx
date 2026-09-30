import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Activity,
  Wind,
  Zap,
  Syringe,
  Brain,
  Shield,
  Layers,
  Smile,
  CheckCircle2,
  Scissors,
  Stethoscope,
  Crosshair,
  Heart,
  ArrowRight,
} from "lucide-react";

export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "estetica-dental",
    title: "Estética Dental",
    description:
      "Consiga la sonrisa que siempre ha deseado. Nuestros tratamientos de estética dental y prótesis consiguen resultados naturales y armónicos, asesorándole de forma personalizada para realzar su dentadura respetando la estructura biológica.",
    icon: Sparkles,
  },
  {
    id: "implantes-midi",
    title: "Implantes & Técnica MIDI",
    description:
      "Especialistas en implantes dentales de titanio y de circonio, tanto basales como convencionales. Somos los creadores de la técnica mínimamente invasiva MIDI Implants, que permite colocar implantes con máxima precisión, sin necesidad de abrir grandes colgajos ni dar puntos agresivos.",
    icon: ShieldCheck,
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    description:
      "Tratamiento integral de las enfermedades periodontales causadas por acumulación de placa bacteriana y sarro. Abordamos tanto la gingivitis inicial como la periodontitis avanzada mediante desinfección profunda y terapia láser para proteger el soporte óseo de sus dientes.",
    icon: Activity,
  },
  {
    id: "microabrasion",
    title: "Microabrasión del Esmalte",
    description:
      "Tratamiento controlado y ultrapreciso de abrasión por aire con micropartículas de óxido de aluminio. Permite eliminar manchas del esmalte y caries tempranas de forma totalmente indolora, sin calor, vibraciones ni uso del torno convencional.",
    icon: Wind,
  },
  {
    id: "laser-terapeutico",
    title: "Terapia con Láser",
    description:
      "La terapia con láser de baja potencia es completamente indolora y carece de efectos secundarios. Proporciona bioestimulación a nivel tisular, reduce la inflamación de forma inmediata y acelera la cicatrización natural de las encías.",
    icon: Zap,
  },
  {
    id: "anestesia-digital",
    title: "Anestesia Digital",
    description:
      "Nueva metodología dental indolora y computarizada que administra el anestésico gota a gota a flujo constante. Permite insensibilizar únicamente la pieza sobre la que se va a intervenir, evitando el clásico pinchazo doloroso y el posterior entumecimiento de labios o mejilla.",
    icon: Syringe,
  },
  {
    id: "odontologia-neuromuscular",
    title: "Odontología Neuromuscular",
    description:
      "Especialización biomecánica en la relación entre nervios, músculos faciales y la correcta posición de la mandíbula. Diagnosticamos y resolvemos desórdenes de la mordida mediante aparatología de vanguardia como kinesiógrafo y electromiógrafo.",
    icon: Brain,
  },
  {
    id: "bruxismo",
    title: "Bruxismo",
    description:
      "Diagnóstico y tratamiento avanzado del apretamiento y rechinamiento dental. Realizamos un estudio exhaustivo de las sobrecargas oclusales y diseñamos férulas neuromusculares calibradas para relajar la musculatura y frenar el desgaste dental.",
    icon: Shield,
  },
  {
    id: "protesis-dental",
    title: "Prótesis Dental",
    description:
      "Diseñadas para restaurar una o varias piezas dentales ausentes o deterioradas. Son reproducciones fieles de los dientes naturales creadas con materiales de alta biocompatibilidad para devolver la función masticatoria, la fonética y la armonía facial.",
    icon: Layers,
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description:
      "Tratamientos de ortodoncia de máxima calidad y precisión vanguardista en Valladolid. Alineamos su dentadura con técnicas estéticas modernas, asegurando una correcta oclusión funcional y una sonrisa equilibrada.",
    icon: Smile,
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    description:
      "Procedimiento conservador para eliminar el tejido pulpar infectado del interior del diente y sustituirlo por material inerte biocompatible. Elimina la infección, insensibiliza la pieza y evita la necesidad de extracción, salvando su diente natural.",
    icon: CheckCircle2,
  },
  {
    id: "laser-quirurgico-maxilofacial",
    title: "Láser Quirúrgico / Cirugía Maxilofacial",
    description:
      "Tratamiento de afecciones funcionales y estéticas orofaciales mediante tecnología láser de corte limpio y coagulación instantánea. Procedimientos mínimamente invasivos con menor sangrado y una recuperación posoperatoria significativamente más rápida.",
    icon: Scissors,
  },
  {
    id: "dolor-orofacial",
    title: "Dolor Orofacial",
    description:
      "Tratamiento especializado de la disfunción craneomandibular, dolor neuropático y cefaleas tensionales de origen dental. Realizamos un diagnóstico diferencial preciso para abordar la causa subyacente del dolor y no únicamente sus síntomas.",
    icon: Stethoscope,
  },
  {
    id: "trastornos-atm",
    title: "ATM (Articulación Temporomandibular)",
    description:
      "Atención a trastornos de la articulación y músculos de la masticación que conectan la mandíbula al cráneo. Tratamos chasquidos, bloqueos y limitaciones de apertura mediante diagnóstico neuromuscular y equilibrio de la mordida.",
    icon: Crosshair,
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría",
    description:
      "Cuidado bucodental especializado para niños y recién nacidos. Guiamos la salud de los dientes de leche, detectamos a tiempo anomalías en el desarrollo óseo mandibular y prevenimos problemas futuros en un entorno cálido y cercano.",
    icon: Heart,
  },
];

export default function TratamientosCatalog() {
  return (
    <div id="catalogo" className="scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TREATMENTS.map((treatment) => {
          const Icon = treatment.icon;

          return (
            <div
              key={treatment.id}
              id={treatment.id}
              className="group bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-brand-blue/60 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-5 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-navy transition-colors tracking-tight mb-3">
                  {treatment.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {treatment.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/contacto?tratamiento=${encodeURIComponent(treatment.title)}`}
                  className="inline-flex items-center text-xs font-semibold text-brand-navy hover:text-brand-blue group/link"
                >
                  <span>Consultar tratamiento</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1 text-brand-blue" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
