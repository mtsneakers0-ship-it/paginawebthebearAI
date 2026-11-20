/**
 * Envía los datos del diagnóstico a la URL configurada en NEXT_PUBLIC_WEBHOOK_URL.
 * Si no hay URL, no hace nada. Nunca lanza error: el flujo principal es WhatsApp.
 */
export async function enviarAWebhook(
  url: string,
  datos: Record<string, unknown>,
): Promise<boolean> {
  if (!url) return false;
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
      keepalive: true,
    });
    return respuesta.ok;
  } catch {
    return false;
  }
}
