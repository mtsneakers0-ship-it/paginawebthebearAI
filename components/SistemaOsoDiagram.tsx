import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Megaphone,
  MessagesSquare,
  Repeat,
  TrendingUp,
} from "lucide-react";
import { capas, TEXTO_FLECHA_REGRESO } from "@/content/home";

const iconos = {
  Atraer: Megaphone,
  Convertir: MessagesSquare,
  Crecer: TrendingUp,
} as const;

/** Diagrama de las 3 capas. Está pensado para fondos oscuros (carbón o grafito). */
export function SistemaOsoDiagram() {
  return (
    <div>
      <ol className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
        {capas.map((capa, i) => {
          const Icono = iconos[capa.nombre];
          return (
            <li key={capa.nombre} className="contents">
              <div className="flex flex-col rounded-bear bg-carbon p-6 text-hueso">
                <div className="flex items-center justify-between">
                  <span
                    className="font-titulo text-5xl font-extrabold text-naranja"
                    aria-hidden="true"
                  >
                    {capa.numero}
                  </span>
                  <Icono
                    aria-hidden="true"
                    className="size-7 text-hueso"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mt-3 text-2xl">
                  <span className="sr-only">Capa {capa.numero}: </span>
                  {capa.nombre}
                </h3>
                <p className="mt-2 flex-1 text-hueso/85">{capa.resumen}</p>
                <p className="mt-4 border-t border-gris-calido/40 pt-3 text-sm">
                  <span className="text-hueso/70">Se mide: </span>
                  <span className="font-semibold">{capa.seMide}</span>
                </p>
              </div>
              {i < capas.length - 1 && (
                <div
                  className="flex items-center justify-center text-naranja"
                  aria-hidden="true"
                >
                  <ArrowDown className="size-7 md:hidden" strokeWidth={2.5} />
                  <ArrowRight
                    className="hidden size-7 md:block"
                    strokeWidth={2.5}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Flecha que regresa de la capa 3 a la capa 1 (escritorio). */}
      <div
        aria-hidden="true"
        className="relative mx-[16.66%] mt-2 hidden h-12 rounded-b-bear border-2 border-t-0 border-hueso/70 md:block"
      >
        <ArrowUp
          className="absolute -top-2.5 left-0 size-6 -translate-x-1/2 text-naranja"
          strokeWidth={3}
        />
      </div>
      <p className="mx-auto mt-4 flex max-w-xl items-start justify-center gap-3 text-center text-hueso md:mt-3">
        <Repeat
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-naranja md:hidden"
        />
        {TEXTO_FLECHA_REGRESO}
      </p>
    </div>
  );
}
