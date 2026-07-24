# Mudanzas Cano

Sitio web de **Mudanzas Cano** — servicios de mudanza locales y foráneas en todo México.
Landing profesional, responsiva y optimizada para SEO.

Construido con **Next.js 16**, **React**, **TypeScript** y **Tailwind CSS v4**.

## Desarrollo local

```bash
npm install
cp .env.example .env   # ya viene con valores de desarrollo
npx next dev -p 3002   # abre http://localhost:3002
```

> Nota: el sitio público no usa base de datos. No es necesario levantar Postgres/PGLite para desarrollar el landing.

## Variables de entorno

Copia `.env.example` a `.env` para desarrollo. En **Vercel**, configura estas mismas variables
en *Project → Settings → Environment Variables*:

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clave pública de Clerk (valor de prueba incluido) |
| `CLERK_SECRET_KEY` | Clave secreta de Clerk (valor de prueba incluido) |
| `DATABASE_URL` | Relleno para validación (el landing no consulta la BD) |
| `NEXT_PUBLIC_APP_URL` | URL final del sitio (ej. `https://mudanzascano.com.mx`) |
| `NEXT_PUBLIC_SENTRY_DISABLED` | `true` |
| `NEXT_TELEMETRY_DISABLED` | `1` |

## Scripts útiles

- `npm run build` — build de producción
- `npm run start` — servidor de producción
- `npm run check:types` — verificación de tipos

## Personalización rápida

- **Teléfono, email, ciudades y marca:** `src/utils/SiteConfig.ts`
- **Textos y secciones del landing:** `src/app/[locale]/(marketing)/_components/MudanzaLanding.tsx`
- **Fotos de la galería "Nosotros":** `src/app/[locale]/(marketing)/_components/AboutSlider.tsx`
- **Colores del tema:** `src/styles/global.css`
- **SEO / metadata:** `src/app/[locale]/layout.tsx`
