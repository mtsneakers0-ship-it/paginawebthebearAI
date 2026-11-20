import { Marcador } from "./Marcadores";

export function Placeholder({
  etiqueta,
  proporcion = "aspect-[9/16]",
  className = "",
}: {
  etiqueta: string;
  proporcion?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Pendiente: ${etiqueta}`}
      className={`flex ${proporcion} w-full items-center justify-center rounded-bear border-2 border-dashed border-gris-calido bg-hueso p-4 text-center ${className}`}
    >
      <Marcador>{etiqueta}</Marcador>
    </div>
  );
}
