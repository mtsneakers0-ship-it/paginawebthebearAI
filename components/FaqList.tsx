import { ChevronDown } from "lucide-react";
import type { PreguntaFrecuente } from "@/content/giros";
import { ConMarcadores } from "./Marcadores";

export function FaqList({ preguntas }: { preguntas: PreguntaFrecuente[] }) {
  return (
    <div className="divide-y divide-gris-calido/60 border-y border-gris-calido/60">
      {preguntas.map((p) => (
        <details key={p.pregunta} className="group py-1">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left font-titulo text-lg font-bold [&::-webkit-details-marker]:hidden">
            {p.pregunta}
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="max-w-3xl pb-4 text-carbon/80">
            <ConMarcadores texto={p.respuesta} />
          </p>
        </details>
      ))}
    </div>
  );
}
