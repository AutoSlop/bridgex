import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BridgeX — Importa de China a Colombia por WhatsApp",
  description:
    "BridgeX gestiona sourcing, importación y nacionalización end-to-end para PyMEs ferreteras en Colombia. Precio landed transparente y control de calidad en origen.",
  keywords: [
    "importar de China",
    "ferretería industrial Colombia",
    "herramientas China Colombia",
    "importación PyMEs",
    "sourcing China",
    "BridgeX",
  ],
  openGraph: {
    title: "BridgeX — Importa de China a Colombia por WhatsApp",
    description:
      "Sourcing, importación y nacionalización end-to-end para PyMEs ferreteras. Precio landed transparente.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
