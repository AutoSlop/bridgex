import MobileNav from "./components/MobileNav";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";

const WHATSAPP_URL = "https://wa.me/00000000000?text=Hola%2C%20quiero%20cotizar%20una%20importaci%C3%B3n%20con%20BridgeX";

const navLinks = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-white">B</span>
            </div>
            <span className="text-xl font-bold text-text">
              Bridge<span className="text-primary">X</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-light transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cotiza por WhatsApp
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 sm:py-28 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent" />
            <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Para PyMEs ferreteras en Colombia
              </div>
              <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Importa de China a Colombia por WhatsApp, con costo landed claro
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-white/80 sm:text-xl">
                BridgeX gestiona sourcing, importación y nacionalización end-to-end
                para PyMEs ferreteras, con precio transparente y control de calidad
                en origen.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-accent-dark hover:shadow-xl active:scale-[0.98] sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Cotiza por WhatsApp
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Ver cómo funciona
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-gray-100 bg-white py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm font-medium text-text-light sm:px-6 lg:px-8">
            {[
              "Precio landed transparente",
              "Inspección de calidad en origen",
              "Acompañamiento end-to-end",
              "Atención por WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                ¿Cómo funciona?
              </h2>
              <p className="text-lg text-text-light">
                En 4 pasos simples, tu producto está en Colombia.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Cuéntanos qué producto buscas",
                  desc: "Escríbenos por WhatsApp o llena el formulario. Cuéntanos qué herramientas o productos de ferretería necesitas.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Recibe cotización landed",
                  desc: "Te enviamos una cotización con precio final puesto en Colombia: producto, flete, impuestos y servicio incluidos.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Aprobamos y coordinamos",
                  desc: "Con tu aprobación, gestionamos la compra, inspección de calidad en fábrica, y logística internacional.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  ),
                },
                {
                  step: "4",
                  title: "Recibe tu pedido en Colombia",
                  desc: "Te acompañamos hasta la entrega final. Recibes tu mercancía nacionalizada y lista para vender.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.step} className="relative rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                    Paso {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                ¿Por qué importar con BridgeX?
              </h2>
              <p className="text-lg text-text-light">
                Simplificamos la importación para que te enfoques en vender.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Sin costos ocultos",
                  desc: "Cotización landed con todo incluido: producto, flete, aranceles, IVA y servicio. El precio que ves es el precio final.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Calidad verificada en origen",
                  desc: "Inspección pre-embarque en fábrica con fotos y video. Apruebas el producto antes de que zarpe.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                },
                {
                  title: "Todo por WhatsApp",
                  desc: "Desde la primera consulta hasta la entrega final, te atendemos y actualizamos por el canal que ya usas.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  ),
                },
                {
                  title: "Acceso a precios de fábrica",
                  desc: "Conectamos tu PyME directamente con proveedores verificados en China, eliminando intermediarios innecesarios.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  ),
                },
                {
                  title: "Experiencia en ferretería",
                  desc: "Conocemos el mercado ferretero colombiano y sabemos qué productos tienen demanda y qué proveedores cumplen.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a2.25 2.25 0 010-3.87l5.1-3.06a2.25 2.25 0 012.16 0l5.1 3.06a2.25 2.25 0 010 3.87l-5.1 3.06a2.25 2.25 0 01-2.16 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l8.25 4.95 8.25-4.95M12 20.25V12.5" />
                    </svg>
                  ),
                },
                {
                  title: "Acompañamiento completo",
                  desc: "No te dejamos solo. Desde el sourcing hasta la nacionalización, estamos contigo en cada paso del proceso.",
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-bg p-6 transition hover:border-primary/20 hover:shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios / Features */}
        <section id="servicios" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                Nuestros servicios
              </h2>
              <p className="text-lg text-text-light">
                Todo lo que necesitas para importar desde China, en un solo lugar.
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-6">
              {[
                {
                  num: "01",
                  title: "Onboarding y atención por WhatsApp",
                  desc: "Desde el primer mensaje nos cuentas qué necesitas. Sin formularios complicados, sin llamadas innecesarias. Todo por el canal que ya usas todos los días.",
                },
                {
                  num: "02",
                  title: "Sourcing de proveedores chinos verificados",
                  desc: "Identificamos y validamos fábricas en China que cumplan con tus especificaciones de producto, precio y volumen mínimo.",
                },
                {
                  num: "03",
                  title: "Cotización landed transparente",
                  desc: "Recibes un precio final en pesos o dólares que incluye absolutamente todo: producto, flete, aranceles, IVA, nacionalización y nuestro servicio.",
                },
                {
                  num: "04",
                  title: "QC pre-embarque con evidencia",
                  desc: "Antes de embarcar, inspeccionamos tu pedido en la fábrica. Te enviamos fotos, video y reporte para que apruebes con confianza.",
                },
                {
                  num: "05",
                  title: "Tracking y actualizaciones por WhatsApp",
                  desc: "Seguimiento en tiempo real de tu carga. Te informamos cada hito del proceso: producción, embarque, tránsito, aduana y entrega.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-text">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confianza / Social proof */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Importar no tiene que ser complicado
              </h2>
              <p className="text-lg text-white/70">
                Nos encargamos de todo para que tú solo te preocupes por vender.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "100%", label: "Precio landed transparente" },
                { value: "QC", label: "Inspección de calidad en origen" },
                { value: "E2E", label: "Acompañamiento end-to-end" },
                { value: "24/7", label: "Atención por WhatsApp" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm">
                  <div className="mb-2 text-3xl font-extrabold text-accent">{item.value}</div>
                  <div className="text-sm font-medium text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-text-light">
                Resolvemos tus dudas sobre el proceso de importación.
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        {/* CTA + Lead form */}
        <section id="contacto" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                  ¿Listo para importar?
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-text-light">
                  Cuéntanos qué producto buscas y recibe una cotización landed sin
                  compromiso. Respondemos en menos de 24 horas.
                </p>
                <div className="mb-8 space-y-4">
                  {[
                    "Sin costos ocultos ni sorpresas",
                    "Cotización sin compromiso",
                    "Respuesta en menos de 24 horas",
                    "Atención personalizada por WhatsApp",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <CheckIcon />
                      </div>
                      <span className="text-text-light">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-700 active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-lg font-bold text-text">
                Bridge<span className="text-primary">X</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-lighter">
              <a href="#como-funciona" className="transition hover:text-primary">Cómo funciona</a>
              <a href="#beneficios" className="transition hover:text-primary">Beneficios</a>
              <a href="#servicios" className="transition hover:text-primary">Servicios</a>
              <a href="#faq" className="transition hover:text-primary">FAQ</a>
              <a href="#contacto" className="transition hover:text-primary">Contacto</a>
            </div>
            <div className="text-sm text-text-lighter">
              &copy; {new Date().getFullYear()} BridgeX. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 hover:shadow-xl active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
