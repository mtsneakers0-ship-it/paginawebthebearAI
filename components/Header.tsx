"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { giros } from "@/content/giros";
import { Logo } from "./Logo";
import { Button } from "./Button";

const enlace =
  "inline-flex min-h-11 items-center rounded-bear px-3 text-hueso hover:text-naranja";

export function Header() {
  const pathname = usePathname();
  // Cada menú guarda la ruta donde se abrió: al cambiar de página se considera cerrado.
  const [rutaMovil, setRutaMovil] = useState<string | null>(null);
  const [rutaSoluciones, setRutaSoluciones] = useState<string | null>(null);
  const movilAbierto = rutaMovil === pathname;
  const solucionesAbierto = rutaSoluciones === pathname;
  const setMovilAbierto = (abrir: boolean | ((v: boolean) => boolean)) => {
    const valor = typeof abrir === "function" ? abrir(movilAbierto) : abrir;
    setRutaMovil(valor ? pathname : null);
  };
  const setSolucionesAbierto = (abrir: boolean | ((v: boolean) => boolean)) => {
    const valor = typeof abrir === "function" ? abrir(solucionesAbierto) : abrir;
    setRutaSoluciones(valor ? pathname : null);
  };
  const contenedorSoluciones = useRef<HTMLDivElement>(null);

  // Escape y clic fuera cierran el menú de soluciones.
  useEffect(() => {
    if (!solucionesAbierto && !movilAbierto) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setRutaSoluciones(null);
        setRutaMovil(null);
      }
    };
    const alHacerClic = (e: MouseEvent) => {
      if (!contenedorSoluciones.current?.contains(e.target as Node)) {
        setRutaSoluciones(null);
      }
    };
    document.addEventListener("keydown", alTeclear);
    document.addEventListener("mousedown", alHacerClic);
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.removeEventListener("mousedown", alHacerClic);
    };
  }, [solucionesAbierto, movilAbierto]);

  return (
    <header className="sticky top-0 z-40 border-b border-hueso/10 bg-carbon">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="The Bear AI, inicio" className="rounded-bear">
          <Logo fondo="oscuro" tamano={36} />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          <Link href="/como-funciona" className={enlace}>
            Cómo funciona
          </Link>

          <div className="relative" ref={contenedorSoluciones}>
            <button
              type="button"
              className={`${enlace} gap-1`}
              aria-expanded={solucionesAbierto}
              aria-controls="menu-soluciones"
              onClick={() => setSolucionesAbierto((v) => !v)}
            >
              Soluciones
              <ChevronDown
                aria-hidden="true"
                className={`size-4 transition-transform ${solucionesAbierto ? "rotate-180" : ""}`}
              />
            </button>
            {solucionesAbierto && (
              <ul
                id="menu-soluciones"
                className="absolute left-0 top-full mt-2 w-64 rounded-bear border border-hueso/15 bg-grafito p-2 shadow-lg"
              >
                {giros.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/soluciones/${g.slug}`}
                      className="flex min-h-11 items-center rounded-lg px-3 text-hueso hover:bg-carbon hover:text-naranja"
                    >
                      {g.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button href="/diagnostico" className="ml-2 !py-2">
            Diagnóstico gratis
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-bear text-hueso md:hidden"
          aria-expanded={movilAbierto}
          aria-controls="menu-movil"
          aria-label={movilAbierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMovilAbierto((v) => !v)}
        >
          {movilAbierto ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      {movilAbierto && (
        <nav
          id="menu-movil"
          aria-label="Principal"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-hueso/10 bg-carbon px-5 pb-6 pt-3 md:hidden"
        >
          <Link href="/como-funciona" className={`${enlace} w-full`}>
            Cómo funciona
          </Link>
          <p className="px-3 pb-1 pt-3 text-sm font-semibold uppercase tracking-widest text-hueso/70">
            Soluciones
          </p>
          <ul>
            {giros.map((g) => (
              <li key={g.slug}>
                <Link href={`/soluciones/${g.slug}`} className={`${enlace} w-full`}>
                  {g.nombre}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/diagnostico" className="mt-4 w-full">
            Diagnóstico gratis
          </Button>
        </nav>
      )}
    </header>
  );
}
