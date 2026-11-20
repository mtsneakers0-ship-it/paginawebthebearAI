import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Megaphone, MessagesSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/Button";
import { ChatDemo } from "@/components/ChatDemo";
import { CierreCTA } from "@/components/CierreCTA";
import { Container } from "@/components/Container";
import { FaqList } from "@/components/FaqList";
import { Placeholder } from "@/components/Placeholder";
import { NOTA_COFEPRIS, giros, obtenerGiro } from "@/content/giros";

type Props = { params: Promise<{ giro: string }> };

export function generateStaticParams() {
  return giros.map((g) => ({ giro: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { giro: slug } = await params;
  const giro = obtenerGiro(slug);
  if (!giro) return {};
  return {
    title: giro.nombre,
    description: `${giro.titular} ${giro.subtitulo}`,
    alternates: { canonical: `/soluciones/${giro.slug}` },
  };
}

export default async function PaginaGiro({ params }: Props) {
  const { giro: slug } = await params;
  const giro = obtenerGiro(slug);
  if (!giro) notFound();

  const capas = [
    { nombre: "Atraer", texto: giro.capas.atraer, Icono: Megaphone },
    { nombre: "Convertir", texto: giro.capas.convertir, Icono: MessagesSquare },
    { nombre: "Crecer", texto: giro.capas.crecer, Icono: TrendingUp },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-carbon text-hueso">
        <Container className="py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-naranja">
            {giro.nombre}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            {giro.titular}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-hueso/85">{giro.subtitulo}</p>
          <p className="mt-6 max-w-2xl border-l-0 font-titulo text-xl font-bold text-hueso">
            «{giro.identificador}»
          </p>
          <div className="mt-8">
            <Button href="/diagnostico">Calcula cuántos {giro.persona} pierdes</Button>
          </div>
        </Container>
      </section>

      {/* El problema */}
      <section className="on-hueso py-16 md:py-24" aria-labelledby="problema">
        <Container>
          <h2 id="problema" className="text-3xl md:text-5xl">
            El problema
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {giro.dolores.map((d) => (
              <li
                key={d}
                className="rounded-bear border-2 border-carbon p-6 font-titulo text-xl font-bold leading-snug"
              >
                {d}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* El sistema aplicado */}
      <section className="bg-grafito py-16 text-hueso md:py-24" aria-labelledby="sistema">
        <Container>
          <h2 id="sistema" className="text-3xl md:text-5xl">
            El Sistema Oso aplicado a {giro.nombre.toLowerCase()}
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {capas.map(({ nombre, texto, Icono }, i) => (
              <li key={nombre} className="rounded-bear bg-carbon p-6">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="font-titulo text-5xl font-extrabold text-naranja"
                  >
                    {i + 1}
                  </span>
                  <Icono aria-hidden="true" className="size-7" strokeWidth={1.75} />
                </div>
                <h3 className="mt-3 text-2xl">
                  <span className="sr-only">Capa {i + 1}: </span>
                  {nombre}
                </h3>
                <p className="mt-2 text-hueso/85">{texto}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Demo */}
      <section className="on-hueso py-16 md:py-24" aria-labelledby="demo">
        <Container>
          <h2 id="demo" className="text-3xl md:text-5xl">
            Míralo funcionando
          </h2>
          <div className="mt-10 grid items-start gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
            <Placeholder etiqueta="[VIDEO DEL GIRO]" className="mx-auto max-w-xs md:max-w-none" />
            <ChatDemo mensajes={giro.chat} etiqueta={giro.etiquetaAsistente} />
          </div>
        </Container>
      </section>

      {/* Lo que incluye */}
      <section className="on-hueso pb-16 md:pb-24" aria-labelledby="incluye">
        <Container>
          <h2 id="incluye" className="text-3xl md:text-5xl">
            Lo que incluye
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {giro.incluye.map((item) => (
              <li key={item} className="flex gap-3">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0"
                  strokeWidth={3}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {giro.cofepris && (
            <p className="mt-8 max-w-3xl rounded-bear bg-carbon p-5 text-hueso">
              {NOTA_COFEPRIS}
            </p>
          )}
        </Container>
      </section>

      {/* Preguntas frecuentes */}
      <section className="on-hueso pb-16 md:pb-24" aria-labelledby="faq">
        <Container>
          <h2 id="faq" className="text-3xl md:text-5xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 max-w-3xl">
            <FaqList preguntas={giro.faq} />
          </div>
        </Container>
      </section>

      <CierreCTA
        titulo={`Que tus ${giro.persona} lleguen, y que regresen.`}
        boton="Haz tu diagnóstico gratis"
      />
    </>
  );
}
