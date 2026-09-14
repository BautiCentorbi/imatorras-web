import type { Metadata } from "next";
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

const principios = [
  { nombre: "Sobriedad", texto: "Diseños limpios, uso consciente del espacio y ausencia de elementos decorativos innecesarios." },
  { nombre: "Claridad", texto: "Mensajes directos, tipografías legibles, jerarquías ordenadas y foco en lo esencial." },
  { nombre: "Coherencia", texto: "El lenguaje visual y verbal se mantiene alineado al estilo editorial de la marca en todas las plataformas." },
  { nombre: "Autenticidad", texto: "Cada pieza representa fielmente el origen, sin exageraciones ni artificios." },
  { nombre: "Precisión", texto: "Datos técnicos, puntuaciones y descripciones enológicas exactos y verificables." },
  { nombre: "Enfoque en terroir", texto: "Imágenes, textos y narrativas que reflejan San José, El Peral y Tupungato como ejes identitarios." },
];

export default function HistoriaPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Nuestra historia"
        title="Un hombre más humano que héroe."
        lede="iMatorras nace en Tupungato, al pie de la Cordillera de los Andes, donde la historia y la tierra comparten un mismo pulso."
      />

      <section className="px-6 py-24 md:px-16 md:py-32">
        <Reveal className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
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

      <section className="bg-alba-card px-6 py-24 md:px-16 md:py-28">
        <Reveal>
          <p className="t-destacado mb-4 text-[11px] text-acento">Cómo trabajamos</p>
          <h2 className="t-headline mb-14 max-w-lg text-balance text-3xl md:text-4xl">
            Seis principios guían cada decisión, visual o enológica.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-sm bg-basalto/10 sm:grid-cols-2 lg:grid-cols-3">
            {principios.map((p) => (
              <div key={p.nombre} className="bg-alba-card p-7">
                <h3 className="t-headline mb-2.5 text-[16px]">{p.nombre}</h3>
                <p className="t-body text-[13px] leading-relaxed text-basalto/62">{p.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <ContactBand
        title="Conocé la tierra detrás de cada vino."
        body="Tres fincas en Tupungato dan forma a nuestras tres líneas. Recorré los viñedos que están detrás de cada etiqueta."
      />
      <SiteFooter />
    </div>
  );
}
