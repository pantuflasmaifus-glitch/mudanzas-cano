'use client';

import { useState } from 'react';
import { whatsappUrl } from '@/utils/SiteConfig';

const SERVICE_OPTIONS = ['Mudanza local', 'Mudanza foránea', 'Empacado profesional', 'Flete / carga', 'Guardamuebles', 'Mudanza de oficina'];

export const QuoteForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', origin: '', destination: '', service: SERVICE_OPTIONS[0], date: '' });

  const handleChange = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = [
      'Hola Mudanzas Cano, quiero cotizar mi mudanza:',
      `• Nombre: ${form.name || '(sin nombre)'}`,
      `• Teléfono: ${form.phone || '(sin teléfono)'}`,
      `• Servicio: ${form.service}`,
      `• Origen: ${form.origin || '(por definir)'}`,
      `• Destino: ${form.destination || '(por definir)'}`,
      `• Fecha estimada: ${form.date || '(por definir)'}`,
    ].join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  const inputClass = 'w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-xs font-semibold text-sky-900">Nombre</label>
          <input id="q-name" type="text" value={form.name} onChange={handleChange('name')} placeholder="Tu nombre" className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-phone" className="mb-1.5 block text-xs font-semibold text-sky-900">Teléfono</label>
          <input id="q-phone" type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="55 1234 5678" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="q-service" className="mb-1.5 block text-xs font-semibold text-sky-900">Tipo de servicio</label>
        <select id="q-service" value={form.service} onChange={handleChange('service')} className={inputClass}>
          {SERVICE_OPTIONS.map(option => <option key={option}>{option}</option>)}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-origin" className="mb-1.5 block text-xs font-semibold text-sky-900">Origen</label>
          <input id="q-origin" type="text" value={form.origin} onChange={handleChange('origin')} placeholder="Colonia o ciudad" className={inputClass} />
        </div>
        <div>
          <label htmlFor="q-destination" className="mb-1.5 block text-xs font-semibold text-sky-900">Destino</label>
          <input id="q-destination" type="text" value={form.destination} onChange={handleChange('destination')} placeholder="Colonia o ciudad" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="q-date" className="mb-1.5 block text-xs font-semibold text-sky-900">Fecha estimada</label>
        <input id="q-date" type="date" value={form.date} onChange={handleChange('date')} className={inputClass} />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:from-sky-600 hover:to-sky-700"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.57-.35M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20" />
        </svg>
        Cotizar por WhatsApp
      </button>
      <p className="text-center text-xs text-slate-500">Respuesta en menos de 10 minutos en horario laboral. Sin compromiso.</p>
    </form>
  );
};
