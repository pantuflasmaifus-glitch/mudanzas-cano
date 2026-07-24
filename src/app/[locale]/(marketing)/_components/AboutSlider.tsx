'use client';

import { useRef } from 'react';

const GALLERY = [
  { src: 'photo-1600518464441-9154a4dea21b', alt: 'Equipo de Mudanzas Cano cargando cajas en el camión' },
  { src: 'photo-1530124566582-a618bc2615dc', alt: 'Cajas empacadas y etiquetadas listas para la mudanza' },
  { src: 'photo-1521737604893-d14cc237f11d', alt: 'Personal profesional y capacitado de mudanzas' },
  { src: 'photo-1558618666-fcd25c85cd64', alt: 'Unidad de transporte equipada para mudanzas foráneas' },
  { src: 'photo-1595246140625-573b715d11dc', alt: 'Muebles protegidos con material de embalaje' },
  { src: 'photo-1600585152220-90363fe7e115', alt: 'Familia feliz llegando a su nuevo hogar' },
  { src: 'photo-1581578731548-c64695cc6952', alt: 'Acomodo cuidadoso de pertenencias en el nuevo domicilio' },
  { src: 'photo-1600880292203-757bb62b4baf', alt: 'Asesoría personalizada para planear tu mudanza' },
];

const imageUrl = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&q=70`;

export const AboutSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    track.scrollBy({ left: direction * (track.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col gap-4 overflow-x-auto scroll-smooth pb-4 sm:auto-cols-[42%] lg:auto-cols-[30%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {GALLERY.map(image => (
          <figure key={image.src} className="group snap-start overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-card">
            <img
              src={imageUrl(image.src)}
              alt={image.alt}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
            />
          </figure>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Ver imágenes anteriores"
          className="flex size-11 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow-sm transition hover:bg-sky-50"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Ver más imágenes"
          className="flex size-11 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-700 shadow-sm transition hover:bg-sky-50"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
