"use client";

import React, { useState } from "react";
import { Send, CheckCircle, Mail, Building, Phone, MapPin, User, FileText, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "El nombre completo es requerido.";

    if (!form.email.trim()) {
      tempErrors.email = "El correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "El formato de correo electrónico no es válido.";
    }

    if (!form.company.trim()) tempErrors.company = "El nombre de la empresa es requerido.";
    if (!form.message.trim()) tempErrors.message = "Por favor, cuéntenos brevemente sobre su proyecto.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically when user typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al procesar tu solicitud.");
      }

      setSubmitSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setSubmitError(err.message || "Error al enviar la solicitud. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-bg relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Information Column Left (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-accent text-xs font-technical font-bold uppercase tracking-widest bg-accent-soft px-3 py-1.5 rounded-full border border-accent/10">
                Póngase en Contacto
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
                Transforme sus Datos en Decisiones Fundamentadas
              </h2>
              <p className="text-base text-neutral-text/85 font-light leading-relaxed">
                Acceda a la autonomía de análisis avanzados que su consultora necesita para optimizar proyectos y mitigar riesgos ambientales.
              </p>
            </div>

            {/* What you get list */}
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-neutral-border shadow-xs">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wide">¿Qué incluye el Free Trial?</h3>
              <ul className="space-y-3.5 text-xs text-neutral-text/80">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                  <span>Licencia de siete días sin restricciones de funcionalidad.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                  <span>Cantidad ILIMITADA de usuarios por empresa.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                  <span>Todas planillas de monitoreo estandarizadas: Agua superficial, Agua Subterránea, Calidad de Aire, Suelos.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                  <span>2 Campañas; 3 Estaciones de Monitoreo; 6 Reportes (2 por Estación); 24 Planillas; 60 Fotos</span>
                </li>
              </ul>
            </div>

            {/* Direct contact info */}
            <div className="space-y-4 text-xs text-neutral-text/70 font-technical">
              <div className="flex items-center space-x-3">
                <Mail className="h-4.5 w-4.5 text-primary" />
                <a href="mailto:contacto@geosint.com.ar" className="hover:text-primary transition-colors">contacto@geosint.com.ar</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4.5 w-4.5 text-primary" />
                <span>+54 221 3183040</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4.5 w-4.5 text-primary" />
                <span>La Plata, Argentina</span>
              </div>
            </div>
          </div>

          {/* Form Column Right (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-neutral-border shadow-xl">

            {submitSuccess ? (
              // Success Screen
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mx-auto text-accent shadow-inner">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-sm text-neutral-text/75 max-w-md mx-auto">
                    Gracias por interesarse en GeoSint. En breve nos pondremos en contacto con Ud.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-primary text-white hover:bg-primary-hover px-6 py-3 rounded-xl font-bold text-xs transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              // Contact Form
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-technical font-bold text-primary uppercase tracking-wide flex items-center space-x-1.5">
                      <User className="h-3.5 w-3.5" />
                      <span>Nombre Completo</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full bg-neutral-bg px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.name
                          ? "border-red-500 focus:ring-red-200"
                          : "border-neutral-border focus:border-primary focus:ring-primary-soft/50"
                          }`}
                        placeholder="Ej. Ing. Martín García"
                      />
                      {errors.name && (
                        <div className="absolute right-3 top-3.5 text-red-500 flex items-center">
                          <AlertCircle className="h-4.5 w-4.5" />
                        </div>
                      )}
                    </div>
                    {errors.name && <p className="text-[11px] text-red-500 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-technical font-bold text-primary uppercase tracking-wide flex items-center space-x-1.5">
                      <Building className="h-3.5 w-3.5" />
                      <span>Empresa / Consultora</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={`w-full bg-neutral-bg px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.company
                          ? "border-red-500 focus:ring-red-200"
                          : "border-neutral-border focus:border-primary focus:ring-primary-soft/50"
                          }`}
                        placeholder="Ej. AmbioTec S.A."
                      />
                      {errors.company && (
                        <div className="absolute right-3 top-3.5 text-red-500 flex items-center">
                          <AlertCircle className="h-4.5 w-4.5" />
                        </div>
                      )}
                    </div>
                    {errors.company && <p className="text-[11px] text-red-500 font-semibold">{errors.company}</p>}
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-technical font-bold text-primary uppercase tracking-wide flex items-center space-x-1.5">
                    <Mail className="h-3.5 w-3.5" />
                    <span>Correo Electrónico Corporativo</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full bg-neutral-bg px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 ${errors.email
                        ? "border-red-500 focus:ring-red-200"
                        : "border-neutral-border focus:border-primary focus:ring-primary-soft/50"
                        }`}
                      placeholder="ejemplo@consultora.com"
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-3.5 text-red-500 flex items-center">
                        <AlertCircle className="h-4.5 w-4.5" />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="text-[11px] text-red-500 font-semibold">{errors.email}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-technical font-bold text-primary uppercase tracking-wide flex items-center space-x-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    <span>Requerimientos del Proyecto / Consulta</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-neutral-bg px-4 py-3 rounded-xl border text-sm transition-all focus:outline-hidden focus:ring-2 resize-none ${errors.message
                        ? "border-red-500 focus:ring-red-200"
                        : "border-neutral-border focus:border-primary focus:ring-primary-soft/50"
                        }`}
                      placeholder="Describa brevemente el tipo de modelado o datos que desea integrar en la plataforma..."
                    />
                    {errors.message && (
                      <div className="absolute right-3 top-3.5 text-red-500 flex items-center">
                        <AlertCircle className="h-4.5 w-4.5" />
                      </div>
                    )}
                  </div>
                  {errors.message && <p className="text-[11px] text-red-500 font-semibold">{errors.message}</p>}
                </div>

                {/* Submit error display */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs font-semibold flex items-center space-x-2 border border-red-200">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-primary-hover disabled:bg-primary-soft disabled:text-primary px-6 py-4 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Procesando Solicitud...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      <span>Solicitar Trial de 7 días</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
