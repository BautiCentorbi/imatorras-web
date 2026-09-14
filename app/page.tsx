import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { ArrowIcon } from "@/components/icons";
import { Logo, LineWordmark } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { fincas } from "@/lib/fincas";
import { WHATSAPP_URL } from "@/lib/site-config";
import { lineas as vinos } from "@/lib/wines";

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
          {/* Se repite bastante más que 2 veces a propósito: con poco contenido, en
              pantallas grandes (TV, monitores anchos) las dos copias son más angostas
              que el viewport y se ve el corte/reinicio del loop antes de que salga de
              cuadro. De este largo para arriba, el "salto" siempre queda fuera de vista. */}
          {Array.from({ length: 10 }).map((_, i) => (
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
            <Link
              href="/historia"
              className="t-cta mt-6 inline-flex w-fit items-center gap-1.5 text-[13.5px] text-acento transition-opacity hover:opacity-70"
            >
              Conocer toda la historia
              <ArrowIcon className="h-3 w-3" />
            </Link>
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
            <Link
              href="/vinedos"
              className="t-cta inline-flex w-fit items-center gap-1.5 text-[13.5px] text-alba/70 transition-colors hover:text-alba"
            >
              Ver los viñedos
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-alba/10 md:grid-cols-3">
            {fincas.map((f) => (
              <Link
                key={f.slug}
                href="/vinedos"
                className="group bg-basalto p-8 transition-colors duration-300 hover:bg-[#262626]"
              >
                <span className={`t-destacado inline-block rounded-sm px-2.5 py-1 text-[10px] ${f.tagClass}`}>
                  {f.apelacion}
                </span>
                <h3 className="t-headline mt-5 mb-3.5 text-[22px]">{f.nombre}</h3>
                <p className="t-body text-[13.5px] leading-relaxed text-alba/60">{f.resumen}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VINOS */}
      <section id="vinos" className="px-6 py-28 md:px-16 md:py-32">
        <Reveal>
          <p className="t-destacado mb-4 text-[11px] text-acento">Líneas</p>
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="t-headline max-w-xl text-balance text-4xl md:text-5xl">
              Tres líneas, una misma búsqueda de honestidad.
            </h2>
            <Link
              href="/vinos"
              className="t-cta inline-flex w-fit items-center gap-1.5 text-[13.5px] text-basalto/70 transition-colors hover:text-basalto"
            >
              Ver todas las líneas
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {vinos.map((v) => (
              <Link
                key={v.slug}
                href={`/vinos/${v.slug}`}
                className={`group relative flex min-h-[340px] flex-col overflow-hidden rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                  v.dark
                    ? "bg-basalto text-alba shadow-xl shadow-basalto/10"
                    : "border border-basalto/12 bg-alba-card"
                }`}
              >
                {v.bgImage && (
                  <Image
                    src={v.bgImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: v.bgPosition }}
                  />
                )}
                {!v.bgImage && (
                  <span
                    aria-hidden
                    className={`t-headline pointer-events-none absolute -right-2 -top-6 select-none text-[160px] leading-none ${
                      v.dark ? "text-alba/[0.06]" : "text-basalto/[0.045]"
                    }`}
                  >
                    {v.puntos}
                  </span>
                )}
                {/* la botella deja lugar en la foto de un lado; el contenido se corre al otro para no taparla */}
                <div
                  className={`relative flex flex-1 flex-col ${
                    v.bottleSide === "left" ? "ml-[46%]" : v.bottleSide === "right" ? "max-w-[54%]" : ""
                  }`}
                >
                  <span className={`t-destacado w-fit rounded-sm px-2.5 py-1 text-[10px] ${v.tagClass}`}>
                    {v.categoria}
                  </span>
                  <h3 className="sr-only">{v.linea}</h3>
                  <LineWordmark
                    line={v.wordmark}
                    tone={v.dark ? "light" : "dark"}
                    className="mt-5 mb-3 h-8 w-32 sm:h-10 sm:w-44"
                  />
                  <p
                    className={`t-body text-[12.5px] leading-relaxed ${
                      v.dark ? "text-alba/58" : "text-basalto/62"
                    }`}
                  >
                    {v.texto}
                  </p>
                  <div className="mt-auto flex items-center gap-2.5 pt-6">
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
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <ContactBand id="contacto" />
      <SiteFooter />
    </div>
  );
}
