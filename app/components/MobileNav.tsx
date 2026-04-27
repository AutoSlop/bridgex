"use client";

import { useState } from "react";

const links = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center justify-center rounded-lg p-2 text-text hover:bg-gray-100"
        aria-label="Menú"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden z-50">
          <nav className="flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3 text-text-light font-medium hover:bg-bg hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-3">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent py-2.5 text-center font-semibold text-white hover:bg-accent-dark transition"
              >
                Cotiza ahora
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
