"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda una importación desde China?",
    a: "El tiempo promedio es de 45 a 75 días desde la confirmación del pedido, dependiendo del producto y el método de transporte (marítimo o aéreo). Te mantenemos informado en cada etapa por WhatsApp.",
  },
  {
    q: "¿Cuál es el monto mínimo para importar?",
    a: "Trabajamos con pedidos desde USD $3,000 en valor FOB. Esto permite que PyMEs accedan a precios competitivos sin necesidad de grandes volúmenes.",
  },
  {
    q: "¿Qué incluye la cotización landed?",
    a: "La cotización incluye el costo del producto, flete internacional, seguro, aranceles, IVA, nacionalización, y nuestro margen de servicio. No hay costos ocultos: el precio que ves es el precio final puesto en Colombia.",
  },
  {
    q: "¿Cómo funciona el control de calidad?",
    a: "Realizamos una inspección pre-embarque en la fábrica en China. Te enviamos fotos y video del producto antes de que salga del puerto, para que apruebes el envío con total tranquilidad.",
  },
  {
    q: "¿Cómo gana BridgeX?",
    a: "Nuestro margen está incluido en la cotización landed que te presentamos. No cobramos tarifas adicionales ni comisiones sorpresa. Ganamos cuando tú importas con éxito.",
  },
  {
    q: "¿Qué tipo de productos puedo importar?",
    a: "Nos especializamos en ferretería industrial y herramientas: llaves, amoladoras, taladros, discos de corte, tornillería, EPP, y más. Si tienes un producto específico, cuéntanos y evaluamos la viabilidad.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-xl bg-white shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
          >
            <span className="pr-4 font-semibold text-text">{faq.q}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-text-lighter transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-text-light leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
