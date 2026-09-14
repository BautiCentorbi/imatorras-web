import Script from "next/script";
import { RECAPTCHA_SITE_KEY } from "@/lib/site-config";

/** Carga el script de reCAPTCHA v3 solo si hay site key configurada. */
export function RecaptchaScript() {
  if (!RECAPTCHA_SITE_KEY) return null;
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
      strategy="afterInteractive"
    />
  );
}
