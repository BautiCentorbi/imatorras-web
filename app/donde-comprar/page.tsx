import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dónde Comprar",
  description:
    "iMatorras se distribuye en Buenos Aires, Córdoba, Santa Fe, San Luis, San Juan, Mendoza, Neuquén y Río Negro. Consultá distribuidores o comprá por contacto directo.",
};

const provincias = [
  "Buenos Aires",
  "Córdoba",
  "Santa Fe",
  "San Luis",
  "San Juan",
  "Mendoza",
  "Neuquén",
  "Río Negro",
];

export default function DondeComprarPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Dónde comprar"
        title="En vinotecas, restaurantes y por contacto directo."
        lede="No vendemos online: te ponemos en contacto con el distribuidor de tu zona o, si preferís, coordinamos la compra directamente con nuestro equipo comercial."
      />

      <section className="grid gap-14 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-16 md:py-28">
        <Reveal>
          <p className="t-destacado mb-5 text-[11px] text-acento">Distribución nacional</p>
          <h2 className="t-headline mb-8 max-w-sm text-balance text-3xl">
            Presencia en 8 provincias de Argentina.
          </h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
            {provincias.map((p) => (
              <li key={p} className="t-body flex items-center gap-2.5 text-[14.5px] text-basalto/75">
                <span aria-hidden className="h-1 w-1 rounded-full bg-acento" />
                {p}
              </li>
            ))}
          </ul>
          <p className="t-body mt-8 text-[13.5px] leading-relaxed text-basalto/55">
            ¿Sos distribuidor, vinoteca o restaurante y no encontrás nuestros vinos en tu zona?
            Escribinos — sumamos puntos de venta de forma continua.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="t-destacado mb-5 text-[11px] text-acento">Exportación</p>
          <h2 className="t-headline mb-8 max-w-sm text-balance text-3xl">
            También llegamos fuera de Argentina.
          </h2>
          <p className="t-body text-[14.5px] leading-relaxed text-basalto/65">
            Trabajamos con listas de precios en pesos argentinos, dólares y euros para
            importadores y distribuidores internacionales. Escribinos contándonos tu mercado y
            te enviamos la información comercial completa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-basalto px-6 py-3.5 t-cta text-[13.5px] text-alba transition-transform duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Hablar por WhatsApp
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Consulta comercial — distribución")}`}
              className="inline-flex items-center justify-center rounded-sm border border-basalto/20 px-6 py-3.5 t-cta text-[13.5px] text-basalto transition-colors duration-200 hover:border-basalto hover:bg-basalto/5"
            >
              Escribir por email
            </a>
          </div>
        </Reveal>
      </section>

      <ContactBand
        eyebrow="Compra directa"
        title="¿Preferís comprar directo a la bodega?"
        body="Coordinamos la venta directa para consumidores finales según disponibilidad y ubicación. Contanos qué vinos te interesan."
      />
      <SiteFooter />
    </div>
  );
}
