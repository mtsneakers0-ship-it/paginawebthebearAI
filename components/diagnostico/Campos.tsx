import type { ReactNode } from "react";

export const claseInput =
  "min-h-11 w-full rounded-bear border-2 border-carbon bg-hueso px-4 py-2 text-base text-carbon placeholder:text-carbon/60 aria-[invalid=true]:border-naranja aria-[invalid=true]:bg-naranja/10";

export function Campo({
  id,
  etiqueta,
  ayuda,
  error,
  children,
}: {
  id: string;
  etiqueta: string;
  ayuda?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {etiqueta}
      </label>
      {ayuda && (
        <p id={`${id}-ayuda`} className="mt-0.5 text-sm text-carbon/70">
          {ayuda}
        </p>
      )}
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-semibold">
          {error}
        </p>
      )}
    </div>
  );
}

/** Une los ids de ayuda y error que existan, para aria-describedby. */
export function describedBy(id: string, ayuda?: string, error?: string) {
  const ids = [ayuda ? `${id}-ayuda` : "", error ? `${id}-error` : ""].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}
