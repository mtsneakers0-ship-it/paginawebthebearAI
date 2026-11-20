import Link from "next/link";
import type { ReactNode } from "react";

type Variante = "primario" | "secundario-oscuro" | "secundario-claro";

const estilos: Record<Variante, string> = {
  // Naranja con texto carbón: contraste 6.6:1.
  primario: "bg-naranja text-carbon hover:bg-hueso",
  "secundario-oscuro":
    "border-2 border-hueso text-hueso hover:bg-hueso hover:text-carbon",
  "secundario-claro":
    "border-2 border-carbon text-carbon hover:bg-carbon hover:text-hueso",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-bear px-6 py-3 text-base font-semibold transition-colors";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variante?: Variante;
  externo?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variante = "primario",
  externo = false,
  className = "",
}: ButtonProps) {
  const clases = `${base} ${estilos[variante]} ${className}`;
  if (externo) {
    return (
      <a href={href} className={clases} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={clases}>
      {children}
    </Link>
  );
}
