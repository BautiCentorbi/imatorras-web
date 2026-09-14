import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { ArrowIcon } from "@/components/icons";
import { LineWordmark } from "@/components/Logo";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { lineas } from "@/lib/wines";

export const metadata: Metadata = {
  title: "Vinos",
  description:
    "Don José, Apelación y Matorras: las tres líneas de vinos de iMatorras, elaborados en Tupungato, Valle de Uco.",
};

export default function VinosPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Nuestros vinos"
        title="Tres líneas, una misma búsqueda de honestidad."
        lede="Partidas limitadas, mínima intervención y foco en el terroir. Cada línea tiene su propio carácter, pero comparte la misma filosofía."
      />

      <section className="px-6 py-20 md:px-16 md:py-24">
        <Reveal className="grid gap-6 md:grid-cols-3">
          {lineas.map((v) => (
            <Link
              key={v.slug}
              href={`/vinos/${v.slug}`}
              className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-sm p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
                v.dark
                  ? "bg-basalto text-alba shadow-xl shadow-basalto/10"
                  : "border border-basalto/12 bg-alba-card"
              }`}
            >
              <Image
                src={v.bgImage}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
                style={{ objectPosition: v.bgPosition }}
              />
              <div
                className={`relative flex flex-1 flex-col ${
                  v.bottleSide === "left" ? "ml-[46%]" : "max-w-[54%]"
                }`}
              >
                <span className={`t-destacado w-fit rounded-sm px-2.5 py-1 text-[10px] ${v.tagClass}`}>
                  {v.categoria}
                </span>
                <LineWordmark
                  line={v.wordmark}
                  tone={v.dark ? "light" : "dark"}
                  className="mt-5 mb-3 h-8 w-32 sm:h-10 sm:w-44"
                />
                <p className={`t-body text-[12.5px] leading-relaxed ${v.dark ? "text-alba/58" : "text-basalto/62"}`}>
                  {v.texto}
                </p>
                <span
                  className={`t-cta mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] transition-transform duration-200 group-hover:translate-x-1 ${
                    v.dark ? "text-alba" : "text-basalto"
                  }`}
                >
                  Ver línea
                  <ArrowIcon className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>

      <ContactBand />
      <SiteFooter />
    </div>
  );
}
