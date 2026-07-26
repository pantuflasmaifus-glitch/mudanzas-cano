'use client';

import { useState } from 'react';
import { SiteConfig, whatsappUrl } from '@/utils/SiteConfig';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proceso', label: 'Cómo funciona' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#preguntas', label: 'Preguntas' },
];

export const MudanzaHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center" aria-label={SiteConfig.name}>
          <img src="/Logo.png" alt={SiteConfig.name} className="h-10 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-sky-600">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:+${SiteConfig.phoneRaw}`} className="text-sm font-semibold text-sky-700 hover:text-sky-900">
            {SiteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:from-sky-600 hover:to-sky-700"
          >
            Cotizar gratis
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:from-sky-600 hover:to-sky-700 xs:inline-flex sm:px-5"
          >
            Cotizar
          </a>
          <a
            href={`tel:+${SiteConfig.phoneRaw}`}
            aria-label={`Llamar al ${SiteConfig.phoneDisplay}`}
            className="inline-flex size-10 items-center justify-center rounded-lg text-sky-700 hover:bg-sky-50"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen(value => !value)}
            className="inline-flex size-10 items-center justify-center rounded-lg text-sky-900 hover:bg-sky-50"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sky-100 bg-white px-4 py-4 lg:hidden" aria-label="Navegación móvil">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-3 text-center text-base font-semibold text-white shadow-soft"
          >
            Cotizar gratis por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};
