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

      <section className="px-6 py-20 md:px-16 md:py-24">
        <Reveal>
          <p className="t-destacado mb-10 text-[11px] text-acento">Los vinos de la línea</p>
          <div className="flex flex-col divide-y divide-basalto/10 border-y border-basalto/10">
            {l.vinos.map((vino) => (
              <div key={vino.nombre} className="grid gap-4 py-9 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-10">
                <div>
                  <h2 className="t-headline text-xl">{vino.nombre}</h2>
                  <p className="t-body mt-1.5 text-[13.5px] text-basalto/55">{vino.varietal}</p>
                  {vino.origen && (
                    <p className="t-destacado mt-2 text-[10px] text-basalto/40">{vino.origen}</p>
                  )}
                </div>

                {vino.ficha ? (
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Cosecha</dt>
                      <dd className="t-body mt-0.5 text-[12.5px] text-basalto/70">{vino.ficha.cosecha}</dd>
                    </div>
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Crianza</dt>
                      <dd className="t-body mt-0.5 text-[12.5px] text-basalto/70">{vino.ficha.crianza}</dd>
                    </div>
                    <div>
                      <dt className="t-destacado text-[9.5px] text-basalto/40">Alcohol</dt>
                      <dd className="t-body mt-0.5 text-[12.5px] text-basalto/70">{vino.ficha.alcohol}</dd>
                    </div>
                  </dl>
                ) : (
                  <p className="t-body text-[12.5px] italic text-basalto/40">
                    Ficha técnica próximamente.
                  </p>
                )}

                {vino.ficha?.puntos && (
                  <div className="flex items-center gap-2.5 md:justify-self-end">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-basalto/20">
                      <span className="t-headline text-[14px]">{vino.ficha.puntos}</span>
                    </div>
                    <span className="t-destacado text-[9.5px] text-basalto/40">James
                      <br />Suckling
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {l.vinos.some((v) => v.ficha) && (
            <p className="t-body mt-6 text-[12px] text-basalto/40">
              {l.vinos.find((v) => v.ficha)?.ficha?.vinedo}
            </p>
          )}
        </Reveal>
      </section>

      <ContactBand
        title="¿Querés probar estos vinos?"
        body={`Consultá disponibilidad, precios y dónde conseguir la línea ${l.linea.charAt(0)}${l.linea.slice(1).toLowerCase()} por WhatsApp o email.`}
      />
      <SiteFooter />
    </div>
  );
}
