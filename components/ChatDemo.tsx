import type { Mensaje } from "@/content/giros";

export function ChatDemo({
  mensajes,
  etiqueta,
}: {
  mensajes: Mensaje[];
  etiqueta: string;
}) {
  return (
    <figure className="overflow-hidden rounded-bear bg-grafito text-carbon">
      <figcaption className="flex items-center justify-between gap-3 border-b border-hueso/10 px-5 py-3 text-hueso">
        <span className="font-semibold">{etiqueta}</span>
        <span className="text-sm text-hueso/70">Ejemplo ilustrativo</span>
      </figcaption>
      <ol
        aria-label="Ejemplo de conversación"
        className="flex flex-col gap-3 p-5"
      >
        {mensajes.map((m, i) => {
          const esNegocio = m.de === "negocio";
          return (
            <li
              key={i}
              className={`max-w-[85%] rounded-bear px-4 py-2.5 ${
                esNegocio
                  ? "self-end rounded-br-sm bg-naranja"
                  : "self-start rounded-bl-sm bg-hueso"
              }`}
            >
              <span className="sr-only">
                {esNegocio ? "Negocio: " : "Cliente: "}
              </span>
              {m.texto}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
