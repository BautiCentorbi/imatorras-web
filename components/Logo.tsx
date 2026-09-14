import Image from "next/image";

type LogoVariant = "symbol" | "original" | "completo" | "texto";

const SOURCES: Record<LogoVariant, string> = {
  // Solo el isotipo (M)
  symbol: "/logos/Logo iMatorras_Transparente.webp",
  // Isotipo + wordmark, sin tagline
  original: "/logos/Transparente-Original-Logo-Oscuro.webp",
  // Isotipo + wordmark + "BODEGA Y VIÑEDOS" — versión completa del sistema
  completo: "/logos/Transparente-Completo-Logo-Oscuro.webp",
  // Solo wordmark "iMATORRAS", sin isotipo — para el nav
  texto: "/logos/Logo iMatorras_Texto.png",
};

// Lienzo y color del archivo maestro de cada variante: symbol/original/completo
// se exportaron en Basalto (oscuro); texto se exportó en Alba (claro). El color
// que falta se deriva con `invert` en vez de duplicar archivos.
const MASTER: Record<LogoVariant, { w: number; h: number; tone: "dark" | "light" }> = {
  symbol: { w: 1080, h: 1080, tone: "dark" },
  original: { w: 1080, h: 1080, tone: "dark" },
  completo: { w: 1080, h: 1081, tone: "dark" },
  texto: { w: 1080, h: 320, tone: "light" },
};

/**
 * Isotipo/wordmark oficiales de iMatorras (archivos reales del brandbook,
 * `public/logos/`).
 */
export function Logo({
  variant = "original",
  tone = "dark",
  className,
  priority,
}: {
  variant?: LogoVariant;
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const master = MASTER[variant];
  return (
    <Image
      src={SOURCES[variant]}
      alt="iMatorras — Bodega y Viñedos"
      width={master.w}
      height={master.h}
      priority={priority}
      className={`w-auto object-contain transition-all duration-500 ease-out ${
        tone !== master.tone ? "invert" : ""
      } ${className ?? "h-8"}`}
    />
  );
}

type LineVariant = "don-jose" | "apelacion" | "matorras";

const LINE_SOURCES: Record<LineVariant, string> = {
  "don-jose": "/logos/lineas/Logo-Don_Jose.webp",
  apelacion: "/logos/lineas/Logo-Apelacion.webp",
  matorras: "/logos/lineas/Logo-Matorras.webp",
};

/**
 * Wordmarks de línea (DON JOSÉ / APELACIÓN / MATORRAS). Los archivos
 * fuente solo existen en versión clara (pensados para fondo oscuro);
 * se derivan a oscuro con `invert` cuando van sobre Alba, en vez de
 * pedir un segundo export por línea.
 */
export function LineWordmark({
  line,
  tone = "light",
  className,
}: {
  line: LineVariant;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Image
      src={LINE_SOURCES[line]}
      alt=""
      aria-hidden="true"
      width={1080}
      height={320}
      className={`h-auto w-full object-contain ${tone === "dark" ? "invert" : ""} ${className ?? ""}`}
    />
  );
}
