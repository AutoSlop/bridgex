"use client";

import { useState } from "react";

type PaymentStatus = "pendiente" | "procesando" | "completado" | "fallido";

interface Transaction {
  id: string;
  fecha: string;
  empresa: string;
  concepto: string;
  montoLocal: string;
  montoUSD: string;
  montoCNY: string;
  status: PaymentStatus;
}

const mockTransactions: Transaction[] = [
  { id: "TX-001", fecha: "2026-04-25", empresa: "Ferretería El Tornillo", concepto: "Llaves combinadas x500", montoLocal: "$12.400.000 COP", montoUSD: "$2,850 USD", montoCNY: "¥20,520 CNY", status: "completado" },
  { id: "TX-002", fecha: "2026-04-22", empresa: "Herramientas del Pacífico", concepto: "Taladros percutores x100", montoLocal: "$45.600.000 COP", montoUSD: "$10,480 USD", montoCNY: "¥75,456 CNY", status: "procesando" },
  { id: "TX-003", fecha: "2026-04-20", empresa: "Industrial Tools MX", concepto: "Discos de corte x2000", montoLocal: "$285,000 MXN", montoUSD: "$15,200 USD", montoCNY: "¥109,440 CNY", status: "pendiente" },
];

function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  const styles: Record<PaymentStatus, string> = {
    pendiente: "bg-gray-100 text-gray-700",
    procesando: "bg-blue-50 text-blue-700",
    completado: "bg-green-50 text-green-700",
    fallido: "bg-red-50 text-red-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function PaymentsPage() {
  const [activeStep, setActiveStep] = useState(0);

  const layers = [
    {
      title: "Capa 1 — Cobro Local LATAM",
      desc: "Recaudación en moneda local del cliente (COP, MXN, PEN)",
      monto: "$45.600.000 COP",
      metodo: "PSE / Transferencia bancaria",
      estado: "Completado",
      responsable: "Payment Agent",
      timeline: "T+0 — Cliente aprueba cotización y realiza pago local",
      color: "border-green-200 bg-green-50/30",
    },
    {
      title: "Capa 2 — Conversión FX",
      desc: "Cambio de moneda local a USD para operación internacional",
      monto: "$10,480 USD",
      metodo: "FX Spot vía partner bancario",
      estado: "Procesando",
      responsable: "Payment Agent + Treasury",
      timeline: "T+1 — Conversión automática al mejor rate disponible",
      color: "border-blue-200 bg-blue-50/30",
    },
    {
      title: "Capa 3 — Pago a Proveedor China",
      desc: "Transferencia al proveedor en CNY o USD según acuerdo",
      monto: "¥75,456 CNY",
      metodo: "Wire transfer / T/T",
      estado: "Pendiente",
      responsable: "Payment Agent + Compliance",
      timeline: "T+2 — Pago liberado post-verificación compliance",
      color: "border-amber-200 bg-amber-50/30",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-text">Payments / Payment Agent</h1>
        <p className="mt-1 text-text-light">Pasarela de pagos 3 capas: cobro local, FX y pago a China</p>
      </div>

      {/* 3-Layer Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-text">Flujo de Pago — 3 Capas</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`rounded-xl border-2 p-5 text-left transition ${
                activeStep === i ? layer.color + " ring-2 ring-primary/20" : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-sm font-bold text-text">{layer.title}</h3>
              </div>
              <p className="mb-3 text-xs text-text-lighter">{layer.desc}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-text-lighter">Monto</span>
                  <span className="font-semibold text-text">{layer.monto}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-lighter">Método</span>
                  <span className="font-medium text-text-light">{layer.metodo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-lighter">Estado</span>
                  <span className="font-medium text-text-light">{layer.estado}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-lighter">Responsable</span>
                  <span className="font-medium text-text-light">{layer.responsable}</span>
                </div>
              </div>
              <div className="mt-3 border-t border-gray-100 pt-3">
                <p className="text-xs italic text-text-lighter">{layer.timeline}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-base font-bold text-text">Trazabilidad del Pago Seleccionado</h3>
        <div className="relative ml-4 border-l-2 border-gray-200 pl-6 space-y-4">
          {[
            { time: "25 Abr 10:32", event: "Cliente aprueba cotización TX-002", done: true },
            { time: "25 Abr 10:35", event: "Pago local recibido vía PSE — $45.6M COP", done: true },
            { time: "25 Abr 14:00", event: "Conversión FX iniciada — Rate: 4,351 COP/USD", done: true },
            { time: "26 Abr 09:00", event: "USD acreditados — $10,480 disponibles", done: activeStep >= 1 },
            { time: "26 Abr 11:00", event: "Wire transfer a proveedor iniciado", done: activeStep >= 2 },
            { time: "27 Abr (est.)", event: "Pago confirmado por banco receptor en China", done: false },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className={`absolute -left-[31px] h-3 w-3 rounded-full border-2 ${item.done ? "border-primary bg-primary" : "border-gray-300 bg-white"}`} />
              <p className="text-xs text-text-lighter">{item.time}</p>
              <p className={`text-sm ${item.done ? "font-medium text-text" : "text-text-lighter"}`}>{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Table */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h3 className="text-base font-bold text-text">Tabla de Transacciones</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 font-medium text-text-lighter">ID</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Fecha</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Empresa</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Concepto</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Local</th>
                <th className="px-6 py-3 font-medium text-text-lighter">USD</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-mono text-xs font-medium text-primary">{tx.id}</td>
                  <td className="px-6 py-4 text-text-light">{tx.fecha}</td>
                  <td className="px-6 py-4 font-medium text-text">{tx.empresa}</td>
                  <td className="px-6 py-4 text-text-light">{tx.concepto}</td>
                  <td className="px-6 py-4 font-medium text-text">{tx.montoLocal}</td>
                  <td className="px-6 py-4 text-text-light">{tx.montoUSD}</td>
                  <td className="px-6 py-4"><PaymentStatusBadge status={tx.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
