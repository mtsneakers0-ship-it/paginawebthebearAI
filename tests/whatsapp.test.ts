import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, buildDiagnosticoMessage } from "@/lib/whatsapp";

describe("buildWhatsAppUrl", () => {
  it("usa solo los dígitos del número y codifica el mensaje", () => {
    const url = buildWhatsAppUrl("+52 33 1234 5678", "Hola, ¿qué tal?");
    expect(url).toBe(
      "https://wa.me/523312345678?text=Hola%2C%20%C2%BFqu%C3%A9%20tal%3F",
    );
  });

  it("sin número válido deja que la persona elija el contacto", () => {
    const url = buildWhatsAppUrl("[WHATSAPP]", "Hola");
    expect(url).toBe("https://api.whatsapp.com/send?text=Hola");
  });

  it("sin mensaje devuelve solo el enlace al número", () => {
    expect(buildWhatsAppUrl("523312345678")).toBe("https://wa.me/523312345678");
  });
});

describe("buildDiagnosticoMessage", () => {
  const datos = { nombre: "Ana", negocio: "Clínica Sol", giro: "Clínicas dentales" };

  it("incluye nombre, negocio y giro", () => {
    const m = buildDiagnosticoMessage(datos, null);
    expect(m).toContain("Ana");
    expect(m).toContain("Clínica Sol");
    expect(m).toContain("Clínicas dentales");
  });

  it("agrega el resultado de la calculadora cuando existe", () => {
    const m = buildDiagnosticoMessage(datos, { clientesPerdidos: 48, pesosPerdidos: 48000 });
    expect(m).toContain("48");
    expect(m).toMatch(/48,000|48\,000|48 000/);
  });

  it("no menciona la calculadora si no hay resultado", () => {
    const m = buildDiagnosticoMessage(datos, null);
    expect(m).not.toMatch(/calculadora/i);
  });
});
