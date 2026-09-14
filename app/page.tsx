import Image from "next/image";
import Link from "next/link";
import { Logo, LineWordmark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  WHATSAPP_URL,
} from "@/lib/site-config";

const fincas = [
  {
    linea: "Apelación San José",
    tagClass: "bg-linea-sanjose text-[#f2e9e9]",
    finca: "Finca La Meli",
    texto:
      "Viñas de 40 a 80 años, suelos franco arenosos, 1200 msnm, espaldero bajo y riego tradicional por surco. Cuna del Malbec y el Cabernet Franc.",
  },
  {
    linea: "Apelación Tupungato",
    tagClass: "bg-linea-tupungato text-[#e9eef2]",
    finca: "Finca Gottardini",
    texto:
      "En el corazón de Tupungato. Paisajes de altura que dan origen al Chardonnay y al Cabernet Sauvignon de nuestra línea Apelación.",
  },
  {
    linea: "Apelación El Peral",
    tagClass: "bg-linea-peral text-[#e8ede4]",
    finca: "Finca Manoni",
    texto:
      "Viñedo centenario de 130 años, suelo franco arenoso con base aluvional. Da origen a nuestro Semillón y al Cabernet Sauvignon.",
  },
];

const vinos = [
  {
    linea: "DON JOSÉ",
    wordmark: "don-jose" as const,
    tagClass: "bg-alba/10 text-alba",
    categoria: "Línea premium",
    texto: "Malbec, Pinot Noir, Cabernet Franc y Chardonnay. 12–18 meses en roble francés de primer uso.",
    puntos: 95,
    dark: true,
  },
  {
    linea: "APELACIÓN",
    wordmark: "apelacion" as const,
    tagClass: "bg-linea-tupungato text-[#e9eef2]",
    categoria: "Línea de finca",
    texto: "San José, El Peral, Tupungato. Viñas de hasta 130 años, espaldero bajo, 1200 msnm.",
    puntos: 94,
    dark: false,
  },
  {
    linea: "MATORRAS",
    wordmark: "matorras" as const,
    tagClass: "bg-linea-rosado text-[#5b1523]",
    categoria: "Expresión varietal",
    texto: "Malbec varietal y Rosado de Malbec — jugos liberados sin prensado ni sangría, sin enología invasiva.",
    puntos: 92,
    dark: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      {/* HERO — el nav flota como vidrio encima, sin ocupar su propio espacio */}
      <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/images/hero-tupungato.jpg"
          alt="Camino entre álamos hacia la Cordillera de los Andes, Tupungato, invierno."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_38%] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-basalto/45 via-basalto/10 to-basalto/90" />
        <Logo
          variant="symbol"
          tone="light"
          className="pointer-events-none absolute -right-16 -top-20 h-[460px] opacity-[0.06] md:h-[620px]"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 md:px-16 md:pb-20">
          <Reveal>
            <p className="t-destacado mb-4 text-[11px] text-alba/70">Mendoza · Valle de Uco · Tupungato</p>
            <h1 className="t-headline max-w-4xl text-balance text-5xl text-alba sm:text-6xl md:text-7xl">
              Vinos honestos, nacidos en tierra con historia.
            </h1>
            <p className="t-body mt-7 max-w-xl text-[15.5px] leading-relaxed text-alba/85">
              Bodega de partidas limitadas en viñedos centenarios de Tupungato. Inspirados en el legado de Don José de San Martín y Matorras: una identidad anclada en el origen y el trabajo.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#vinos"
                className="group inline-flex items-center gap-2.5 rounded-sm bg-alba px-6 py-3.5 t-cta text-[14px] text-basalto transition-transform duration-200 hover:-translate-y-0.5"
              >
                Conocer los vinos
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center gap-2.5 rounded-sm border border-alba/45 px-6 py-3.5 t-cta text-[14px] text-alba transition-colors duration-200 hover:border-alba hover:bg-alba/10"
              >
                Hablar por WhatsApp
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE — franja de terruño */}
      <div className="overflow-hidden border-y border-basalto/10 bg-alba-card py-3">
        <div className="flex w-max animate-marquee gap-10 t-destacado whitespace-nowrap text-[11px] text-basalto/40">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>San José</span>
              <span aria-hidden>·</span>
              <span>El Peral</span>
              <span aria-hidden>·</span>
              <span>Tupungato</span>
              <span aria-hidden>·</span>
              <span>Valle de Uco</span>
              <span aria-hidden>·</span>
              <span>Mendoza, Argentina</span>
              <span aria-hidden>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* HISTORIA */}
      <section id="historia" className="relative overflow-hidden px-6 py-28 md:px-16 md:py-36">
        <span
          aria-hidden
          className="t-headline pointer-events-none absolute -left-6 -top-10 select-none text-[280px] text-basalto/[0.035] md:text-[380px]"
        >
          01
        </span>
        <Reveal className="relative grid gap-14 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="t-destacado mb-4 text-[11px] text-acento">Origen</p>
            <h2 className="t-headline text-balance text-4xl md:text-5xl">
              Un hombre más humano que héroe.
            </h2>
            <p className="t-subtitle mt-3 text-lg text-basalto/55">El origen de iMatorras</p>
          </div>
          <div>
            <p className="t-body max-w-[54ch] text-[15px] leading-[1.75] text-basalto/72">
              iMatorras nace en Tupungato, al pie de la Cordillera de los Andes, donde la historia y la tierra comparten un mismo pulso. Nos inspira el legado de Don José de San Martín y Matorras — un mendocino de corazón que entendía la importancia de esta región.
            </p>
            <p className="t-body mt-4 max-w-[54ch] text-[15px] leading-[1.75] text-basalto/72">
              Rodeados de fincas antiguas y viñas añosas, supimos que teníamos un tesoro en las manos: darles a esas viñas la importancia que merecen. Un homenaje a Gregoria Matorras, la madre que formó a un niño hasta convertirlo en libertador de América.
            </p>
            <p className="t-cta mt-7 text-[15px]">Entender la tierra es entender el vino.</p>
          </div>
        </Reveal>
      </section>

      {/* VIÑEDOS */}
      <section id="vinedos" className="relative overflow-hidden bg-basalto px-6 py-28 text-alba md:px-16 md:py-32">
        <span
          aria-hidden
          className="t-headline pointer-events-none absolute -right-10 bottom-0 select-none text-[220px] leading-none text-alba/[0.035] md:text-[300px]"
        >
          02
        </span>
        <Reveal className="relative">
          <p className="t-destacado mb-4 text-[11px] text-alba/50">Terroir</p>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="t-headline max-w-md text-balance text-4xl md:text-5xl">
              Tres fincas, un mismo Valle de Uco.
            </h2>
            <p className="t-body max-w-sm text-[14.5px] leading-relaxed text-alba/58">
              San José, El Peral y Tupungato: los ejes identitarios de cada línea de vinos.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-alba/10 md:grid-cols-3">
            {fincas.map((f) => (
              <div
                key={f.finca}
                className="group bg-basalto p-8 transition-colors duration-300 hover:bg-[#262626]"
              >
                <span className={`t-destacado inline-block rounded-sm px-2.5 py-1 text-[10px] ${f.tagClass}`}>
                  {f.linea}
                </span>
                <h3 className="t-headline mt-5 mb-3.5 text-[22px]">{f.finca}</h3>
                <p className="t-body text-[13.5px] leading-relaxed text-alba/60">{f.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VINOS */}
      <section id="vinos" className="px-6 py-28 md:px-16 md:py-32">
        <Reveal>
          <p className="t-destacado mb-4 text-[11px] text-acento">Líneas</p>
          <h2 className="t-headline mb-14 max-w-xl text-balance text-4xl md:text-5xl">
            Tres líneas, una misma búsqueda de honestidad.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {vinos.map((v) => (
              <div
                key={v.linea}
                className={`group relative flex min-h-[340px] flex-col overflow-hidden rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                  v.dark
                    ? "bg-basalto text-alba shadow-xl shadow-basalto/10"
                    : "border border-basalto/12 bg-alba-card"
                }`}
              >
                <span
                  aria-hidden
                  className={`t-headline pointer-events-none absolute -right-2 -top-6 select-none text-[160px] leading-none ${
                    v.dark ? "text-alba/[0.06]" : "text-basalto/[0.045]"
                  }`}
                >
                  {v.puntos}
                </span>
                <span className={`t-destacado relative w-fit rounded-sm px-2.5 py-1 text-[10px] ${v.tagClass}`}>
                  {v.categoria}
                </span>
                <h3 className="sr-only">{v.linea}</h3>
                <div className="relative mt-5 mb-2.5 h-6 w-32">
                  <LineWordmark line={v.wordmark} tone={v.dark ? "light" : "dark"} />
                </div>
                <p
                  className={`t-body relative text-[12.5px] leading-relaxed ${
                    v.dark ? "text-alba/58" : "text-basalto/62"
                  }`}
                >
                  {v.texto}
                </p>
                <div className="relative mt-auto flex items-center gap-2.5 pt-6">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                      v.dark ? "border-alba/35" : "border-basalto/20"
                    }`}
                  >
                    <span className="t-headline text-[13px]">{v.puntos}</span>
                  </div>
                  <span className={`text-[10.5px] ${v.dark ? "text-alba/50" : "text-basalto/45"}`}>
                    James Suckling
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-basalto px-6 py-24 text-alba md:px-16 md:py-28">
        <Reveal className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="t-destacado mb-4 text-[11px] text-alba/50">Contacto</p>
            <p className="t-headline max-w-sm text-balance text-3xl md:text-4xl">
              No hay revolución sin revolucionarios.
            </p>
            <p className="t-body mt-5 max-w-[46ch] text-[14.5px] leading-relaxed text-alba/58">
              Distribución en todo el país. Para consultas comerciales, prensa o puntos de venta, escribinos directamente — te responde nuestro equipo comercial.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-acento px-6 py-4 t-cta text-[14px] text-alba transition-transform duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Escribinos por WhatsApp
            </Link>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-sm border border-alba/40 px-6 py-4 t-cta text-[14px] text-alba transition-colors duration-200 hover:border-alba hover:bg-alba/10"
            >
              Completar formulario de contacto
            </a>
          </div>
        </Reveal>

        <div className="t-destacado mt-16 flex flex-col gap-3 border-t border-alba/15 pt-7 text-[10.5px] text-alba/45 sm:flex-row sm:justify-between">
          <span>{CONTACT_ADDRESS}</span>
          <span>{INSTAGRAM_HANDLE}</span>
          <span>{CONTACT_EMAIL}</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-alba/10 bg-basalto px-6 py-7 sm:flex-row md:px-16">
        <Logo variant="symbol" tone="light" className="h-5 opacity-70" />
        <div className="flex flex-col items-center gap-1 text-[11px] text-alba/40 sm:flex-row sm:gap-4">
          <span>© 2026 Bodega iMatorras — Tupungato, Mendoza, Argentina.</span>
          <span>Beber con moderación.</span>
        </div>
      </footer>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M20.5 3.5a11 11 0 0 0-17 13.4L2 22l5.3-1.4A11 11 0 1 0 20.5 3.5Z" />
      <path d="M8.5 8.7c.3-.7.6-.7.9-.7h.7c.2 0 .5 0 .7.6.3.7.9 2.2 1 2.4.1.2.1.4 0 .6-.2.3-.3.5-.5.7-.2.2-.4.4-.2.8.3.5 1.1 1.6 2.3 2.6 1.6 1.3 2.3 1.4 2.7 1.2.2-.1.5-.5.7-.8.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1s.5.2.6.4c.1.2.1 1-.3 1.9-.4.9-2 1.7-2.8 1.8-.7.1-1.6.2-5-1.3-4.2-1.8-6.8-6.1-7-6.4-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2Z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
