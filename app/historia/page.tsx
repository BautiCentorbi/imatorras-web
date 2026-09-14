import type { Metadata } from "next";
import Image from "next/image";
import { ContactBand } from "@/components/ContactBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "iMatorras nace en Tupungato como un homenaje a Don José de San Martín y a su madre, Gregoria Matorras. La historia detrás de la bodega.",
};

export default function HistoriaPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Nuestra historia"
        title="Un hombre más humano que héroe."
        lede="iMatorras nace en Tupungato, al pie de la Cordillera de los Andes, donde la historia y la tierra comparten un mismo pulso."
        tall
      >
        <p className="t-body mt-5 max-w-xl text-[15.5px] leading-relaxed text-alba/78">
          iMatorras no es un nombre casual. “Matorras” honra a Gregoria Matorras, el apellido
          que también llevó su hijo. La “i” que lo antecede es nuestra forma de decir que ese
          legado no se quedó en el pasado: lo sostenemos hoy, con una mirada contemporánea — la
          misma tensión entre tradición y modernidad que buscamos en cada vino de la bodega.
        </p>
        <Image
          src="/images/Estampilla-San_Martin.webp"
          alt="Estampilla conmemorativa de José de San Martín, 1778–1850, iMatorras."
          width={520}
          height={632}
          className="pointer-events-none absolute -bottom-16 right-6 hidden h-[300px] w-auto -rotate-3 opacity-95 drop-shadow-2xl sm:block md:right-16 md:h-[380px]"
        />
      </PageHeader>

      <section className="border-t border-basalto/15 py-20 md:py-28">
        <Reveal className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
            <div className="col-span-3 md:col-span-1">
              <span className="t-headline block text-3xl leading-none text-basalto/25 [font-variant-numeric:tabular-nums]">
                01
              </span>
            </div>
            <div className="col-span-9 md:col-span-3">
              <p className="t-destacado mb-3 text-[11px] text-acento">El origen</p>
              <p className="t-subtitle text-xl leading-snug text-basalto/85">
                Inspirada en el legado de Don José de San Martín y Matorras, la marca construye
                una identidad anclada en el origen y el trabajo.
              </p>
            </div>
            <div className="col-span-12 flex flex-col gap-5 md:col-span-8 md:border-l md:border-basalto/15 md:pl-10">
              <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
                Nos inspiramos en Don José de San Martín. Su legado está profundamente entrelazado con la
                historia de Mendoza: un mendocino de corazón que entendía la importancia de nuestra región
                y apreciaba el vino como un reflejo de la tierra.
              </p>
              <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
                Vivir aquí, rodeados de fincas antiguas y viñas añosas, supimos que teníamos un tesoro en
                nuestras manos. Así nació Matorras: con el sueño de darles a esas viñas la importancia que
                merecen.
              </p>
              <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
                El nombre de la bodega es, en sí mismo, un homenaje: a Gregoria Matorras, la madre que
                formó a un niño hasta convertirlo en libertador de América. Una mujer detrás de la
                historia, como tantas otras — la razón por la que nuestra línea de mayor expresión lleva
                el nombre de su hijo, Don José.
              </p>
              <p className="t-cta mt-3 text-[16px]">No hay revolución sin revolucionarios.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-basalto py-24 text-alba md:py-32">
        <Reveal className="mx-auto max-w-[1440px] px-6 md:px-16">
          <p className="t-destacado mb-6 text-[11px] text-alba/50">02 — El proyecto</p>
          <p className="t-headline max-w-4xl text-balance text-3xl leading-[1.08] sm:text-4xl md:text-5xl">
            De viñas en silencio a una voz propia en el Valle de Uco.
          </p>
          <div className="mt-16 grid gap-10 border-t border-alba/15 pt-10 md:grid-cols-3 md:gap-14">
            <p className="t-body text-[14px] leading-[1.75] text-alba/65">
              iMatorras fue fundada en 2019 con un propósito claro: devolverles la voz a
              viñedos de Tupungato que llevaban años en silencio. Desde el principio buscamos
              un lugar propio — vinos de altísima calidad, con un espíritu genuinamente
              accesible.
            </p>
            <p className="t-body text-[14px] leading-[1.75] text-alba/65">
              Con los años, el proyecto fue mutando — creciendo, y también achicándose cuando
              hizo falta — hasta encontrar el rumbo propio que somos hoy.
            </p>
            <p className="t-body text-[14px] leading-[1.75] text-alba/65">
              Hoy nuestro foco está puesto en la sutileza, la complejidad y la precisión. Pero
              no perdimos de vista lo que nos define desde el origen: un vino no necesita
              explicación para emocionar — el nuestro busca lograrlo siempre, sin dejar a
              nadie afuera.
            </p>
          </div>
        </Reveal>
      </section>

      <ContactBand
        contained
        title="Conocé la tierra detrás de cada vino."
        body="Tres fincas en Tupungato dan forma a nuestras tres líneas. Recorré los viñedos que están detrás de cada etiqueta."
      />
      <SiteFooter />
    </div>
  );
}
