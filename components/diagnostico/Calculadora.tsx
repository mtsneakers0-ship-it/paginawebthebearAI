"use client";

import type { ResultadoCalculadora } from "@/lib/calculadora";
import { formatearPesos } from "@/lib/whatsapp";
import { Campo, claseInput, describedBy } from "./Campos";

export type ValoresCalculadora = {
  mensajesPorDia: string;
  porcentajeSinContestar: string;
  ticket: string;
  clientesPorCada10: string;
};

type Props = {
  valores: ValoresCalculadora;
  onChange: (valores: ValoresCalculadora) => void;
  giro: string;
  onGiroChange: (giro: string) => void;
  opcionesGiro: string[];
  resultado: ResultadoCalculadora | null;
};

export function Calculadora({
  valores,
  onChange,
  giro,
  onGiroChange,
  opcionesGiro,
  resultado,
}: Props) {
  const actualizar = (campo: keyof ValoresCalculadora) => (valor: string) =>
    onChange({ ...valores, [campo]: valor });

  return (
    <section aria-labelledby="calculadora">
      <h2 id="calculadora" className="text-3xl md:text-4xl">
        Calcula cuántos clientes pierdes
      </h2>
      <p className="mt-3 text-carbon/80">
        Con tus propios números, en menos de un minuto.
      </p>

      <div className="mt-8 grid gap-5">
        <Campo id="calc-giro" etiqueta="¿A qué se dedica tu negocio?">
          <select
            id="calc-giro"
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
          id="calc-mensajes"
          etiqueta="¿Cuántos mensajes recibes al día?"
          ayuda="Suma WhatsApp, Instagram y Facebook."
        >
          <input
            id="calc-mensajes"
            type="number"
            inputMode="numeric"
            min={0}
            className={claseInput}
            value={valores.mensajesPorDia}
            onChange={(e) => actualizar("mensajesPorDia")(e.target.value)}
            aria-describedby={describedBy("calc-mensajes", "ayuda")}
            placeholder="Ej. 20"
          />
        </Campo>

        <Campo
          id="calc-sin-contestar"
          etiqueta="¿Qué porcentaje contestas tarde o no contestas?"
          ayuda="Empezamos con 40 %. Cámbialo si conoces tu número."
        >
          <input
            id="calc-sin-contestar"
            type="number"
            inputMode="numeric"
            min={0}
            max={100}
            className={claseInput}
            value={valores.porcentajeSinContestar}
            onChange={(e) => actualizar("porcentajeSinContestar")(e.target.value)}
            aria-describedby={describedBy("calc-sin-contestar", "ayuda")}
          />
        </Campo>

        <Campo
          id="calc-ticket"
          etiqueta="¿Cuánto vale un cliente nuevo, en pesos?"
          ayuda="Lo que te deja en promedio cada cliente que llega."
        >
          <input
            id="calc-ticket"
            type="number"
            inputMode="numeric"
            min={0}
            className={claseInput}
            value={valores.ticket}
            onChange={(e) => actualizar("ticket")(e.target.value)}
            aria-describedby={describedBy("calc-ticket", "ayuda")}
            placeholder="Ej. 1500"
          />
        </Campo>

        <Campo
          id="calc-conversion"
          etiqueta="De cada 10 personas que te escriben, ¿cuántas se vuelven clientes?"
          ayuda="Un número del 0 al 10."
        >
          <input
            id="calc-conversion"
            type="number"
            inputMode="numeric"
            min={0}
            max={10}
            className={claseInput}
            value={valores.clientesPorCada10}
            onChange={(e) => actualizar("clientesPorCada10")(e.target.value)}
            aria-describedby={describedBy("calc-conversion", "ayuda")}
            placeholder="Ej. 3"
          />
        </Campo>
      </div>

      <div
        aria-live="polite"
        className="mt-8 rounded-bear bg-carbon p-6 text-hueso"
      >
        {resultado ? (
          <>
            <p className="font-titulo text-2xl font-bold leading-snug md:text-3xl">
              Estimamos que pierdes alrededor de{" "}
              <span className="text-naranja">
                {resultado.clientesPerdidos.toLocaleString("es-MX")} clientes
              </span>{" "}
              y{" "}
              <span className="text-naranja">
                {formatearPesos(resultado.pesosPerdidos)}
              </span>{" "}
              al mes.
            </p>
            <p className="mt-4 text-sm text-hueso/80">
              Es una estimación con tus propios números, no una promesa.
            </p>
          </>
        ) : (
          <p className="text-hueso/85">
            Llena los datos de arriba y aquí verás tu estimación.
          </p>
        )}
      </div>
    </section>
  );
}
