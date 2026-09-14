import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Encabezado de página interior. Siempre en Basalto (con foto opcional
 * de fondo) — no solo por identidad, también porque el nav flotante
 * asume texto claro por defecto: necesita un fondo oscuro detrás para
 * leerse antes de que el usuario haga scroll.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  imagePosition = "50% 50%",
  back = true,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  imagePosition?: string;
  back?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-basalto pt-[150px] pb-20 text-alba md:pt-[170px] md:pb-24">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-basalto/80 via-basalto/55 to-basalto" />
        </>
      )}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16">
        {back && (
          <Link
            href="/"
            className="t-destacado mb-8 inline-flex items-center gap-1.5 text-[11px] text-alba/55 transition-colors hover:text-alba"
          >
            ← Volver al inicio
          </Link>
        )}
        <p className="t-destacado mb-4 text-[11px] text-alba/60">{eyebrow}</p>
        <h1 className="t-headline max-w-3xl text-balance text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        {lede && (
          <p className="t-body mt-6 max-w-xl text-[15.5px] leading-relaxed text-alba/78">{lede}</p>
        )}
        {children}
      </div>
    </section>
  );
}
