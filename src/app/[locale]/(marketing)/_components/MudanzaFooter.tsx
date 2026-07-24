import { SiteConfig, whatsappUrl } from '@/utils/SiteConfig';

const SERVICES = ['Mudanzas locales', 'Mudanzas foráneas', 'Empacado profesional', 'Fletes y carga', 'Guardamuebles', 'Mudanzas de oficina'];

export const MudanzaFooter = () => (
  <footer className="bg-sky-950 text-sky-100">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 17h4V5H2v12h3" />
                <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
              </svg>
            </span>
            <span className="font-display text-lg font-extrabold text-white">Mudanzas Cano</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sky-200/80">
            Mudanzas seguras, puntuales y sin estrés en todo México. Personal capacitado, unidades equipadas y tu mudanza siempre asegurada.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Servicios</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sky-200/80">
            {SERVICES.map(service => (
              <li key={service}>
                <a href="#servicios" className="transition hover:text-white">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Cobertura</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sky-200/80">
            {SiteConfig.cities.slice(0, 6).map(city => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-sky-200/80">
            <li>
              <a href={`tel:+${SiteConfig.phoneRaw}`} className="transition hover:text-white">
                📞 {SiteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SiteConfig.email}`} className="transition hover:text-white">
                ✉️ {SiteConfig.email}
              </a>
            </li>
            <li className="text-sky-200/70">🕗 Lun a Sáb · 8:00 a 19:00 h</li>
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-5 py-2.5 text-sm font-semibold text-sky-950 transition hover:from-sky-300 hover:to-sky-400"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sky-800/60 pt-6 text-xs text-sky-300/70 sm:flex-row">
        <p>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Mudanzas Cano. Todos los derechos reservados.
        </p>
        <p>Mudanzas seguras en todo México 🇲🇽</p>
      </div>
    </div>
  </footer>
);
