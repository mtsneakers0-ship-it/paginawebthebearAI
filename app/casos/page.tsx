import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";
import { Marcador } from "@/components/Marcadores";
import { casos } from "@/content/casos";

const hayCasos = casos.length > 0;

export const metadata: Metadata = {
  title: "Casos de éxito",
  description: "Negocios locales que ya trabajan con The Bear AI y lo que lograron.",
  alternates: { canonical: "/casos" },
  // Se oculta de buscadores hasta que haya casos reales.
  robots: hayCasos ? undefined : { index: false, follow: true },
};

const campos = [
  ["El problema", "[PROBLEMA DEL CLIENTE]"],
  ["Qué hicimos", "[QUÉ SE HIZO]"],
  ["El resultado", "[RESULTADO MEDIDO]"],
] as const;

export default function Casos() {
  return (
    <>
      <section className="bg-carbon text-hueso">
        <Container className="py-16 md:py-20">
          <h1 className="max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Casos de éxito
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-hueso/85">
            {hayCasos
              ? "Negocios reales y los números que lograron."
              : "Estamos preparando los primeros casos reales. Aquí aparecerán con el permiso de cada negocio."}
          </p>
        </Container>
      </section>

      <section className="on-hueso py-16 md:py-24">
        <Container>
          {hayCasos ? (
            <ul className="grid gap-6 md:grid-cols-2">
              {casos.map((c) => (
                <li key={c.negocio} className="rounded-bear border-2 border-carbon p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-carbon/70">
                    {c.giro}
                  </p>
                  <h2 className="mt-1 text-2xl">{c.negocio}</h2>
                  <dl className="mt-4 grid gap-3">
                    {[
                      ["El problema", c.problema],
                      ["Qué hicimos", c.queHicimos],
                      ["El resultado", c.resultado],
                    ].map(([titulo, texto]) => (
                      <div key={titulo}>
                        <dt className="font-semibold">{titulo}</dt>
                        <dd className="text-carbon/80">{texto}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          ) : (
            <article className="rounded-bear border-2 border-dashed border-gris-calido p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-carbon/70">
                Plantilla de caso
              </p>
              <h2 className="mt-1 text-2xl">
                <Marcador>[CASO REAL]</Marcador>
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,260px)_1fr]">
                <Placeholder etiqueta="[FOTO DEL NEGOCIO]" proporcion="aspect-[4/5]" />
                <dl className="grid content-start gap-4">
                  {campos.map(([titulo, marcador]) => (
                    <div key={titulo}>
                      <dt className="font-semibold">{titulo}</dt>
                      <dd className="mt-1">
                        <Marcador>{marcador}</Marcador>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          )}
          <div className="mt-10">
            <Button href="/diagnostico" variante="secundario-claro">
              Haz tu diagnóstico gratis
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
