import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adri — Soluciones digitales para negocios locales",
  description:
    "Ayudo a pequeños negocios a mejorar su presencia digital y facilitar el contacto con sus clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}