import { MessageCircle } from "lucide-react";
import { CONTACTO } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(
        CONTACTO.whatsapp,
        "Hola, quiero información de The Bear AI",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-naranja text-carbon shadow-lg transition-colors hover:bg-hueso focus-visible:outline-hueso"
    >
      <MessageCircle aria-hidden="true" className="size-7" strokeWidth={2.25} />
    </a>
  );
}
