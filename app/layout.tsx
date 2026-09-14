import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imatorras.com"),
  title: {
    default: "iMatorras — Bodega y Viñedos en Tupungato, Valle de Uco",
    template: "%s — iMatorras",
  },
  description:
    "Bodega de partidas limitadas en viñedos centenarios de Tupungato, Mendoza. Un homenaje a Don José de San Martín y Matorras: vinos honestos, nacidos del origen y el trabajo.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "iMatorras",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${hostGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-alba text-basalto">{children}</body>
    </html>
  );
}
