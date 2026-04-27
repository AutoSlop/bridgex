"use client";

import { useState } from "react";

type KYBStatus = "borrador" | "en_revision" | "aprobado" | "rechazado";
type Role = "admin" | "operador" | "cliente";

interface Company {
  id: string;
  empresa: string;
  nit: string;
  pais: string;
  contacto: string;
  docs: string;
  status: KYBStatus;
  role: Role;
}

const initialCompanies: Company[] = [
  { id: "1", empresa: "Ferretería El Tornillo SAS", nit: "900.123.456-7", pais: "Colombia", contacto: "Carlos Méndez", docs: "RUT, Cámara de Comercio", status: "aprobado", role: "cliente" },
  { id: "2", empresa: "Herramientas del Pacífico Ltda", nit: "901.234.567-8", pais: "Colombia", contacto: "María López", docs: "RUT", status: "en_revision", role: "cliente" },
  { id: "3", empresa: "Industrial Tools MX", nit: "RFC-ITM-2301", pais: "México", contacto: "Juan Pérez", docs: "Constancia fiscal", status: "borrador", role: "cliente" },
];

const users = [
  { name: "Admin BridgeX", email: "admin@bridgex.co", role: "admin" as Role },
  { name: "Ops Team", email: "ops@bridgex.co", role: "operador" as Role },
  { name: "Carlos Méndez", email: "carlos@eltornillo.co", role: "cliente" as Role },
  { name: "María López", email: "maria@hpacifico.co", role: "cliente" as Role },
];

function StatusBadge({ status }: { status: KYBStatus }) {
  const styles: Record<KYBStatus, string> = {
    borrador: "bg-gray-100 text-gray-700",
    en_revision: "bg-blue-50 text-blue-700",
    aprobado: "bg-green-50 text-green-700",
    rechazado: "bg-red-50 text-red-700",
  };
  const labels: Record<KYBStatus, string> = {
    borrador: "Borrador",
    en_revision: "En revisión",
    aprobado: "Aprobado",
    rechazado: "Rechazado",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function RoleBadge({ role }: { role: Role }) {
  const styles: Record<Role, string> = {
    admin: "bg-purple-50 text-purple-700",
    operador: "bg-primary/10 text-primary",
    cliente: "bg-amber-50 text-amber-700",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[role]}`}>
      {role}
    </span>
  );
}

export default function KYBPage() {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ empresa: "", nit: "", pais: "Colombia", contacto: "", docs: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newCompany: Company = {
      id: Date.now().toString(),
      ...form,
      status: "borrador",
      role: "cliente",
    };
    setCompanies([newCompany, ...companies]);
    setForm({ empresa: "", nit: "", pais: "Colombia", contacto: "", docs: "" });
    setShowForm(false);
  }

  function updateStatus(id: string, status: KYBStatus) {
    setCompanies(companies.map((c) => (c.id === id ? { ...c, status } : c)));
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-text">KYB / Auth Agent</h1>
          <p className="mt-1 text-text-light">Onboarding empresarial, verificación KYB y gestión de roles</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Nueva Empresa
        </button>
      </div>

      {/* Onboarding Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-base font-bold text-text">Registro de Empresa</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-text-light">Nombre empresa</label>
              <input
                type="text"
                required
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-text-light">NIT / RFC</label>
              <input
                type="text"
                required
                value={form.nit}
                onChange={(e) => setForm({ ...form, nit: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-text-light">País</label>
              <select
                value={form.pais}
                onChange={(e) => setForm({ ...form, pais: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option>Colombia</option>
                <option>México</option>
                <option>Perú</option>
                <option>Chile</option>
                <option>Ecuador</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-text-light">Contacto principal</label>
              <input
                type="text"
                required
                value={form.contacto}
                onChange={(e) => setForm({ ...form, contacto: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-text-light">Documentos adjuntos</label>
              <input
                type="text"
                placeholder="RUT, Cámara de Comercio, etc."
                value={form.docs}
                onChange={(e) => setForm({ ...form, docs: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark">
              Registrar empresa
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-text-light hover:bg-gray-50">
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* Companies Table */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h3 className="text-base font-bold text-text">Empresas Registradas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 font-medium text-text-lighter">Empresa</th>
                <th className="px-6 py-3 font-medium text-text-lighter">NIT</th>
                <th className="px-6 py-3 font-medium text-text-lighter">País</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Contacto</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Estado</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {companies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-text">{company.empresa}</td>
                  <td className="px-6 py-4 text-text-light">{company.nit}</td>
                  <td className="px-6 py-4 text-text-light">{company.pais}</td>
                  <td className="px-6 py-4 text-text-light">{company.contacto}</td>
                  <td className="px-6 py-4"><StatusBadge status={company.status} /></td>
                  <td className="px-6 py-4">
                    <select
                      value={company.status}
                      onChange={(e) => updateStatus(company.id, e.target.value as KYBStatus)}
                      className="rounded border border-gray-200 px-2 py-1 text-xs focus:border-primary focus:outline-none"
                    >
                      <option value="borrador">Borrador</option>
                      <option value="en_revision">En revisión</option>
                      <option value="aprobado">Aprobado</option>
                      <option value="rechazado">Rechazado</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Users & Roles */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h3 className="text-base font-bold text-text">Usuarios y Permisos</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 font-medium text-text-lighter">Nombre</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Email</th>
                <th className="px-6 py-3 font-medium text-text-lighter">Rol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user) => (
                <tr key={user.email} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-text">{user.name}</td>
                  <td className="px-6 py-4 text-text-light">{user.email}</td>
                  <td className="px-6 py-4"><RoleBadge role={user.role} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
