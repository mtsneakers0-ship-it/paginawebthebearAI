import { pasos } from "@/content/home";

export function Pasos() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {pasos.map((p, i) => (
        <li key={p.titulo} className="border-t-2 border-carbon pt-4">
          <span className="font-titulo text-4xl font-extrabold">{i + 1}</span>
          <h3 className="mt-2 text-xl">{p.titulo}</h3>
          <p className="mt-2 text-carbon/80">{p.texto}</p>
        </li>
      ))}
    </ol>
  );
}
