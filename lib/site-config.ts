// Datos de contacto reales pendientes de confirmar — se detectaron DOS números
// distintos en el sitio actual (uno en el texto de contacto, otro en el
// schema.org de la home). Confirmar cuál es el vigente antes de publicar.
export const WHATSAPP_NUMBER = "5492613629116"; // TODO: confirmar número vigente
export const WHATSAPP_MESSAGE = "Hola! Quiero hacer una consulta sobre los vinos de iMatorras.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const CONTACT_EMAIL = "contacto@imatorras.com";
export const CONTACT_ADDRESS = "Marconi Sur 1100, Tupungato · Mendoza, Argentina";
export const INSTAGRAM_HANDLE = "@bodegaimatorras";

// Formulario de contacto (Resend + reCAPTCHA v3) — ver .env.local.example
// para las variables que hay que completar. Server-only, así que estas
// tres son las únicas que se leen fuera de una Route Handler.
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
