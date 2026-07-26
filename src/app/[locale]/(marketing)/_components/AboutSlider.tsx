'use client';

import { useRef } from 'react';

const GALLERY = [
  { src: '/1.jpg', alt: 'Camión de Mudanzas Cano con la rampa lista para cargar frente a una casa' },
  { src: '/2.jpg', alt: 'Camioneta de Mudanzas Cano con cajas empacadas y etiquetadas listas para el traslado' },
  { src: '/9.jpg', alt: 'Personal amable y capacitado de Mudanzas Cano listo para tu mudanza' },
  { src: '/8.jpg', alt: 'Equipo de Mudanzas Cano protegiendo muebles con cobertores y cargando cajas' },
  { src: '/4.jpg', alt: 'Bodega y guardamuebles de Mudanzas Cano con montacargas y personal' },
  { src: '/6.jpg', alt: 'Unidad de carga de Mudanzas Cano equipada para mudanzas foráneas' },
  { src: '/3.jpg', alt: 'Cobertores y cinta de embalaje profesional de Mudanzas Cano para proteger tus muebles' },
  { src: '/7.jpg', alt: 'Camión de gran capacidad de Mudanzas Cano para mudanzas de gran volumen' },
];

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
              src={image.src}
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
