import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { CierreCTA } from "@/components/CierreCTA";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { Huella } from "@/components/Logo";
import { Pasos } from "@/components/Pasos";
import { SistemaOsoDiagram } from "@/components/SistemaOsoDiagram";
import { giros } from "@/content/giros";
import {
  DATO,
  IDENTIFICADOR_OTRO,
  SUBTITULO_HERO,
  TITULAR_HERO,
  comparativa,
  faqInicio,
} from "@/content/home";
import { CONTACTO } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const tarjeta =
  "group flex h-full flex-col justify-between rounded-bear border-2 border-carbon p-6 transition-colors hover:bg-carbon hover:text-hueso";

export default function Inicio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-carbon text-hueso">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              {TITULAR_HERO.inicio}{" "}
              <span className="text-naranja">{TITULAR_HERO.destacado}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-hueso/85">
              {SUBTITULO_HERO}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/diagnostico">Calcula cuántos clientes pierdes</Button>
              <Button
                href={buildWhatsAppUrl(
                  CONTACTO.whatsapp,
                  "Hola, quiero información de The Bear AI",
                )}
                variante="secundario-oscuro"
                externo
              >
                Escríbenos por WhatsApp
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Huella fondo="oscuro" animado tamano={280} className="h-auto w-48 md:w-72" />
          </div>
        </Container>
      </section>

      {/* ¿Te suena? */}
      <section className="on-hueso py-16 md:py-24" aria-labelledby="te-suena">
        <Container>
          <h2 id="te-suena" className="text-3xl md:text-5xl">
            ¿Te suena?
          </h2>
          <p className="mt-3 max-w-2xl text-carbon/80">
            Elige la frase que más se parezca a tu día a día.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {giros.map((g) => (
              <li key={g.slug}>
                <Link href={`/soluciones/${g.slug}`} className={tarjeta}>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-carbon/70 group-hover:text-hueso/70">
                      {g.nombre}
                    </p>
                    <p className="mt-3 font-titulo text-2xl font-bold leading-tight">
                      {g.identificador}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                    Ver la solución
                    <ArrowRight aria-hidden="true" className="size-5" />
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/diagnostico"
                className="group flex h-full flex-col justify-between rounded-bear border-2 border-carbon bg-naranja p-6 text-carbon transition-colors hover:bg-carbon hover:text-hueso"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest">
                    {IDENTIFICADOR_OTRO.nombre}
                  </p>
                  <p className="mt-3 font-titulo text-2xl font-bold leading-tight">
                    {IDENTIFICADOR_OTRO.frase}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                  Haz tu diagnóstico
                  <ArrowRight aria-hidden="true" className="size-5" />
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* El Sistema Oso */}
      <section className="bg-grafito py-16 text-hueso md:py-24" aria-labelledby="sistema">
        <Container>
          <h2 id="sistema" className="text-3xl md:text-5xl">
            El Sistema Oso, en 3 capas
          </h2>
          <p className="mt-3 max-w-2xl text-hueso/85">
            No vendemos un chatbot. Construimos un sistema completo, a la medida
            de tu negocio, donde cada parte alimenta a la siguiente.
          </p>
          <div className="mt-10">
            <SistemaOsoDiagram />
          </div>
          <div className="mt-10">
            <Button href="/como-funciona" variante="secundario-oscuro">
              Ver cómo funciona
            </Button>
          </div>
        </Container>
      </section>

      {/* Por qué no es un chatbot más */}
      <section className="on-hueso py-16 md:py-24" aria-labelledby="por-que">
        <Container>
          <h2 id="por-que" className="max-w-3xl text-3xl md:text-5xl">
            Por qué no es «un chatbot más»
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {comparativa.map((c, i) => {
              const esNosotros = i === comparativa.length - 1;
              return (
                <div
                  key={c.quien}
                  className={`rounded-bear p-6 ${
                    esNosotros
                      ? "bg-carbon text-hueso"
                      : "border-2 border-carbon"
                  }`}
                >
                  <h3
                    className={`text-xl ${esNosotros ? "text-naranja" : ""}`}
                  >
                    {c.quien}
                  </h3>
                  <p
                    className={`mt-3 ${esNosotros ? "text-hueso/90" : "text-carbon/80"}`}
                  >
                    {c.texto}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Dato */}
      <section className="bg-carbon py-16 text-hueso md:py-24" aria-label="Un dato">
        <Container>
          <p className="font-titulo text-6xl font-extrabold text-naranja md:text-8xl">
            {DATO.cifra}
          </p>
          <p className="mt-4 max-w-2xl font-titulo text-2xl font-bold md:text-4xl">
            {DATO.texto}
          </p>
          <p className="mt-6 text-sm text-hueso/70">{DATO.fuente}</p>
        </Container>
      </section>

      {/* Cómo empezamos */}
      <section className="on-hueso py-16 md:py-24" aria-labelledby="empezamos">
        <Container>
          <h2 id="empezamos" className="text-3xl md:text-5xl">
            Cómo empezamos
          </h2>
          <div className="mt-10">
            <Pasos />
          </div>
        </Container>
      </section>

      {/* Preguntas frecuentes */}
      <section className="on-hueso pb-16 md:pb-24" aria-labelledby="faq">
        <Container>
          <h2 id="faq" className="text-3xl md:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqList preguntas={faqInicio} />
          </div>
        </Container>
      </section>

      <CierreCTA />
    </>
  );
}
