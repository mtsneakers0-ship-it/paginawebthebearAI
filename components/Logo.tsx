type LogoProps = {
  /** Fondo donde se coloca: "claro" (hueso) u "oscuro" (carbón). */
  fondo?: "claro" | "oscuro";
  /** Si se muestra solo el ícono, se anuncia con aria-label. */
  conTexto?: boolean;
  animado?: boolean;
  /** Tamaño del ícono en píxeles. */
  tamano?: number;
  className?: string;
};

export function Huella({
  fondo = "claro",
  animado = false,
  tamano = 40,
  decorativo = false,
  className = "",
}: Omit<LogoProps, "conTexto"> & { decorativo?: boolean }) {
  const base = fondo === "oscuro" ? "#F4F1EA" : "#141414";
  return (
    <svg
      viewBox="0 0 200 200"
      width={tamano}
      height={tamano}
      xmlns="http://www.w3.org/2000/svg"
      className={`${animado ? "huella-anim" : ""} ${className}`}
      {...(decorativo
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": "The Bear AI" })}
    >
      <rect className="dedo" x="40" y="68" width="24" height="28" rx="12" fill={base} />
      <rect className="dedo" x="72" y="58" width="24" height="38" rx="12" fill={base} />
      <rect className="dedo" x="104" y="48" width="24" height="48" rx="12" fill={base} />
      <rect className="dedo" x="136" y="38" width="24" height="58" rx="12" fill="#FF6A2B" />
      <path
        d="M100 106 C126 106 150 128 150 150 C150 170 134 178 118 174 C110 172 106 168 100 168 C94 168 90 172 82 174 C66 178 50 170 50 150 C50 128 74 106 100 106 Z"
        fill={base}
      />
    </svg>
  );
}

export function Logo({
  fondo = "claro",
  conTexto = true,
  animado = false,
  tamano = 40,
  className = "",
}: LogoProps) {
  if (!conTexto) {
    return <Huella fondo={fondo} animado={animado} tamano={tamano} className={className} />;
  }
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Huella fondo={fondo} animado={animado} tamano={tamano} decorativo />
      <span
        className={`font-titulo text-base font-extrabold uppercase tracking-[0.22em] ${
          fondo === "oscuro" ? "text-hueso" : "text-carbon"
        }`}
      >
        The Bear AI
      </span>
    </span>
  );
}
