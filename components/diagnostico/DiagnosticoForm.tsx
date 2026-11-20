"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import type { ResultadoCalculadora } from "@/lib/calculadora";
import { CONTACTO } from "@/lib/config";
import { validarDiagnostico, type ErroresFormulario } from "@/lib/validacion";
import { enviarAWebhook } from "@/lib/webhook";
import { buildDiagnosticoMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Campo, claseInput, describedBy } from "./Campos";

type Props = {
  giro: string;
  onGiroChange: (giro: string) => void;
  opcionesGiro: string[];
  resultado: ResultadoCalculadora | null;
};

export function DiagnosticoForm({ giro, onGiroChange, opcionesGiro, resultado }: Props) {
  const [nombre, setNombre] = useState("");
  const [negocio, setNegocio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [errores, setErrores] = useState<ErroresFormulario>({});
  const [urlWhatsApp, setUrlWhatsApp] = useState<string | null>(null);

  function alEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = { nombre, negocio, giro, whatsapp, acepta };
    const nuevosErrores = validarDiagnostico(datos);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    const mensaje = buildDiagnosticoMessage({ nombre, negocio, giro }, resultado);
    const url = buildWhatsAppUrl(CONTACTO.whatsapp, mensaje);
    setUrlWhatsApp(url);

    // Se abre WhatsApp en el mismo gesto del clic, para que el navegador no lo bloquee.
    window.open(url, "_blank", "noopener,noreferrer");

    // Opcional: solo se envía si hay una URL de webhook configurada.
    void enviarAWebhook(CONTACTO.webhook, {
      nombre,
      negocio,
      giro,
      whatsapp,
      resultado,
      aceptoAvisoDePrivacidad: acepta,
      origen: "diagnostico",
    });
  }

  return (
    <section aria-labelledby="formulario">
      <h2 id="formulario" className="text-3xl md:text-4xl">
        Pide tu diagnóstico gratis
      </h2>
      <p className="mt-3 text-carbon/80">
        Cuéntanos de tu negocio y seguimos la plática por WhatsApp.
      </p>

      <form onSubmit={alEnviar} noValidate className="mt-8 grid gap-5">
        <Campo id="f-nombre" etiqueta="Tu nombre" error={errores.nombre}>
          <input
            id="f-nombre"
            className={claseInput}
            autoComplete="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            aria-invalid={Boolean(errores.nombre)}
            aria-describedby={describedBy("f-nombre", undefined, errores.nombre)}
          />
        </Campo>

        <Campo id="f-negocio" etiqueta="Nombre de tu negocio" error={errores.negocio}>
          <input
            id="f-negocio"
            className={claseInput}
            autoComplete="organization"
            value={negocio}
            onChange={(e) => setNegocio(e.target.value)}
            aria-invalid={Boolean(errores.negocio)}
            aria-describedby={describedBy("f-negocio", undefined, errores.negocio)}
          />
        </Campo>

        <Campo id="f-giro" etiqueta="¿A qué se dedica?" error={errores.giro}>
          <select
            id="f-giro"
            className={claseInput}
            value={giro}
            onChange={(e) => onGiroChange(e.target.value)}
          >
            {opcionesGiro.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Campo>

        <Campo
          id="f-whatsapp"
          etiqueta="Tu WhatsApp"
          ayuda="A 10 dígitos, con lada."
          error={errores.whatsapp}
        >
          <input
            id="f-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={claseInput}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            aria-invalid={Boolean(errores.whatsapp)}
            aria-describedby={describedBy("f-whatsapp", "ayuda", errores.whatsapp)}
            placeholder="33 1234 5678"
          />
        </Campo>

        <div>
          <div className="flex items-start gap-3">
            <input
              id="f-acepta"
              type="checkbox"
              className="mt-1 size-6 shrink-0 accent-carbon"
              checked={acepta}
              onChange={(e) => setAcepta(e.target.checked)}
              aria-invalid={Boolean(errores.acepta)}
              aria-describedby={describedBy("f-acepta", undefined, errores.acepta)}
            />
            <label htmlFor="f-acepta">
              Acepto el{" "}
              <Link href="/aviso-de-privacidad" className="font-semibold underline underline-offset-2">
                aviso de privacidad
              </Link>
              .
            </label>
          </div>
          {errores.acepta && (
            <p id="f-acepta-error" role="alert" className="mt-1.5 text-sm font-semibold">
              {errores.acepta}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-bear bg-naranja px-6 py-3 text-base font-semibold text-carbon transition-colors hover:bg-carbon hover:text-hueso"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          Enviar por WhatsApp
        </button>
      </form>

      <div aria-live="polite">
        {urlWhatsApp && (
          <p className="mt-5 rounded-bear border-2 border-carbon p-4">
            Listo. Se abrió WhatsApp con tu mensaje. Si no se abrió,{" "}
            <a
              href={urlWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              ábrelo aquí
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
