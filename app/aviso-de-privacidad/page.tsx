import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ConMarcadores } from "@/components/Marcadores";
import { CONTACTO } from "@/lib/config";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Cómo The Bear AI trata los datos personales que nos compartes.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

const secciones: { titulo: string; parrafos: string[] }[] = [
  {
    titulo: "Quién es el responsable",
    parrafos: [
      "[RAZÓN SOCIAL], con domicilio en [DOMICILIO], en Guadalajara, Jalisco, es responsable del tratamiento de tus datos personales, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
    ],
  },
  {
    titulo: "Qué datos recabamos",
    parrafos: [
      "Cuando pides tu diagnóstico gratis te pedimos: tu nombre, el nombre de tu negocio, el giro al que se dedica y tu número de WhatsApp. Si usas la calculadora, también guardamos los números que escribiste y el resultado, solo para continuar la plática contigo.",
      "No pedimos datos personales sensibles, financieros ni patrimoniales.",
    ],
  },
  {
    titulo: "Para qué los usamos",
    parrafos: [
      "Para contactarte por WhatsApp, darte tu diagnóstico, agendar una llamada y enviarte una propuesta. Solo usamos tus datos para eso.",
    ],
  },
  {
    titulo: "Con quién los compartimos",
    parrafos: [
      "No vendemos ni compartimos tus datos con terceros para fines publicitarios. Pueden tratarlos proveedores que nos prestan servicios necesarios para atenderte, como el servicio de agenda y el de mensajería: [PROVEEDORES].",
    ],
  },
  {
    titulo: "Tus derechos",
    parrafos: [
      `Puedes acceder, rectificar o cancelar tus datos, u oponerte a su uso (derechos ARCO). También puedes revocar tu consentimiento en cualquier momento. Para hacerlo, escríbenos a ${CONTACTO.correo} y te respondemos en un plazo máximo de 20 días hábiles.`,
    ],
  },
  {
    titulo: "Cookies y medición",
    parrafos: [
      "[COOKIES O MEDICIÓN: describir si se usan, y cuáles, antes de publicar].",
    ],
  },
  {
    titulo: "Cambios a este aviso",
    parrafos: [
      "Si cambiamos este aviso, publicaremos la nueva versión en esta misma página. Última actualización: [FECHA DE ACTUALIZACIÓN].",
    ],
  },
];

export default function AvisoDePrivacidad() {
  return (
    <>
      <section className="bg-carbon text-hueso">
        <Container className="py-16 md:py-20">
          <h1 className="max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Aviso de privacidad
          </h1>
        </Container>
      </section>

      <section className="on-hueso py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="rounded-bear border-2 border-dashed border-gris-calido p-4">
              <ConMarcadores texto="[REVISIÓN LEGAL PENDIENTE]" /> Este es un
              texto base. Debe revisarlo un abogado y llenarse con los datos
              reales antes de publicar el sitio.
            </p>
            {secciones.map((s) => (
              <section key={s.titulo} className="mt-10">
                <h2 className="text-2xl md:text-3xl">{s.titulo}</h2>
                {s.parrafos.map((p) => (
                  <p key={p} className="mt-3 text-carbon/85">
                    <ConMarcadores texto={p} />
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
