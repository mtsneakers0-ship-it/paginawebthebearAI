"use client";

import { useMemo, useState } from "react";
import { giros } from "@/content/giros";
import { calcularPerdida } from "@/lib/calculadora";
import { Calculadora, type ValoresCalculadora } from "./Calculadora";
import { DiagnosticoForm } from "./DiagnosticoForm";

const VALORES_INICIALES: ValoresCalculadora = {
  mensajesPorDia: "",
  porcentajeSinContestar: "40",
  ticket: "",
  clientesPorCada10: "",
};

const OPCION_OTRO = "Otro negocio";

export function DiagnosticoFlujo() {
  const [giro, setGiro] = useState<string>(giros[0].nombre);
  const [valores, setValores] = useState<ValoresCalculadora>(VALORES_INICIALES);

  const resultado = useMemo(() => {
    const entrada = {
      mensajesPorDia: Number(valores.mensajesPorDia),
      porcentajeSinContestar: Number(valores.porcentajeSinContestar),
      ticket: Number(valores.ticket),
      clientesPorCada10: Number(valores.clientesPorCada10),
    };
    const completo =
      valores.mensajesPorDia !== "" &&
      valores.ticket !== "" &&
      valores.clientesPorCada10 !== "" &&
      valores.porcentajeSinContestar !== "";
    return completo ? calcularPerdida(entrada) : null;
  }, [valores]);

  const opcionesGiro = [...giros.map((g) => g.nombre), OPCION_OTRO];

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Calculadora
        valores={valores}
        onChange={setValores}
        giro={giro}
        onGiroChange={setGiro}
        opcionesGiro={opcionesGiro}
        resultado={resultado}
      />
      <DiagnosticoForm
        giro={giro}
        onGiroChange={setGiro}
        opcionesGiro={opcionesGiro}
        resultado={resultado}
      />
    </div>
  );
}
