import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";
import { DiagnosticoFlujo } from "@/components/diagnostico/DiagnosticoFlujo";
import { CONTACTO, esMarcador } from "@/lib/config";

export const metadata: Metadata = {
  title: "Diagnóstico gratis",
  description:
    "Calcula cuántos clientes pierde tu negocio por mensajes sin contestar y agenda un diagnóstico gratis de 15 minutos.",
  alternates: { canonical: "/diagnostico" },
};

export default function Diagnostico() {
  const hayAgenda = !esMarcador(CONTACTO.agenda);

  return (
    <>
      <section className="bg-carbon text-hueso">
        <Container className="py-16 md:py-20">
          <h1 className="max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Diagnóstico gratis para tu negocio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-hueso/85">
            Primero calcula cuánto te cuesta no contestar a tiempo. Después
            pide tu diagnóstico por WhatsApp o agenda una llamada de 15
            minutos.
          </p>
        </Container>
      </section>

      <section className="on-hueso py-16 md:py-24">
        <Container>
          <DiagnosticoFlujo />
        </Container>
      </section>

      <section className="on-hueso pb-16 md:pb-24" aria-labelledby="agenda">
        <Container>
          <h2 id="agenda" className="text-3xl md:text-4xl">
            O agenda una llamada de 15 minutos
          </h2>
          <div className="mt-8">
            {hayAgenda ? (
              <iframe
                src={CONTACTO.agenda}
                title="Agenda tu diagnóstico de 15 minutos"
                loading="lazy"
                className="h-[720px] w-full rounded-bear border-2 border-carbon bg-hueso"
              />
            ) : (
              <Placeholder
                etiqueta={CONTACTO.agenda}
                proporcion="aspect-[16/10]"
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
