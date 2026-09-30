"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "¿En qué consiste la técnica MIDI?",
    answer:
      "La técnica MIDI coloca implantes sin abrir la encía con incisiones amplias ni puntos. Al preservar el tejido natural, el procedimiento es prácticamente indoloro y el postoperatorio sin hinchazón típica.",
  },
  {
    question: "¿Cómo funciona la anestesia digital?",
    answer:
      "Un sistema computarizado dosifica el anestésico gota a gota, sin el dolor de la jeringa clásica. Solo duerme la pieza tratada, sin dejar labios ni lengua dormidos.",
  },
  {
    question: "¿Qué es la microabrasión?",
    answer:
      "Un chorro preciso de aire con micropartículas que elimina manchas y caries pequeñas sin torno, sin vibración y sin dolor, conservando el diente sano.",
  },
  {
    question: "¿Mis dolores de cabeza pueden venir de la boca?",
    answer:
      "Sí. Muchas cefaleas y dolores cervicales se originan en una mala mordida o bruxismo. Con diagnóstico neuromuscular y férulas a medida aliviamos la tensión en pocos días.",
  },
  {
    question: "¿Y si me han dicho que no tengo hueso suficiente?",
    answer:
      "Trabajamos con titanio y circonio, e implantes basales para casos con poco hueso, evitando en la mayoría de casos injertos complejos.",
  },
  {
    question: "¿Cómo pido una primera consulta?",
    answer:
      "Llámanos al 983 37 25 04 o rellena el formulario web. Te atenderemos en C/ Santiago 19-21, Valladolid, con estudio detallado sin compromiso.",
  },
];

export default function TratamientosFAQ() {
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
