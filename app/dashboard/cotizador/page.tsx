"use client";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/00000000000?text=Hola%2C%20quiero%20cotizar%20una%20importaci%C3%B3n%20con%20BridgeX";

export default function CotizadorPage() {
  const [form, setForm] = useState({
    producto: "Llaves combinadas 8-24mm",
    cantidad: 500,
    origen: "Guangzhou, China",
    destino: "Bogotá, Colombia",
    fob: 3.2,
    flete: 850,
    seguro: 120,
    arancel: 15,
    iva: 19,
    logistica: 450,
    margen: 12,
  });

  const [showResult, setShowResult] = useState(false);

  const totalFOB = form.fob * form.cantidad;
  const totalFlete = form.flete;
  const totalSeguro = form.seguro;
  const cif = totalFOB + totalFlete + totalSeguro;
  const arancelMonto = cif * (form.arancel / 100);
  const baseIVA = cif + arancelMonto;
  const ivaMonto = baseIVA * (form.iva / 100);
  const logistica = form.logistica;
  const subtotal = cif + arancelMonto + ivaMonto + logistica;
  const margenMonto = subtotal * (form.margen / 100);
  const totalLanded = subtotal + margenMonto;
  const costoUnitario = totalLanded / form.cantidad;

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setShowResult(true);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-text">Cotizador / Quote Agent</h1>
        <p className="mt-1 text-text-light">Calculadora de landed cost con desglose completo</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Form */}
        <form onSubmit={handleCalculate} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-base font-bold text-text">Datos de la Importación</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-text-light">Producto</label>
              <input
                type="text"
                value={form.producto}
                onChange={(e) => setForm({ ...form, producto: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Cantidad (unidades)</label>
                <input
                  type="number"
                  min={1}
                  value={form.cantidad}
                  onChange={(e) => setForm({ ...form, cantidad: Number(e.target.value) || 1 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">FOB unitario (USD)</label>
                <input
                  type="number"
                  step="0.01"
                  min={0}
                  value={form.fob}
                  onChange={(e) => setForm({ ...form, fob: Number(e.target.value) || 0 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Origen</label>
                <input
                  type="text"
                  value={form.origen}
                  onChange={(e) => setForm({ ...form, origen: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Destino</label>
                <input
                  type="text"
                  value={form.destino}
                  onChange={(e) => setForm({ ...form, destino: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Flete internacional (USD)</label>
                <input
                  type="number"
                  min={0}
                  value={form.flete}
                  onChange={(e) => setForm({ ...form, flete: Number(e.target.value) || 0 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Seguro (USD)</label>
                <input
                  type="number"
                  min={0}
                  value={form.seguro}
                  onChange={(e) => setForm({ ...form, seguro: Number(e.target.value) || 0 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Arancel (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={form.arancel}
                  onChange={(e) => setForm({ ...form, arancel: Number(e.target.value) || 0 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">IVA (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={form.iva}
                  onChange={(e) => setForm({ ...form, iva: Number(e.target.value) || 0 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-text-light">Margen (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={form.margen}
                  onChange={(e) => setForm({ ...form, margen: Number(e.target.value) || 0 })}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-text-light">Logística local (USD)</label>
              <input
                type="number"
                min={0}
                value={form.logistica}
                onChange={(e) => setForm({ ...form, logistica: Number(e.target.value) || 0 })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
          >
            Calcular Landed Cost
          </button>
        </form>

        {/* Result */}
        <div className="space-y-4">
          {showResult ? (
            <>
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-base font-bold text-text">Desglose Landed Cost</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">FOB Total ({form.cantidad} × ${form.fob})</span>
                    <span className="font-medium text-text">${totalFOB.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Flete internacional</span>
                    <span className="font-medium text-text">${totalFlete.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Seguro</span>
                    <span className="font-medium text-text">${totalSeguro.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2 font-semibold">
                    <span className="text-text">CIF</span>
                    <span className="text-text">${cif.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Arancel ({form.arancel}%)</span>
                    <span className="font-medium text-text">${arancelMonto.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">IVA ({form.iva}%)</span>
                    <span className="font-medium text-text">${ivaMonto.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Logística local</span>
                    <span className="font-medium text-text">${logistica.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-text-light">Margen servicio ({form.margen}%)</span>
                    <span className="font-medium text-text">${margenMonto.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-2 text-lg font-bold">
                    <span className="text-primary">TOTAL LANDED</span>
                    <span className="text-primary">${totalLanded.toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-lighter">Costo unitario landed</span>
                    <span className="font-semibold text-accent">${costoUnitario.toFixed(2)} USD/ud</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="mb-2 text-sm font-bold text-text">¿Te interesa esta cotización?</h3>
                <p className="mb-4 text-xs text-text-light">
                  Crea un lead o envía esta cotización por WhatsApp para iniciar el proceso.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar por WhatsApp
                  </a>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
                    Crear Lead
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-gray-200 bg-white/50 p-12">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-text-light">Completa los datos y presiona calcular</p>
                <p className="text-xs text-text-lighter">El desglose aparecerá aquí</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
