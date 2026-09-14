import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/ContactBand";
import { GrapeIcon, MountainIcon, PinIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getLinea, lineas, type LineColorToken } from "@/lib/wines";

// Clases completas y literales (Tailwind necesita verlas así en el código
// para generarlas) — el botón de cada ficha usa el color de su apelación
// o, si es un corte de varias, el color propio de línea que le corresponda.
const BUTTON_COLOR: Record<LineColorToken, string> = {
  "linea-sanjose": "border-linea-sanjose text-linea-sanjose hover:bg-linea-sanjose/10",
  "linea-tupungato": "border-linea-tupungato text-linea-tupungato hover:bg-linea-tupungato/10",
  "linea-peral": "border-linea-peral text-linea-peral hover:bg-linea-peral/10",
  "linea-rosado": "border-linea-rosado text-basalto hover:bg-linea-rosado/15",
  acento: "border-acento text-acento hover:bg-acento/10",
};

export function generateStaticParams() {
  return lineas.map((l) => ({ linea: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ linea: string }>;
}): Promise<Metadata> {
  const { linea } = await params;
  const l = getLinea(linea);
  if (!l) return {};
  return {
    title: l.linea,
    description: l.descripcionLarga,
  };
}

export default async function LineaPage({ params }: { params: Promise<{ linea: string }> }) {
  const { linea } = await params;
  const l = getLinea(linea);
  if (!l) notFound();

  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow={l.categoria}
        title={l.linea}
        lede={l.descripcionLarga}
        image={l.bgImage}
        imagePosition={l.bgPosition}
      />

      <section className="py-20 md:py-24">
        <Reveal className="mx-auto max-w-[1440px] px-6 md:px-16">
          <p className="t-destacado mb-10 text-[11px] text-acento">Los vinos de la línea</p>
          <div className="flex flex-col divide-y divide-basalto/10 border-y border-basalto/10">
            {l.vinos.map((vino) => (
              <div key={vino.nombre} className="grid gap-8 py-10 sm:grid-cols-[104px_1fr] sm:gap-10">
                <div className="relative mx-auto h-[230px] w-[100px] flex-none sm:mx-0">
                  <Image
                    src={vino.foto}
                    alt={`Botella de ${vino.nombre}`}
                    fill
                    sizes="104px"
                    className="object-contain mix-blend-multiply"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
                    <div>
                      <h2 className="t-headline text-xl">{vino.nombre}</h2>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5">
                        <span className="flex items-center gap-2 text-[13.5px] text-basalto/65">
                          <PinIcon className="h-[18px] w-[18px] text-acento" />
                          {vino.origen}
                        </span>
                        <span className="flex items-center gap-2 text-[13.5px] text-basalto/65">
                          <MountainIcon className="h-[18px] w-[18px] text-acento" />
                          {vino.ficha.altitud}
                        </span>
                        <span className="flex items-center gap-2 text-[13.5px] text-basalto/65">
                          <GrapeIcon className="h-[18px] w-[18px] text-acento" />
                          {vino.varietal}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-none gap-4">
                      {vino.ficha.puntos.map((p) => (
                        <div key={p.critico} className="flex flex-col items-center gap-1">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-basalto/20">
                            <span className="t-headline text-[14px]">{p.puntos}</span>
                          </div>
                          <span className="t-destacado max-w-[64px] text-center text-[8.5px] leading-tight text-basalto/40">
                            {p.critico}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="t-body mt-5 max-w-[70ch] text-[13.5px] leading-relaxed text-basalto/62">
                    {vino.ficha.vinedo} {vino.ficha.proceso}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Cosecha</dt>
                      <dd className="t-body mt-1 text-[12.5px] text-basalto/70">{vino.ficha.cosecha}</dd>
                    </div>
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Crianza</dt>
                      <dd className="t-body mt-1 text-[12.5px] text-basalto/70">{vino.ficha.crianza}</dd>
                    </div>
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Alcohol</dt>
                      <dd className="t-body mt-1 text-[12.5px] text-basalto/70">{vino.ficha.alcohol}</dd>
                    </div>
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Producción</dt>
                      <dd className="t-body mt-1 text-[12.5px] text-basalto/70">{vino.ficha.produccion}</dd>
                    </div>
                  </dl>

                  <Link
                    href={vino.fichaPdf}
                    target="_blank"
                    className={`t-cta mt-6 inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[12px] transition-colors ${BUTTON_COLOR[vino.color]}`}
                  >
                    <DownloadIcon className="h-3.5 w-3.5" />
                    Descargar ficha técnica (PDF)
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <ContactBand
        contained
        title="¿Querés probar estos vinos?"
        body={`Consultá disponibilidad, precios y dónde conseguir la línea ${l.linea.charAt(0)}${l.linea.slice(1).toLowerCase()} por WhatsApp o email.`}
      />
      <SiteFooter />
    </div>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
