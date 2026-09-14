import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons";
import { CONTACT_ADDRESS, CONTACT_EMAIL, INSTAGRAM_HANDLE, WHATSAPP_URL } from "@/lib/site-config";

export function ContactBand({
  id,
  eyebrow = "Contacto",
  title = "No hay revolución sin revolucionarios.",
  body = "Distribución en todo el país. Para consultas comerciales, prensa o puntos de venta, escribinos directamente — te responde nuestro equipo comercial.",
  // La Home usa el ancho completo (sin límite) tal como estaba — el resto
  // de las páginas pasan `contained` para calzar con el margen del Hero
  // (max-w-[1440px], igual que PageHeader).
  contained = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  contained?: boolean;
}) {
  return (
    <section id={id} className="bg-basalto py-24 text-alba md:py-28">
      <div className={contained ? "mx-auto max-w-[1440px] px-6 md:px-16" : "px-6 md:px-16"}>
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="t-destacado mb-4 text-[11px] text-alba/50">{eyebrow}</p>
            <p className="t-headline max-w-sm text-balance text-3xl md:text-4xl">{title}</p>
            <p className="t-body mt-5 max-w-[46ch] text-[14.5px] leading-relaxed text-alba/58">{body}</p>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-acento px-6 py-4 t-cta text-[14px] text-alba transition-transform duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Escribinos por WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-sm border border-alba/40 px-6 py-4 t-cta text-[14px] text-alba transition-colors duration-200 hover:border-alba hover:bg-alba/10"
            >
              Completar formulario de contacto
            </Link>
          </div>
        </div>

        <div className="t-destacado mt-16 flex flex-col gap-3 border-t border-alba/15 pt-7 text-[10.5px] text-alba/45 sm:flex-row sm:justify-between">
          <span>{CONTACT_ADDRESS}</span>
          <span>{INSTAGRAM_HANDLE}</span>
          <span>{CONTACT_EMAIL}</span>
        </div>
      </div>
    </section>
  );
}
