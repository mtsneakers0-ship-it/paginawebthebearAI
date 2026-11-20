export type Caso = {
  negocio: string;
  giro: string;
  problema: string;
  queHicimos: string;
  resultado: string;
};

/**
 * Casos reales. Mientras esta lista esté vacía, la página /casos muestra la
 * plantilla con marcadores y no aparece en el menú ni en buscadores.
 * No agregues casos inventados: solo resultados que el cliente haya autorizado.
 */
export const casos: Caso[] = [];
