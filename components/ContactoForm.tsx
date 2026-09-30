"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  PhoneCall,
} from "lucide-react";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tratamiento: string;
  horario: string;
  mensaje: string;
  privacidad: boolean;
}

const TRATAMIENTOS_OPTIONS = [
  "Primera Consulta / Diagnóstico General",
  "Implantes Dentales MIDI (Sin Cirugía Invasiva)",
  "Estética Dental y Carillas",
  "Microabrasión del Esmalte",
  "Anestesia Digital Sin Dolor",
  "Odontología Neuromuscular y ATM / Bruxismo",
  "Ortodoncia y Alineación Dental",
  "Periodoncia y Cuidado de Encías",
  "Blanqueamiento Dental Clínico",
  "Prótesis y Rehabilitación Oral",
  "Urgencia o Dolor Dental",
  "Otro motivo de consulta",
];


const HORARIOS_OPTIONS = [
  { id: "Cualquier horario", label: "Cualquier horario", sub: "Flexibilidad total" },
  { id: "Mañanas", label: "Mañanas", sub: "9:30 - 13:30" },
  { id: "Tardes", label: "Tardes", sub: "16:00 - 20:00" },
];

export default function ContactoForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    tratamiento: "",
    horario: "Cualquier horario",
    mensaje: "",
    privacidad: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor, indique su nombre completo.";
    }

    const phoneRegex = /^[0-9+() \s-]{9,15}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = "Por favor, indique su teléfono de contacto.";
    } else if (!phoneRegex.test(formData.telefono.trim())) {
      newErrors.telefono = "Introduzca un número de teléfono válido (mínimo 9 dígitos).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Por favor, introduzca su correo electrónico.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Introduzca una dirección de correo válida.";
    }

    if (!formData.tratamiento) {
      newErrors.tratamiento = "Seleccione el motivo de consulta o especialidad.";
    }

    if (!formData.privacidad) {
      newErrors.privacidad = "Debe aceptar la política de privacidad para enviar su solicitud.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate polite async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      tratamiento: "",
      horario: "Cualquier horario",
      mensaje: "",
      privacidad: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-100 p-8 sm:p-10 shadow-sm transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5 text-emerald-600 border border-emerald-200">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
            Solicitud Registrada
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            ¡Muchas gracias, {formData.nombre.split(" ")[0]}!
          </h3>
          <p className="text-slate-600 max-w-lg text-sm leading-relaxed mb-6">
            Hemos recibido su solicitud de cita para <span className="font-semibold text-slate-900">{formData.tratamiento}</span>. Nuestro equipo de recepción se pondrá en contacto con usted en el teléfono{" "}
            <span className="font-semibold text-brand-navy underline">{formData.telefono}</span> para confirmar el día y la hora exacta que mejor se adapte a sus horarios.
          </p>

          <div className="w-full bg-slate-50/90 rounded-xl p-4 text-left border border-slate-200/80 mb-6 text-xs sm:text-sm space-y-2.5">
            <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Paciente:</span>
              <span className="font-semibold text-slate-800">{formData.nombre}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
              <span className="text-slate-500">Especialidad:</span>
              <span className="font-semibold text-slate-800">{formData.tratamiento}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-slate-500">Preferencia de contacto:</span>
              <span className="font-semibold text-slate-800">{formData.horario}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Enviar otra consulta
            </button>
            <a
              href="tel:983372504"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-brand-navy hover:bg-brand-dark transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              <span>¿Es urgente? Llámenos al 983 37 25 04</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-6">
        {/* Header contextual */}
        <div className="border-b border-slate-100 pb-4">
          <p className="text-xs text-slate-500">
            Los campos marcados con <span className="text-rose-500 font-bold">*</span> son necesarios para que podamos comunicarnos con usted.
          </p>
        </div>

        {/* Nombre completo */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-slate-800 mb-1.5">
            Nombre y Apellidos <span className="text-rose-500">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            value={formData.nombre}
            onChange={(e) => {
              setFormData({ ...formData, nombre: e.target.value });
              if (errors.nombre) setErrors({ ...errors, nombre: undefined });
            }}
            placeholder="Ej. Carmen Rodríguez Gómez"
            className={`w-full px-4 py-3 rounded-lg border text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.nombre
                ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20"
                : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 hover:border-slate-300"
            }`}
          />
          {errors.nombre && (
            <p className="mt-1 text-xs text-rose-600 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Teléfono y Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-slate-800 mb-1.5">
              Teléfono de contacto <span className="text-rose-500">*</span>
            </label>
            <input
              id="telefono"
              type="tel"
              value={formData.telefono}
              onChange={(e) => {
                setFormData({ ...formData, telefono: e.target.value });
                if (errors.telefono) setErrors({ ...errors, telefono: undefined });
              }}
              placeholder="Ej. 612 34 56 78"
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.telefono
                  ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20"
                  : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 hover:border-slate-300"
              }`}
            />
            {errors.telefono && (
              <p className="mt-1 text-xs text-rose-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.telefono}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-1.5">
              Correo electrónico <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="ejemplo@correo.com"
              className={`w-full px-4 py-3 rounded-lg border text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20"
                  : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 hover:border-slate-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Especialidad / Tratamiento */}
        <div>
          <label htmlFor="tratamiento" className="block text-sm font-medium text-slate-800 mb-1.5">
            Tratamiento o motivo <span className="text-rose-500">*</span>
          </label>
          <select
            id="tratamiento"
            value={formData.tratamiento}
            onChange={(e) => {
              setFormData({ ...formData, tratamiento: e.target.value });
              if (errors.tratamiento) setErrors({ ...errors, tratamiento: undefined });
            }}
            className={`w-full px-4 py-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
              !formData.tratamiento ? "text-slate-400" : "text-slate-900 font-medium"
            } ${
              errors.tratamiento
                ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200 bg-rose-50/20"
                : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20 hover:border-slate-300"
            }`}
          >
            <option value="" disabled>
              Seleccionar del listado completo...
            </option>
            {TRATAMIENTOS_OPTIONS.map((item) => (
              <option key={item} value={item} className="text-slate-800 font-normal">
                {item}
              </option>
            ))}
          </select>
          {errors.tratamiento && (
            <p className="mt-1 text-xs text-rose-600 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
              {errors.tratamiento}
            </p>
          )}
        </div>

        {/* Preferencia horaria (Interactive cards) */}
        <div>
          <label className="block text-sm font-medium text-slate-800 mb-2">
            Preferencia para recibir la llamada o consulta
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {HORARIOS_OPTIONS.map((opt) => {
              const active = formData.horario === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, horario: opt.id })}
                  className={`text-left p-3 rounded-lg border transition-all text-xs ${
                    active
                      ? "border-brand-navy bg-brand-light/80 text-brand-navy shadow-xs ring-1 ring-brand-navy"
                      : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  <p className="font-semibold">{opt.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{opt.sub}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mensaje opcional */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-slate-800 mb-1.5">
            Mensaje o detalles adicionales <span className="text-xs text-slate-400 font-normal">(opcional)</span>
          </label>
          <textarea
            id="mensaje"
            rows={3}
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            placeholder="Describa brevemente si tiene dolor, si prefiere algún doctor en concreto o indicaciones sobre su horario..."
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none hover:border-slate-300"
          />
        </div>

        {/* Consentimiento de privacidad */}
        <div className="pt-1">
          <label className="flex items-start cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.privacidad}
              onChange={(e) => {
                setFormData({ ...formData, privacidad: e.target.checked });
                if (errors.privacidad) setErrors({ ...errors, privacidad: undefined });
              }}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-navy focus:ring-brand-blue cursor-pointer"
            />
            <span className="ml-2.5 text-xs text-slate-600 leading-normal select-none">
              Acepto la política de protección de datos de Clínica Dental Doctores Rey y consiento el tratamiento de mis datos personales para coordinar mi cita médica.
            </span>
          </label>
          {errors.privacidad && (
            <p className="mt-1 text-xs text-rose-600 flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
              {errors.privacidad}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-navy hover:bg-brand-dark transition-all duration-150 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Tramitando su solicitud...</span>
            </>
          ) : (
            <>
              <span>Solicitar Cita Previa</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
