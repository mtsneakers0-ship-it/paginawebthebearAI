import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CierreCTA } from "@/components/CierreCTA";
import { Pasos } from "@/components/Pasos";
import { SistemaOsoDiagram } from "@/components/SistemaOsoDiagram";
import { capas } from "@/content/home";

export const metadata: Metadata = {
  title: "Cómo funciona el Sistema Oso",
  description:
    "Atraer, convertir y crecer: las tres capas que conectamos para que tu negocio local consiga clientes, les conteste y los haga regresar.",
  alternates: { canonical: "/como-funciona" },
};

export default function ComoFunciona() {
  return (
    <>
      <section className="bg-carbon text-hueso">
        <Container className="py-16 md:py-24">
          <h1 className="max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            El Sistema Oso: tres capas que trabajan juntas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-hueso/85">
            Un anuncio sin respuesta pierde dinero. Una respuesta sin
            seguimiento pierde clientes. Por eso las conectamos y medimos cada
            una.
          </p>
        </Container>
      </section>

      <section className="bg-grafito py-16 text-hueso md:py-24" aria-label="Diagrama del sistema">
        <Container>
          <SistemaOsoDiagram />
        </Container>
      </section>

      <section className="on-hueso py-16 md:py-24" aria-labelledby="capas">
        <Container>
          <h2 id="capas" className="text-3xl md:text-5xl">
            Qué hacemos en cada capa
          </h2>
          <div className="mt-10 divide-y divide-gris-calido/60 border-y border-gris-calido/60">
            {capas.map((c) => (
              <article
                key={c.nombre}
                className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:gap-10"
              >
                <div>
                  <p className="font-titulo text-5xl font-extrabold">{c.numero}</p>
                  <h3 className="mt-1 text-2xl">{c.nombre}</h3>
                </div>
                <div>
                  <p className="text-lg">{c.detalle}</p>
                  <p className="mt-4 text-carbon/80">
                    <span className="font-semibold text-carbon">Se mide: </span>
                    {c.seMide}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-hueso pb-16 md:pb-24" aria-labelledby="empezamos">
        <Container>
          <h2 id="empezamos" className="text-3xl md:text-5xl">
            Cómo empezamos
          </h2>
          <div className="mt-10">
            <Pasos />
          </div>
        </Container>
      </section>

      <CierreCTA />
    </>
  );
}
