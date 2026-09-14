import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CONTACT_ADDRESS, CONTACT_EMAIL, INSTAGRAM_HANDLE, WHATSAPP_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos por WhatsApp o completá el formulario para consultas comerciales, prensa o distribución. Bodega iMatorras, Tupungato, Mendoza.",
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <PageHeader
        eyebrow="Contacto"
        title="Hablemos."
        lede="Para consultas comerciales, prensa, distribución o cualquier otra cosa — te responde nuestro equipo directamente, no un bot."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-16">
        <Reveal className="flex flex-col gap-10">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            className="group flex items-center justify-between rounded-sm bg-basalto px-6 py-5 text-alba transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-3">
              <WhatsAppIcon className="h-5 w-5" />
              <span className="t-cta text-[15px]">Escribir por WhatsApp</span>
            </span>
            <span className="t-body text-[12px] text-alba/50">Respuesta más rápida</span>
          </Link>

          <div className="flex flex-col gap-6">
            <div>
              <p className="t-destacado text-[10px] text-basalto/45">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="t-subtitle text-[15px] text-basalto/85 hover:text-acento">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="t-destacado text-[10px] text-basalto/45">Bodega</p>
              <p className="t-subtitle text-[15px] text-basalto/85">{CONTACT_ADDRESS}</p>
            </div>
            <div>
              <p className="t-destacado text-[10px] text-basalto/45">Instagram</p>
              <a
                href="https://instagram.com/bodegaimatorras"
                target="_blank"
                rel="noreferrer"
                className="t-subtitle text-[15px] text-basalto/85 hover:text-acento"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-sm border border-basalto/10 bg-alba-card p-8 md:p-10">
            <p className="t-headline mb-1 text-xl">Formulario de contacto</p>
            <p className="t-body mb-7 text-[13px] text-basalto/50">
              Te respondemos por email a la brevedad.
            </p>
            <ContactForm />
          </div>
        </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
