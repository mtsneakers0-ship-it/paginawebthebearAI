# The Bear AI · sitio web

Sitio de la agencia The Bear AI (Guadalajara). Next.js (App Router), TypeScript y Tailwind CSS. Sin base de datos ni backend.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # pruebas (calculadora, WhatsApp, formulario)
npm run build    # compilación de producción
```

## Datos de contacto

Copia `.env.example` a `.env.local` y llena los datos. Se leen en `lib/config.ts`. Mientras falte alguno, el sitio muestra un marcador visible como `[WHATSAPP]`.

| Variable | Qué es |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dirección final del sitio (para Open Graph) |
| `NEXT_PUBLIC_WHATSAPP` | Número con código de país, sin signos (`523312345678`) |
| `NEXT_PUBLIC_CAL_URL` | Link de la llamada de 15 minutos en Cal.com |
| `NEXT_PUBLIC_INSTAGRAM` | Usuario, sin `@` |
| `NEXT_PUBLIC_CORREO` | Correo de contacto |
| `NEXT_PUBLIC_WEBHOOK_URL` | Opcional. Si se llena, el formulario también envía los datos ahí |

## Dónde está cada cosa

- `content/giros.ts`: los 6 giros. Para agregar uno, añade un objeto a la lista y aparece su página, el menú y la tarjeta del inicio.
- `content/home.ts`: textos del inicio (titular, capas, dato, pasos, preguntas).
- `content/casos.ts`: casos reales. Vacío hasta que haya casos autorizados; mientras tanto `/casos` no se indexa.
- `lib/calculadora.ts`, `lib/whatsapp.ts`, `lib/validacion.ts`, `lib/webhook.ts`: la lógica del diagnóstico, con pruebas en `tests/`.

## Marcadores pendientes

Todo dato que falta aparece entre corchetes y con fondo naranja claro. Búscalos con `grep -rn "\[[A-Z]" content app components lib`.
