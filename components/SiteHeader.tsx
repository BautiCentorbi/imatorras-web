"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { WHATSAPP_URL } from "@/lib/site-config";

const LINKS = [
  { href: "/historia", label: "Historia" },
  { href: "/vinedos", label: "Viñedos" },
  { href: "/vinos", label: "Vinos" },
  { href: "/donde-comprar", label: "Dónde comprar" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex justify-center">
      {/* Capa de vidrio: siempre a pantalla completa en reposo, se condensa en isla al scrollear. Una sola transición, sin dividir el ancho en otro elemento. */}
      <header
        className={`pointer-events-auto w-full border backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "mt-3 max-w-[900px] rounded-full border-alba/10 bg-basalto/85 shadow-xl shadow-basalto/25"
            : "mt-0 max-w-[100vw] rounded-none border-transparent bg-basalto/12 shadow-none"
        }`}
      >
        {/* Contenido: mismo ancho máximo y mismo padding de siempre, nunca se estira. */}
        <div
          className={`mx-auto flex w-full max-w-[1600px] items-center justify-between text-alba transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "px-6 py-2.5 md:px-8 md:py-3" : "px-6 py-6 md:px-10 md:py-7 xl:px-16"
          }`}
        >
          <Link href="/" aria-label="iMatorras — Inicio">
            <Logo
              variant="texto"
              tone="light"
              priority
              className={scrolled ? "h-7 md:h-8" : "h-10 md:h-12 xl:h-14"}
            />
          </Link>

          <nav className="hidden items-center gap-8 t-destacado text-[11px] md:flex xl:gap-10 xl:text-[12.5px]">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative py-1 opacity-90 transition-opacity duration-200 hover:opacity-100 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 xl:gap-5">
            <span className="hidden t-destacado text-[11px] opacity-50 sm:inline xl:text-[12px]">
              ES&nbsp;&nbsp;·&nbsp;&nbsp;EN
            </span>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className={`group inline-flex items-center gap-2 rounded-full bg-alba text-basalto t-cta text-[13px] transition-all duration-500 hover:-translate-y-0.5 xl:text-[14px] ${
                scrolled ? "px-4 py-2" : "px-5 py-2.5 xl:px-6 xl:py-3"
              }`}
            >
              <WhatsAppIcon className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              WhatsApp
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
