/**
 * Datos de contacto en un solo lugar. Se leen de variables de entorno
 * (ver .env.example). Si falta alguno queda un marcador visible.
 */
export const SITE = {
  nombre: "The Bear AI",
  lema: "El oso que no hiberna.",
  descripcion:
    "Construimos la infraestructura de IA de tu negocio local en Guadalajara: anuncios que atraen clientes, un agente de WhatsApp que les contesta y los agenda, y una app propia para que regresen.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const CONTACTO = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "[WHATSAPP]",
  agenda: process.env.NEXT_PUBLIC_CAL_URL ?? "[LINK_CAL]",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "[INSTAGRAM]",
  correo: process.env.NEXT_PUBLIC_CORREO ?? "[CORREO]",
  webhook: process.env.NEXT_PUBLIC_WEBHOOK_URL ?? "",
} as const;

export function esMarcador(valor: string): boolean {
  return valor.startsWith("[") && valor.endsWith("]");
}

export function urlInstagram(): string | null {
  if (esMarcador(CONTACTO.instagram)) return null;
  return `https://instagram.com/${CONTACTO.instagram.replace(/^@/, "")}`;
}
