"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "imatorras-cookie-consent";

/**
 * Aviso de cookies simple: informa y guarda la elección en localStorage.
 * Hoy el sitio usa cookies técnicas (reCAPTCHA) — si más adelante se suma
 * analítica no esencial, este es el lugar para condicionar su carga al
 * valor guardado acá en vez de sumar otro banner.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Se lee localStorage recién en el cliente a propósito (server-safe: en
    // el render de servidor no existe, así que el banner nunca se muestra
    // ahí) — es el único momento en que sabemos si ya hubo una elección.
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lectura de localStorage, no hay forma de saberlo antes del mount
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage puede fallar (modo privado, etc.) — no bloquea el sitio.
    }
  }, []);

  function responder(valor: "aceptado" | "rechazado") {
    try {
      localStorage.setItem(STORAGE_KEY, valor);
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4">
      <div className="flex w-full max-w-xl flex-col items-start gap-4 rounded-sm border border-basalto/10 bg-alba-card p-5 shadow-xl shadow-basalto/15 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-body text-[12.5px] leading-relaxed text-basalto/70">
          Usamos cookies técnicas para proteger el formulario de contacto contra spam
          (reCAPTCHA). No usamos cookies de publicidad ni seguimiento.
        </p>
        <div className="flex flex-none gap-2.5">
          <button
            type="button"
            onClick={() => responder("rechazado")}
            className="t-cta rounded-sm border border-basalto/20 px-4 py-2 text-[12px] text-basalto/70 transition-colors hover:border-basalto/40"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => responder("aceptado")}
            className="t-cta rounded-sm bg-basalto px-4 py-2 text-[12px] text-alba"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
