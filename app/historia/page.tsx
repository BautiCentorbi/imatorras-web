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
      >
        <Image
          src="/images/Estampilla-San_Martin.webp"
          alt="Estampilla conmemorativa de José de San Martín, 1778–1850, iMatorras."
          width={520}
          height={632}
          className="pointer-events-none absolute -bottom-16 right-6 hidden h-[300px] w-auto -rotate-3 opacity-95 drop-shadow-2xl sm:block md:right-16 md:h-[380px]"
        />
      </PageHeader>

      <section className="py-24 md:py-32">
        <Reveal className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="t-destacado mb-4 text-[11px] text-acento">El nombre</p>
              <p className="t-subtitle text-2xl leading-snug text-basalto/85 md:text-3xl">
                Un nombre que une dos tiempos.
              </p>
            </div>
            <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
              iMatorras no es un nombre casual. “Matorras” honra a Gregoria Matorras, el apellido
              que también llevó su hijo. La “i” que lo antecede es nuestra forma de decir que ese
              legado no se quedó en el pasado: lo sostenemos hoy, con una mirada contemporánea —
              la misma tensión entre tradición y modernidad que buscamos en cada vino de la
              bodega.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-alba-card py-24 md:py-32">
        <Reveal className="mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-16">
          <div>
            <p className="t-destacado mb-4 text-[11px] text-acento">El origen</p>
            <p className="t-subtitle text-2xl leading-snug text-basalto/85 md:text-3xl">
              Inspirada en el legado de Don José de San Martín y Matorras, la marca construye una
              identidad anclada en el origen y el trabajo.
            </p>
          </div>
          <div className="flex flex-col gap-5">
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
        </Reveal>
      </section>

      <section className="py-24 md:py-28">
        <Reveal className="mx-auto max-w-[1440px] px-6 md:px-16">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="t-destacado mb-4 text-[11px] text-acento">El proyecto</p>
              <p className="t-subtitle text-2xl leading-snug text-basalto/85 md:text-3xl">
                De un proyecto pequeño a la bodega boutique independiente que somos hoy.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
                iMatorras fue fundada en 2019 por Joaquín Campos, como un proyecto pequeño,
                pensado para darles vida a viñedos de Tupungato que no estaban siendo
                aprovechados. Desde el
                principio buscamos un lugar propio: vinos de altísima calidad, pero con un
                espíritu más accesible.
              </p>
              <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
                Con los años, el proyecto fue mutando — creciendo, y también achicándose cuando
                hizo falta — hasta convertirse en la bodega boutique independiente que somos hoy.
              </p>
              <p className="t-body text-[15.5px] leading-[1.8] text-basalto/72">
                Hoy nuestro foco está puesto en la sutileza, la complejidad y la precisión. Pero
                no perdimos de vista lo que nos define desde el día uno: iMatorras tiene que ser
                un vino que uno lo pruebe, y sepa o no de vinos, sepa que es un vino muy rico.
              </p>
            </div>
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
