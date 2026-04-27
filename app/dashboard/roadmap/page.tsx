export default function RoadmapPage() {
  const phases = [
    {
      phase: "FASE 1",
      title: "MVP Funcional",
      status: "live",
      items: [
        { name: "KYB + Multi-rol", desc: "Onboarding empresarial con formulario, estados y roles", status: "live" },
        { name: "Pasarela 3 Capas", desc: "Cobro local LATAM, conversión FX, pago a China", status: "live" },
        { name: "Cotizador Landed Cost", desc: "Calculadora funcional con desglose completo", status: "live" },
        { name: "WhatsApp Command Center", desc: "Bandeja de conversaciones y gestión de leads", status: "live" },
      ],
    },
    {
      phase: "FASE 2",
      title: "Operaciones Avanzadas",
      status: "scaffolded",
      items: [
        { name: "Credit Engine 30/70", desc: "Motor de crédito para financiar importaciones con anticipo 30% y saldo 70% contra entrega", status: "scaffolded" },
        { name: "Order Tracking Live", desc: "Seguimiento en tiempo real de embarques con mapa y hitos", status: "scaffolded" },
        { name: "QC Verification", desc: "Verificación de calidad pre-embarque con fotos, video y aprobación del cliente", status: "scaffolded" },
        { name: "Document Vault", desc: "Bóveda de documentos: BL, facturas, packing list, certificados de origen", status: "scaffolded" },
      ],
    },
    {
      phase: "FASE 3",
      title: "Crecimiento & Retención",
      status: "planned",
      items: [
        { name: "Catálogo Curado + AI Search", desc: "Catálogo de productos verificados con búsqueda inteligente por AI", status: "planned" },
        { name: "Reorder Engine + Referrals", desc: "Motor de recompra automática y programa de referidos entre PyMEs", status: "planned" },
        { name: "Sourcing Agent", desc: "Búsqueda automatizada de proveedores con scoring y validación", status: "planned" },
        { name: "Account Agent", desc: "Gestión completa de cuenta cliente con métricas y historial", status: "planned" },
      ],
    },
  ];

  function StatusTag({ status }: { status: string }) {
    if (status === "live") {
      return <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">Live</span>;
    }
    if (status === "scaffolded") {
      return <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">Scaffolded</span>;
    }
    return <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-text-lighter">Planned</span>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-text">Roadmap</h1>
        <p className="mt-1 text-text-light">Backlog estructurado por fase con estados de implementación</p>
      </div>

      {/* Phase cards */}
      <div className="space-y-6">
        {phases.map((phase) => (
          <div
            key={phase.phase}
            className={`rounded-xl border bg-white shadow-sm ${
              phase.status === "live" ? "border-green-200" : phase.status === "scaffolded" ? "border-blue-200" : "border-gray-100"
            }`}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-primary">{phase.phase}</span>
                  <h2 className="text-base font-bold text-text">{phase.title}</h2>
                </div>
              </div>
              <StatusTag status={phase.status} />
            </div>
            <div className="divide-y divide-gray-50 px-6">
              {phase.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-text">{item.name}</p>
                    <p className="text-xs text-text-lighter">{item.desc}</p>
                  </div>
                  <StatusTag status={item.status} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder sections for Phase 2/3 */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-text">Scaffolding Visible — Próximas Funcionalidades</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Credit Engine 30/70", desc: "Financiamiento de importaciones con split de pago. El cliente paga 30% anticipo y 70% contra entrega verificada." },
            { name: "Order Tracking Live", desc: "Dashboard con mapa de rastreo, hitos de embarque y notificaciones automáticas por WhatsApp." },
            { name: "QC Verification", desc: "Flujo de inspección pre-embarque: solicitud → fotos/video → aprobación cliente → autorización de embarque." },
            { name: "Document Vault", desc: "Almacén seguro de documentos de comercio exterior: BL, facturas comerciales, packing list, CO." },
            { name: "Catálogo Curado + AI Search", desc: "Base de productos verificados con búsqueda semántica y recomendaciones personalizadas por historial." },
            { name: "Reorder Engine + Referrals", desc: "Recompra inteligente basada en ciclos de consumo y programa de referidos entre PyMEs ferreteras." },
          ].map((item) => (
            <div key={item.name} className="rounded-xl border border-dashed border-gray-200 bg-gray-50/50 p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-bold text-text">{item.name}</h3>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-text-lighter">Próximo</span>
              </div>
              <p className="text-xs leading-relaxed text-text-lighter">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
