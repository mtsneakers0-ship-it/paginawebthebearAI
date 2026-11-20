import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NoEncontrada() {
  return (
    <section className="bg-carbon text-hueso">
      <Container className="py-24 md:py-32">
        <p className="font-titulo text-6xl font-extrabold text-naranja md:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl">Esta página no existe.</h1>
        <p className="mt-4 max-w-xl text-hueso/85">
          Puede que el enlace esté mal escrito o que ya no exista.
        </p>
        <div className="mt-8">
          <Button href="/">Volver al inicio</Button>
        </div>
      </Container>
    </section>
  );
}
