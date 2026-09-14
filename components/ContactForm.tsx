"use client";

import { useState, type FormEvent } from "react";
import { RECAPTCHA_SITE_KEY } from "@/lib/site-config";

const MOTIVOS = ["Consulta general", "Distribución / puntos de venta", "Prensa", "Otro"];

type Estado = "idle" | "enviando" | "ok" | "error";

async function getRecaptchaToken(): Promise<string | undefined> {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return undefined;
  await new Promise<void>((resolve) => window.grecaptcha!.ready(resolve));
  return window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: "contact" });
}

export function ContactForm() {
  const [motivo, setMotivo] = useState(MOTIVOS[0]);
  const [estado, setEstado] = useState<Estado>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          email: data.get("email"),
          motivo,
          mensaje: data.get("mensaje"),
          recaptchaToken,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No pudimos enviar el mensaje.");
      }

      setEstado("ok");
      form.reset();
      setMotivo(MOTIVOS[0]);
    } catch (err) {
      setEstado("error");
      setError(err instanceof Error ? err.message : "No pudimos enviar el mensaje.");
    }
  }

  const inputClass =
    "w-full rounded-sm border border-basalto/18 bg-alba px-4 py-3 text-[14px] text-basalto placeholder:text-basalto/35 outline-none transition-colors focus:border-basalto/50 disabled:opacity-50";

  if (estado === "ok") {
    return (
      <div className="flex flex-col items-start gap-2 py-6">
        <p className="t-headline text-lg text-basalto">¡Gracias! Ya recibimos tu mensaje.</p>
        <p className="t-body text-[13.5px] text-basalto/55">Te vamos a responder a la brevedad.</p>
        <button
          type="button"
          onClick={() => setEstado("idle")}
          className="t-cta mt-3 text-[13px] text-acento"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="t-destacado text-[10px] text-basalto/50">Nombre</span>
          <input id="contact-nombre" name="nombre" type="text" required disabled={estado === "enviando"} className={inputClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="t-destacado text-[10px] text-basalto/50">Email</span>
          <input id="contact-email" name="email" type="email" required disabled={estado === "enviando"} className={inputClass} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="t-destacado text-[10px] text-basalto/50">Motivo</span>
        <div className="flex flex-wrap gap-2">
          {MOTIVOS.map((m) => (
            <button
              key={m}
              type="button"
              disabled={estado === "enviando"}
              onClick={() => setMotivo(m)}
              className={`t-destacado rounded-full border px-3.5 py-2 text-[10.5px] transition-colors disabled:opacity-50 ${
                motivo === m
                  ? "border-basalto bg-basalto text-alba"
                  : "border-basalto/20 text-basalto/60 hover:border-basalto/40"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </label>

      <label className="flex flex-col gap-2">
        <span className="t-destacado text-[10px] text-basalto/50">Mensaje</span>
        <textarea id="contact-mensaje" name="mensaje" rows={5} required disabled={estado === "enviando"} className={inputClass} />
      </label>

      {error && (
        <p role="alert" className="t-body rounded-sm bg-linea-sanjose/10 px-4 py-3 text-[13px] text-linea-sanjose">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="t-cta mt-2 inline-flex w-fit items-center gap-2.5 rounded-sm bg-basalto px-7 py-3.5 text-[14px] text-alba transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {estado === "enviando" ? "Enviando…" : "Enviar consulta"}
      </button>

      {RECAPTCHA_SITE_KEY && (
        <p className="t-body text-[10.5px] text-basalto/35">
          Este sitio está protegido por reCAPTCHA. Aplican la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline">
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline">
            Términos de Servicio
          </a>{" "}
          de Google.
        </p>
      )}
    </form>
  );
}
