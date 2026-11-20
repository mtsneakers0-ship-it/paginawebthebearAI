import { afterEach, describe, expect, it, vi } from "vitest";
import { validarDiagnostico } from "@/lib/validacion";
import { enviarAWebhook } from "@/lib/webhook";

const valido = {
  nombre: "Ana López",
  negocio: "Clínica Sol",
  giro: "Clínicas dentales",
  whatsapp: "33 1234 5678",
  acepta: true,
};

describe("validarDiagnostico", () => {
  it("no devuelve errores con datos completos", () => {
    expect(validarDiagnostico(valido)).toEqual({});
  });

  it("pide nombre y negocio cuando están vacíos o solo tienen espacios", () => {
    const e = validarDiagnostico({ ...valido, nombre: "  ", negocio: "" });
    expect(e.nombre).toBeDefined();
    expect(e.negocio).toBeDefined();
  });

  it("rechaza un WhatsApp con menos de 10 dígitos", () => {
    const e = validarDiagnostico({ ...valido, whatsapp: "123 456" });
    expect(e.whatsapp).toBeDefined();
  });

  it("acepta un WhatsApp con lada y signos", () => {
    expect(validarDiagnostico({ ...valido, whatsapp: "+52 (33) 1234-5678" })).toEqual({});
  });

  it("exige aceptar el aviso de privacidad", () => {
    const e = validarDiagnostico({ ...valido, acepta: false });
    expect(e.acepta).toBeDefined();
  });
});

describe("enviarAWebhook", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("no hace nada si no hay URL configurada", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    expect(await enviarAWebhook("", { a: 1 })).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("envía los datos como JSON por POST", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    expect(await enviarAWebhook("https://ejemplo.test/hook", { a: 1 })).toBe(true);
    const [url, opciones] = fetchMock.mock.calls[0];
    expect(url).toBe("https://ejemplo.test/hook");
    expect(opciones.method).toBe("POST");
    expect(JSON.parse(opciones.body)).toEqual({ a: 1 });
  });

  it("devuelve false, sin lanzar error, si la red falla", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("sin red")));
    expect(await enviarAWebhook("https://ejemplo.test/hook", {})).toBe(false);
  });

  it("devuelve false si el servidor responde con error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    expect(await enviarAWebhook("https://ejemplo.test/hook", {})).toBe(false);
  });
});
