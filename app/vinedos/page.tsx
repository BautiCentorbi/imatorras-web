import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { fincas } from "@/lib/fincas";

export const metadata: Metadata = {
  title: "Viñedos y Terroir",
  description:
    "Tres fincas en Tupungato, Valle de Uco — San José, El Peral y Tupungato — dan origen a las tres líneas de vinos de iMatorras.",
};

export default function VinedosPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Viñedos y terroir"
        title="Tres fincas, un mismo Valle de Uco."
        lede="San José, El Peral y Tupungato: los ejes identitarios de cada línea de vinos. Viñas de hasta 130 años, a 1200 metros sobre el nivel del mar."
      />

      <section className="px-6 py-20 md:px-16">
        <Reveal>
          <p className="t-body max-w-[62ch] text-[15.5px] leading-[1.8] text-basalto/72">
            Nuestros viñedos están ubicados en lo más alto del Valle de Uco, en Tupungato. La altura y
            el salto térmico entre el día y la noche retrasan la maduración de la fruta y aportan la
            frescura y la acidez que definen el estilo de la bodega. Cada finca tiene nombre propio, y
            cada una de nuestras líneas de vino nace directamente de una de ellas.
          </p>
        </Reveal>
      </section>

      {fincas.map((f, i) => (
        <section
          key={f.slug}
          className={`px-6 py-20 md:px-16 md:py-24 ${i % 2 === 1 ? "bg-basalto text-alba" : ""}`}
        >
          <Reveal className="grid gap-10 md:grid-cols-[0.8fr_1fr] md:items-start">
            <div>
              <span className={`t-destacado inline-block rounded-sm px-2.5 py-1 text-[10px] ${f.tagClass}`}>
                {f.apelacion}
              </span>
              <h2 className="t-headline mt-5 text-3xl md:text-4xl">{f.nombre}</h2>
            </div>
            <div>
              <p
                className={`t-body max-w-[58ch] text-[15px] leading-[1.8] ${
                  i % 2 === 1 ? "text-alba/72" : "text-basalto/72"
                }`}
              >
                {f.detalle}
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
                <div>
                  <dt className="t-destacado text-[10px] opacity-45">Altitud</dt>
                  <dd className="t-subtitle mt-1 text-[14px]">{f.altitud}</dd>
                </div>
                <div>
                  <dt className="t-destacado text-[10px] opacity-45">Suelo</dt>
                  <dd className="t-subtitle mt-1 text-[14px]">{f.suelo}</dd>
                </div>
                <div>
                  <dt className="t-destacado text-[10px] opacity-45">Riego</dt>
                  <dd className="t-subtitle mt-1 text-[14px]">{f.riego}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.varietales.map((v) => (
                  <span
                    key={v}
                    className={`t-destacado rounded-sm border px-2.5 py-1 text-[10px] ${
                      i % 2 === 1 ? "border-alba/25 text-alba/70" : "border-basalto/20 text-basalto/65"
                    }`}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      <ContactBand
        title="Conocé los vinos que nacen de esta tierra."
        body="Tres fincas, tres líneas: Don José, Apelación y Matorras. Cada una con su propio carácter."
      />
      <SiteFooter />
    </div>
  );
}
