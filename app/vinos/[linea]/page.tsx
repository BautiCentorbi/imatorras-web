import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/ContactBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getLinea, lineas } from "@/lib/wines";

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
              <div key={vino.nombre} className="py-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
                  <div>
                    <h2 className="t-headline text-xl">{vino.nombre}</h2>
                    <p className="t-body mt-1.5 text-[13.5px] text-basalto/55">{vino.varietal}</p>
                    <p className="t-destacado mt-2 text-[10px] text-basalto/40">{vino.origen}</p>
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
