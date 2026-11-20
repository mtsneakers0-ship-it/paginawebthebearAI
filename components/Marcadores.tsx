import { Fragment } from "react";

/** Dato pendiente: se ve a propósito para que no pase a producción sin llenar. */
export function Marcador({ children }: { children: string }) {
  return (
    <span className="rounded-md bg-naranja/25 px-1.5 py-0.5 font-mono text-[0.9em] font-medium text-carbon outline outline-1 outline-dashed outline-carbon/40">
      {children}
    </span>
  );
}

/** Convierte cualquier texto entre corchetes mayúsculos, como [CASO REAL], en un marcador visible. */
export function ConMarcadores({ texto }: { texto: string }) {
  const partes = texto.split(/(\[[A-ZÁÉÍÓÚÑ0-9 _./-]+\])/);
  return (
    <>
      {partes.map((parte, i) =>
        /^\[[A-ZÁÉÍÓÚÑ0-9 _./-]+\]$/.test(parte) ? (
          <Marcador key={i}>{parte}</Marcador>
        ) : (
          <Fragment key={i}>{parte}</Fragment>
        ),
      )}
    </>
  );
}
