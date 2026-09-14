import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_ADDRESS, CONTACT_EMAIL } from "@/lib/site-config";

type Body = {
  nombre?: string;
  email?: string;
  motivo?: string;
  mensaje?: string;
  recaptchaToken?: string;
};

async function verificarRecaptcha(token: string | undefined) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  // Sin secret configurado, no bloqueamos el formulario (ver
  // .env.local.example) — se loguea para que se note en desarrollo.
  if (!secret) {
    console.warn("[contact] RECAPTCHA_SECRET_KEY no configurada — se omite la verificación.");
    return true;
  }
  if (!token) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success: boolean; score?: number };
  // v3: además de "success", conviene mirar el score (0 a 1, más alto = más humano).
  return data.success && (data.score === undefined || data.score >= 0.5);
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const { nombre, email, motivo, mensaje, recaptchaToken } = body;
  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  const humano = await verificarRecaptcha(recaptchaToken);
  if (!humano) {
    return NextResponse.json({ error: "No pudimos verificar que sos una persona. Probá de nuevo." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY no configurada — no se pudo enviar el email.");
    return NextResponse.json(
      { error: "El envío de formularios todavía no está configurado en el servidor." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const to = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    await resend.emails.send({
      // Nombre real de la marca, sin "Web"/"No-reply" — los filtros de
      // spam leen el display name igual que una persona.
      from: `iMatorras <${from}>`,
      to,
      replyTo: email,
      subject: `Nuevo mensaje de ${nombre} — ${motivo || "Consulta"}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nMotivo: ${motivo || "—"}\n\n${mensaje}\n\n—\nEnviado desde el formulario de contacto de imatorras.com`,
      html: `
        <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #212121;">
          <p style="font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #ab1644; margin: 0 0 16px;">Nuevo mensaje del sitio</p>
          <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
            <strong>${escape(nombre)}</strong> (${escape(email)}) escribió por
            <strong>${escape(motivo || "Consulta general")}</strong>:
          </p>
          <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap; background: #f4f4f2; border-radius: 4px; padding: 16px 18px; margin: 0 0 24px;">${escape(mensaje)}</p>
          <p style="font-size: 11px; color: #6b6b66; border-top: 1px solid #e2e2dd; padding-top: 14px; margin: 0;">
            iMatorras — ${CONTACT_ADDRESS}<br>Enviado desde el formulario de contacto de imatorras.com
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[contact] Error enviando con Resend:", err);
    return NextResponse.json({ error: "No pudimos enviar el mensaje. Intentá de nuevo en un momento." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
