"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "¿Qué debo llevar a mi primera cita?",
    answer:
      "Únicamente su documento de identidad y, en caso de tenerlas, radiografías o historiales dentales previos. En la clínica realizaremos cualquier prueba diagnóstica digital complementaria necesaria.",
  },
  {
    question: "¿Qué hago si tengo dolor dental agudo o una urgencia?",
    answer:
      "Le recomendamos que nos llame directamente por teléfono al 983 37 25 04. Disponemos de huecos preferentes en el mismo día para atender urgencias y aliviar el dolor de forma inmediata.",
  },
  {
    question: "¿El presupuesto y el plan de tratamiento son sin compromiso?",
    answer:
      "Sí. Tras la exploración clínica le explicamos su diagnóstico detallado y le entregamos un presupuesto cerrado y por escrito, sin ningún tipo de compromiso.",
  },
  {
    question: "¿Dónde está ubicada la clínica y cómo puedo acceder?",
    answer:
      "Estamos en la Calle Santiago 19-21, 1-D, en pleno centro peatonal de Valladolid (entre Plaza Mayor y Plaza Zorrilla). El edificio dispone de ascensor y acceso llano.",
  },
];

export default function ContactoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-100">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-5">
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left group focus:outline-none focus:text-brand-navy"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-slate-900 group-hover:text-brand-navy transition-colors pr-6">
                {faq.question}
              </span>
              <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-light group-hover:text-brand-navy transition-colors">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3.5 pr-8 text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
