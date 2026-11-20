import type { ResultadoCalculadora } from "./calculadora";

export type DatosDiagnostico = {
  nombre: string;
  negocio: string;
  giro: string;
};

export function buildWhatsAppUrl(numero: string, mensaje?: string): string {
  const digitos = numero.replace(/\D/g, "");
  const texto = mensaje ? encodeURIComponent(mensaje) : "";

  if (!digitos) {
    // Sin número configurado, la persona elige el contacto dentro de WhatsApp.
    return `https://api.whatsapp.com/send${texto ? `?text=${texto}` : ""}`;
  }
  return `https://wa.me/${digitos}${texto ? `?text=${texto}` : ""}`;
}

export function formatearPesos(valor: number): string {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  });
}

export function buildDiagnosticoMessage(
  datos: DatosDiagnostico,
  resultado: ResultadoCalculadora | null,
): string {
  const lineas = [
    `Hola, soy ${datos.nombre} de ${datos.negocio} (${datos.giro}).`,
    "Quiero mi diagnóstico gratis de The Bear AI.",
  ];
  if (resultado) {
    lineas.push(
      `Con mis números, estimo que pierdo alrededor de ${resultado.clientesPerdidos} clientes y ${formatearPesos(resultado.pesosPerdidos)} al mes.`,
    );
  }
  return lineas.join("\n");
}
