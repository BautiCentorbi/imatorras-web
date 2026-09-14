import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Parallax } from "@/components/Parallax";

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
  parallax = false,
  back = true,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  imagePosition?: string;
  /** La imagen se mueve más lento que el scroll en vez de quedar fija. */
  parallax?: boolean;
  back?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-basalto pt-[150px] text-alba md:pt-[170px] ${
        image ? "min-h-[85vh] md:min-h-[90vh]" : "pb-20 md:pb-24"
      }`}
    >
      {image && (
        <>
          {parallax ? (
            <Parallax fill src={image} alt="" position={imagePosition} />
          ) : (
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
          )}
          {/* degradado solo abajo, para tapar el corte con la siguiente sección — el resto de la imagen queda a la vista */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_30%,var(--color-basalto)_100%)]" />
        </>
      )}
      <div
        className={
          image
            ? "absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-6 pb-10 md:px-16 md:pb-14"
            : "relative mx-auto max-w-[1440px] px-6 md:px-16"
        }
      >
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
