"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    whatsapp: "",
    producto: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Store lead locally
    const leads = JSON.parse(localStorage.getItem("bridgex_leads") || "[]");
    leads.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem("bridgex_leads", JSON.stringify(leads));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-text">
          ¡Gracias por tu interés!
        </h3>
        <p className="text-text-light">
          Hemos recibido tu solicitud. Te contactaremos por WhatsApp pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <h3 className="mb-6 text-xl font-bold text-text">
        Solicita tu cotización
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-text-light">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-1 block text-sm font-medium text-text-light">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            value={form.empresa}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Nombre de tu empresa"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium text-text-light">
            WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="+57 300 000 0000"
          />
        </div>
        <div>
          <label htmlFor="producto" className="mb-1 block text-sm font-medium text-text-light">
            ¿Qué quieres importar?
          </label>
          <textarea
            id="producto"
            name="producto"
            required
            value={form.producto}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
            placeholder="Describe el producto o herramienta que buscas"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-primary-dark active:scale-[0.98]"
        >
          Enviar solicitud
        </button>
      </div>
    </form>
  );
}
