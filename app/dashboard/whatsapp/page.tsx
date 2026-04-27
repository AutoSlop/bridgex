"use client";

import { useState } from "react";

type LeadStatus = "nuevo" | "cotizado" | "en_proceso" | "cerrado";

interface Conversation {
  id: string;
  nombre: string;
  empresa: string;
  whatsapp: string;
  lastMessage: string;
  time: string;
  status: LeadStatus;
  responsable: string;
  messages: { from: string; text: string; time: string }[];
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    nombre: "Carlos Méndez",
    empresa: "Ferretería El Tornillo",
    whatsapp: "+57 310 555 1234",
    lastMessage: "¿Ya tienen disponibilidad de llaves combinadas?",
    time: "10:32",
    status: "cotizado",
    responsable: "Concierge Agent",
    messages: [
      { from: "cliente", text: "Hola, necesito cotizar llaves combinadas 8-24mm", time: "09:15" },
      { from: "agent", text: "¡Hola Carlos! Claro, ¿cuántas unidades necesitas y para cuándo?", time: "09:16" },
      { from: "cliente", text: "500 unidades, para el próximo mes idealmente", time: "09:20" },
      { from: "agent", text: "Perfecto. Te preparé una cotización landed: $4,250 USD por las 500 unidades, incluye flete, arancel, IVA y nacionalización. ¿Te la envío al detalle?", time: "09:45" },
      { from: "cliente", text: "¿Ya tienen disponibilidad de llaves combinadas?", time: "10:32" },
    ],
  },
  {
    id: "2",
    nombre: "María López",
    empresa: "Herramientas del Pacífico",
    whatsapp: "+57 315 555 5678",
    lastMessage: "Necesito taladros percutores industriales",
    time: "09:15",
    status: "nuevo",
    responsable: "Sin asignar",
    messages: [
      { from: "cliente", text: "Buenos días, estoy buscando taladros percutores industriales", time: "09:10" },
      { from: "cliente", text: "Necesito taladros percutores industriales", time: "09:15" },
    ],
  },
  {
    id: "3",
    nombre: "Juan Pérez",
    empresa: "Industrial Tools MX",
    whatsapp: "+52 55 4444 3333",
    lastMessage: "OK aprobamos la importación, ¿cuál es el siguiente paso?",
    time: "Ayer",
    status: "en_proceso",
    responsable: "Ops Team",
    messages: [
      { from: "cliente", text: "Hola, aprobamos la cotización de discos de corte", time: "14:00" },
      { from: "agent", text: "¡Excelente Juan! Procedo a coordinar con el proveedor. Te pido confirmar el pago.", time: "14:05" },
      { from: "cliente", text: "OK aprobamos la importación, ¿cuál es el siguiente paso?", time: "14:30" },
    ],
  },
  {
    id: "4",
    nombre: "Andrea Ruiz",
    empresa: "Distribuidora Bolívar",
    whatsapp: "+57 320 555 9012",
    lastMessage: "Gracias, todo recibido conforme",
    time: "Lun",
    status: "cerrado",
    responsable: "Concierge Agent",
    messages: [
      { from: "agent", text: "Andrea, tu pedido ya fue entregado. ¿Todo bien?", time: "11:00" },
      { from: "cliente", text: "Gracias, todo recibido conforme", time: "11:30" },
    ],
  },
];

function LeadStatusBadge({ status }: { status: LeadStatus }) {
  const styles: Record<LeadStatus, string> = {
    nuevo: "bg-blue-50 text-blue-700",
    cotizado: "bg-amber-50 text-amber-700",
    en_proceso: "bg-purple-50 text-purple-700",
    cerrado: "bg-green-50 text-green-700",
  };
  const labels: Record<LeadStatus, string> = {
    nuevo: "Nuevo",
    cotizado: "Cotizado",
    en_proceso: "En proceso",
    cerrado: "Cerrado",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function WhatsAppPage() {
  const [selected, setSelected] = useState<Conversation>(mockConversations[0]);
  const [conversations, setConversations] = useState(mockConversations);

  function updateStatus(id: string, status: LeadStatus) {
    setConversations(conversations.map((c) => (c.id === id ? { ...c, status } : c)));
    if (selected.id === id) setSelected({ ...selected, status });
  }

  function assignResponsable(id: string, responsable: string) {
    setConversations(conversations.map((c) => (c.id === id ? { ...c, responsable } : c)));
    if (selected.id === id) setSelected({ ...selected, responsable });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-text">WhatsApp / Concierge Agent</h1>
        <p className="mt-1 text-text-light">Bandeja de conversaciones y gestión de leads</p>
      </div>

      <div className="grid h-[600px] grid-cols-1 gap-0 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm lg:grid-cols-3">
        {/* Conversation list */}
        <div className="border-r border-gray-100 overflow-y-auto lg:col-span-1">
          <div className="border-b border-gray-100 px-4 py-3">
            <input
              type="text"
              placeholder="Buscar conversación..."
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div className="divide-y divide-gray-50">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelected(conv)}
                className={`w-full px-4 py-3 text-left transition hover:bg-gray-50 ${
                  selected.id === conv.id ? "bg-primary/5 border-l-2 border-l-primary" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-text">{conv.nombre}</p>
                    <p className="truncate text-xs text-text-lighter">{conv.empresa}</p>
                  </div>
                  <div className="ml-2 flex flex-col items-end gap-1">
                    <span className="text-xs text-text-lighter">{conv.time}</span>
                    <LeadStatusBadge status={conv.status} />
                  </div>
                </div>
                <p className="mt-1 truncate text-xs text-text-light">{conv.lastMessage}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Chat detail */}
        <div className="flex flex-col lg:col-span-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <p className="text-sm font-bold text-text">{selected.nombre}</p>
              <p className="text-xs text-text-lighter">{selected.empresa} · {selected.whatsapp}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {selected.responsable}
              </span>
              <LeadStatusBadge status={selected.status} />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
            {selected.messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "agent" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[75%] rounded-xl px-3 py-2 text-sm ${
                    msg.from === "agent"
                      ? "bg-white border border-gray-100 text-text"
                      : "bg-primary text-white"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`mt-1 text-xs ${msg.from === "agent" ? "text-text-lighter" : "text-white/70"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="border-t border-gray-100 px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selected.status}
                onChange={(e) => updateStatus(selected.id, e.target.value as LeadStatus)}
                className="rounded-lg border border-gray-200 px-2 py-1.5 text-xs font-medium focus:border-primary focus:outline-none"
              >
                <option value="nuevo">Nuevo</option>
                <option value="cotizado">Cotizado</option>
                <option value="en_proceso">En proceso</option>
                <option value="cerrado">Cerrado</option>
              </select>
              <select
                value={selected.responsable}
                onChange={(e) => assignResponsable(selected.id, e.target.value)}
                className="rounded-lg border border-gray-200 px-2 py-1.5 text-xs font-medium focus:border-primary focus:outline-none"
              >
                <option>Concierge Agent</option>
                <option>Ops Team</option>
                <option>Sin asignar</option>
              </select>
              <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20">
                Crear Lead
              </button>
              <button className="rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent/20">
                Cotizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
