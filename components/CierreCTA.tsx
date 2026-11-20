import { Container } from "./Container";
import { Button } from "./Button";

export function CierreCTA({
  titulo = "Tu negocio puede crecer aunque estés cerrado.",
  boton = "Calcula cuántos clientes pierdes",
}: {
  titulo?: string;
  boton?: string;
}) {
  return (
    <section className="bg-carbon py-20 text-hueso md:py-28">
      <Container>
        <h2 className="max-w-3xl text-4xl md:text-6xl">{titulo}</h2>
        <div className="mt-8">
          <Button href="/diagnostico">{boton}</Button>
        </div>
      </Container>
    </section>
  );
}
