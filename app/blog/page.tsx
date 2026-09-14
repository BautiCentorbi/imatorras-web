import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { INSTAGRAM_HANDLE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Historias",
  description: "Cosechas, notas de prensa y novedades de Bodega iMatorras.",
};

// Sin CMS conectado todavía (ver PROGRESS.md): esta lista se completa a
// mano por ahora. Cuando se migre a un CMS headless, se reemplaza por un
// fetch acá mismo sin tocar el resto de la página.
const posts: { titulo: string; fecha: string; resumen: string; slug: string }[] = [];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Historias"
        title="Cosecha, prensa y novedades de la finca."
        lede="Todavía estamos armando esta sección. Mientras tanto, seguí el día a día de la bodega en Instagram."
      />

      <section className="px-6 py-20 md:px-16 md:py-28">
        {posts.length === 0 ? (
          <Reveal className="flex flex-col items-start gap-5 border-t border-basalto/10 pt-16">
            <p className="t-headline max-w-md text-balance text-2xl text-basalto/85">
              Todavía no publicamos ninguna historia acá.
            </p>
            <p className="t-body max-w-md text-[14.5px] leading-relaxed text-basalto/55">
              Estamos preparando esta sección para compartir cosechas, maridajes, notas de prensa y
              lo que pasa en la finca. Mientras tanto, seguinos en Instagram.
            </p>
            <a
              href="https://instagram.com/bodegaimatorras"
              target="_blank"
              rel="noreferrer"
              className="t-cta inline-flex items-center gap-2 text-[14px] text-acento"
            >
              {INSTAGRAM_HANDLE} en Instagram →
            </a>
          </Reveal>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col gap-3">
                <p className="t-destacado text-[10px] text-basalto/40">{p.fecha}</p>
                <h2 className="t-headline text-xl group-hover:text-acento">{p.titulo}</h2>
                <p className="t-body text-[13.5px] leading-relaxed text-basalto/60">{p.resumen}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <ContactBand />
      <SiteFooter />
    </div>
  );
}
