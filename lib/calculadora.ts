export type EntradaCalculadora = {
  mensajesPorDia: number;
  /** 0–100: porcentaje de mensajes que se contestan tarde o no se contestan. */
  porcentajeSinContestar: number;
  /** 0–10: de cada 10 personas que escriben, cuántas se vuelven clientes. */
  clientesPorCada10: number;
  /** Lo que vale un cliente nuevo, en pesos. */
  ticket: number;
};

export type ResultadoCalculadora = {
  clientesPerdidos: number;
  pesosPerdidos: number;
};

const DIAS_POR_MES = 30;

function limitar(valor: number, minimo: number, maximo: number): number {
  if (!Number.isFinite(valor)) return minimo;
  return Math.min(Math.max(valor, minimo), maximo);
}

export function calcularPerdida(entrada: EntradaCalculadora): ResultadoCalculadora {
  const mensajes = limitar(entrada.mensajesPorDia, 0, Number.MAX_SAFE_INTEGER);
  const sinContestar = limitar(entrada.porcentajeSinContestar, 0, 100) / 100;
  const conversion = limitar(entrada.clientesPorCada10, 0, 10) / 10;
  const ticket = limitar(entrada.ticket, 0, Number.MAX_SAFE_INTEGER);

  const clientesPerdidos = Math.round(mensajes * DIAS_POR_MES * sinContestar * conversion);
  return { clientesPerdidos, pesosPerdidos: clientesPerdidos * ticket };
}
