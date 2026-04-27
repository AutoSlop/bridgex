import Link from "next/link";

const agents = [
  {
    name: "Auth Agent",
    desc: "KYB onboarding, multi-rol, permisos y validación de empresas",
    status: "live",
    href: "/dashboard/kyb",
  },
  {
    name: "Payment Agent",
    desc: "Pasarela 3 capas: cobro local, FX y pago a proveedor China",
    status: "live",
    href: "/dashboard/payments",
  },
  {
    name: "Quote Agent",
    desc: "Cotizador landed cost con desglose completo y CTA comercial",
    status: "live",
    href: "/dashboard/cotizador",
  },
  {
    name: "Concierge Agent",
    desc: "WhatsApp Command Center: bandeja de leads y conversaciones",
    status: "live",
    href: "/dashboard/whatsapp",
  },
  {
    name: "Credit Agent",
    desc: "Motor de crédito 30/70 para financiar importaciones",
    status: "planned",
    href: "/dashboard/roadmap",
  },
  {
    name: "Logistics Agent",
    desc: "Order tracking en tiempo real y gestión de embarques",
    status: "planned",
    href: "/dashboard/roadmap",
  },
  {
    name: "QC Agent",
    desc: "Verificación de calidad pre-embarque con evidencia visual",
    status: "planned",
    href: "/dashboard/roadmap",
  },
  {
    name: "Compliance Agent",
    desc: "Document vault y cumplimiento regulatorio para importaciones",
    status: "planned",
    href: "/dashboard/roadmap",
  },
];

const backlogAgents = [
  {
    name: "Sourcing Agent",
    desc: "Catálogo curado + AI Search de proveedores verificados",
    status: "backlog",
  },
  {
    name: "Account Agent",
    desc: "Reorder engine, referrals y gestión de cuenta cliente",
    status: "backlog",
  },
];

function StatusChip({ status }: { status: string }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
        Implementado ahora
      </span>
    );
  }
  if (status === "planned") {
    return (
      <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
        Próxima iteración
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-text-lighter">
      Backlog
    </span>
  );
}

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
          Overview — Plataforma Multi-Agente
        </h1>
        <p className="mt-2 text-text-light">
          Arquitectura modular de agentes para importación B2B China → LATAM
        </p>
      </div>

      {/* Stats row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Agentes Activos", value: "4", sub: "de 10 totales" },
          { label: "Empresas Onboarded", value: "3", sub: "demo" },
          { label: "Cotizaciones", value: "12", sub: "este mes" },
          { label: "Leads WhatsApp", value: "28", sub: "activos" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-gray-100 bg-white p-5">
            <p className="text-sm font-medium text-text-lighter">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-text">{stat.value}</p>
            <p className="text-xs text-text-lighter">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Agent Cards */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-text">Agentes del Sistema</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <Link
              key={agent.name}
              href={agent.href}
              className="group rounded-xl border border-gray-100 bg-white p-5 transition hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-sm font-bold">{agent.name.charAt(0)}</span>
                </div>
                <StatusChip status={agent.status} />
              </div>
              <h3 className="mb-1 text-sm font-bold text-text group-hover:text-primary">{agent.name}</h3>
              <p className="text-xs leading-relaxed text-text-lighter">{agent.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Backlog row */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-text">Backlog — Futuras Iteraciones</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {backlogAgents.map((agent) => (
            <div
              key={agent.name}
              className="rounded-xl border border-dashed border-gray-200 bg-white/50 p-5"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-text-lighter">
                  <span className="text-sm font-bold">{agent.name.charAt(0)}</span>
                </div>
                <StatusChip status={agent.status} />
              </div>
              <h3 className="mb-1 text-sm font-bold text-text">{agent.name}</h3>
              <p className="text-xs leading-relaxed text-text-lighter">{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Estado del MVP */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h2 className="mb-3 text-lg font-bold text-primary">Estado del MVP</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-text">FASE 1 — Implementado ahora</h3>
            <ul className="space-y-1.5 text-sm text-text-light">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                KYB + multi-rol con flujo de onboarding
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Pasarela 3 capas (cobro local, FX, pago China)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Cotizador landed cost funcional
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                WhatsApp Command Center demo
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-text">FASE 2 y 3 — Lo que sigue</h3>
            <ul className="space-y-1.5 text-sm text-text-light">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Credit Engine 30/70
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Order Tracking Live + Logistics
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                QC Verification + Document Vault
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                Catálogo Curado + AI Search
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                Reorder Engine + Referrals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
