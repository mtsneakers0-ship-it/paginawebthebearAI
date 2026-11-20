import Link from "next/link";
import { giros } from "@/content/giros";
import { CONTACTO, SITE, esMarcador, urlInstagram } from "@/lib/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Marcador } from "./Marcadores";

const enlace = "inline-flex min-h-11 items-center hover:text-naranja";
const titulo =
  "font-titulo text-sm font-bold uppercase tracking-widest text-hueso/70";

/** El año se calcula una vez y se guarda en caché, para no bloquear la compilación estática. */
async function Anio() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  const instagram = urlInstagram();
  return (
    <footer className="bg-carbon text-hueso">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo fondo="oscuro" />
          <p className="mt-4 max-w-xs text-hueso/80">
            {SITE.nombre} · {SITE.lema.replace(/\.$/, "")}
          </p>
          <p className="mt-2 max-w-xs text-sm text-hueso/70">
            Guadalajara, Jalisco.
          </p>
        </div>

        <nav aria-label="Soluciones">
          <h2 className={titulo}>Soluciones</h2>
          <ul className="mt-2">
            {giros.map((g) => (
              <li key={g.slug}>
                <Link href={`/soluciones/${g.slug}`} className={enlace}>
                  {g.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Sitio">
          <h2 className={titulo}>Sitio</h2>
          <ul className="mt-2">
            <li>
              <Link href="/como-funciona" className={enlace}>
                Cómo funciona
              </Link>
            </li>
            <li>
              <Link href="/diagnostico" className={enlace}>
                Diagnóstico gratis
              </Link>
            </li>
            <li>
              <Link href="/aviso-de-privacidad" className={enlace}>
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className={titulo}>Contacto</h2>
          <ul className="mt-2">
            <li className="flex flex-wrap items-center gap-x-2">
              <a
                href={buildWhatsAppUrl(
                  CONTACTO.whatsapp,
                  "Hola, quiero información de The Bear AI",
                )}
                className={enlace}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              {esMarcador(CONTACTO.whatsapp) && (
                <Marcador>{CONTACTO.whatsapp}</Marcador>
              )}
            </li>
            <li className="flex flex-wrap items-center gap-x-2">
              {instagram ? (
                <a
                  href={instagram}
                  className={enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              ) : (
                <>
                  <span className="inline-flex min-h-11 items-center">
                    Instagram
                  </span>
                  <Marcador>{CONTACTO.instagram}</Marcador>
                </>
              )}
            </li>
            <li className="flex flex-wrap items-center gap-x-2">
              {esMarcador(CONTACTO.correo) ? (
                <>
                  <span className="inline-flex min-h-11 items-center">
                    Correo
                  </span>
                  <Marcador>{CONTACTO.correo}</Marcador>
                </>
              ) : (
                <a href={`mailto:${CONTACTO.correo}`} className={enlace}>
                  {CONTACTO.correo}
                </a>
              )}
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-gris-calido/40">
        <Container className="py-5 text-sm text-hueso/70">
          © <Anio /> The Bear AI. Todos los derechos reservados.
        </Container>
      </div>
    </footer>
  );
}
