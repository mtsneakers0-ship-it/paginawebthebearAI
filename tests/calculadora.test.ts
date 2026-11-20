import { describe, expect, it } from "vitest";
import { calcularPerdida } from "@/lib/calculadora";

describe("calcularPerdida", () => {
  it("aplica la fórmula mensajes × 30 × % × (clientes/10) × ticket", () => {
    const r = calcularPerdida({
      mensajesPorDia: 20,
      porcentajeSinContestar: 40,
      clientesPorCada10: 2,
      ticket: 1000,
    });
    // 20 × 30 × 0.4 × 0.2 = 48 clientes
    expect(r.clientesPerdidos).toBe(48);
    expect(r.pesosPerdidos).toBe(48000);
  });

  it("redondea los clientes perdidos al entero más cercano", () => {
    const r = calcularPerdida({
      mensajesPorDia: 7,
      porcentajeSinContestar: 40,
      clientesPorCada10: 3,
      ticket: 500,
    });
    // 7 × 30 × 0.4 × 0.3 = 25.2
    expect(r.clientesPerdidos).toBe(25);
    expect(r.pesosPerdidos).toBe(12500); // 25 clientes × $500: las dos cifras deben cuadrar
  });

  it("devuelve cero cuando algún dato es cero", () => {
    const r = calcularPerdida({
      mensajesPorDia: 0,
      porcentajeSinContestar: 40,
      clientesPorCada10: 2,
      ticket: 1000,
    });
    expect(r).toEqual({ clientesPerdidos: 0, pesosPerdidos: 0 });
  });

  it("trata valores negativos o inválidos como cero", () => {
    const r = calcularPerdida({
      mensajesPorDia: -5,
      porcentajeSinContestar: Number.NaN,
      clientesPorCada10: 2,
      ticket: 1000,
    });
    expect(r).toEqual({ clientesPerdidos: 0, pesosPerdidos: 0 });
  });

  it("limita el porcentaje a 100 y los clientes por cada 10 a 10", () => {
    const r = calcularPerdida({
      mensajesPorDia: 1,
      porcentajeSinContestar: 250,
      clientesPorCada10: 99,
      ticket: 100,
    });
    // 1 × 30 × 1 × 1 = 30
    expect(r.clientesPerdidos).toBe(30);
    expect(r.pesosPerdidos).toBe(3000);
  });
});
