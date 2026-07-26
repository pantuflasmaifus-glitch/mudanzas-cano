import { SiteConfig, whatsappUrl } from '@/utils/SiteConfig';
import { AboutSlider } from './AboutSlider';
import { QuoteForm } from './QuoteForm';

const ABOUT_POINTS = [
  { icon: '👨‍👩‍👧', title: 'Empresa 100% mexicana', text: 'Más de una década ayudando a familias y empresas a mudarse con tranquilidad.' },
  { icon: '🤝', title: 'Trato honesto y cercano', text: 'Te acompañamos en cada paso, con comunicación clara y precio cerrado.' },
  { icon: '⭐', title: 'Reputación comprobada', text: 'Miles de clientes satisfechos y una calificación promedio de 4.9 estrellas.' },
];

const STATS = [
  { value: '+12 años', label: 'de experiencia' },
  { value: '+15,000', label: 'mudanzas realizadas' },
  { value: '4.9 ★', label: 'calificación promedio' },
  { value: '100%', label: 'mudanzas aseguradas' },
];

const TRUST = [
  { icon: '🛡️', title: 'Mudanza asegurada', text: 'Cobertura total contra daños en cada traslado.' },
  { icon: '⏱️', title: 'Puntualidad garantizada', text: 'Llegamos a tiempo o te compensamos.' },
  { icon: '💲', title: 'Precio cerrado', text: 'Cotización sin sorpresas ni cargos ocultos.' },
  { icon: '👷', title: 'Personal capacitado', text: 'Equipo uniformado y con experiencia comprobada.' },
];

const SERVICES = [
  {
    icon: '🏠',
    title: 'Mudanzas locales',
    text: 'Mudanzas dentro de tu ciudad, rápidas y seguras, con embalaje incluido para tus muebles.',
  },
  {
    icon: '🚚',
    title: 'Mudanzas foráneas',
    text: 'Traslados entre ciudades y estados de la República con seguimiento en todo momento.',
  },
  {
    icon: '📦',
    title: 'Empacado profesional',
    text: 'Materiales de alta resistencia y técnicas de embalaje para proteger lo más frágil.',
  },
  {
    icon: '🏢',
    title: 'Mudanzas de oficina',
    text: 'Reubicamos tu empresa con mínima interrupción, fuera de horario si lo necesitas.',
  },
  {
    icon: '🛋️',
    title: 'Fletes y carga',
    text: 'Transporte de muebles, electrodomésticos y carga pesada con maniobras seguras.',
  },
  {
    icon: '🔐',
    title: 'Guardamuebles',
    text: 'Espacios limpios y vigilados para resguardar tus pertenencias el tiempo que necesites.',
  },
];

const STEPS = [
  { num: '01', title: 'Cotiza gratis', text: 'Cuéntanos qué necesitas mover por WhatsApp o con el formulario. Recibes tu precio cerrado.' },
  { num: '02', title: 'Agenda tu fecha', text: 'Elige el día y la hora. Confirmamos tu mudanza y preparamos el equipo y la unidad ideal.' },
  { num: '03', title: 'Empacamos y cargamos', text: 'Llegamos puntuales, protegemos tus muebles y cargamos con cuidado profesional.' },
  { num: '04', title: 'Entregamos seguro', text: 'Trasladamos y acomodamos todo en tu nuevo hogar u oficina. Tú solo disfrutas el cambio.' },
];

const BENEFITS = [
  'Camiones equipados con rampa y sujeción profesional',
  'Cobijas, plástico burbuja y cajas reforzadas incluidas',
  'Desarmado y armado de muebles sin costo extra',
  'Atención por WhatsApp antes, durante y después',
  'Cobertura en CDMX, zona metropolitana y toda la República',
  'Facturación disponible para empresas',
];

const TESTIMONIALS = [
  { name: 'María Fernanda G.', city: 'CDMX', text: 'Llegaron puntualísimos y cuidaron cada mueble como si fuera suyo. La mejor mudanza que he tenido.', stars: 5 },
  { name: 'Roberto Méndez', city: 'Guadalajara', text: 'Mudanza foránea de Guadalajara a Monterrey sin un solo rayón. Precio cerrado, justo lo que cotizaron.', stars: 5 },
  { name: 'Alejandra Ruiz', city: 'Querétaro', text: 'Empacaron toda mi cocina y cristalería, nada se rompió. Personal amable y muy profesional.', stars: 5 },
];

const FAQS = [
  { q: '¿Cuánto cuesta una mudanza?', a: 'El precio depende del volumen, la distancia y los servicios extra como empacado o guardamuebles. Te damos una cotización gratuita y con precio cerrado, sin cargos ocultos.' },
  { q: '¿Las mudanzas están aseguradas?', a: 'Sí. Todas nuestras mudanzas incluyen cobertura contra daños durante el traslado para que viajes con total tranquilidad.' },
  { q: '¿Atienden mudanzas foráneas en toda la República?', a: 'Sí, realizamos mudanzas locales y foráneas a cualquier estado de México con seguimiento de tu envío en todo momento.' },
  { q: '¿Ofrecen servicio de empacado?', a: 'Por supuesto. Podemos empacar todo por ti con materiales profesionales, o solo lo más frágil. Tú decides el nivel de servicio.' },
  { q: '¿Con cuánta anticipación debo agendar?', a: 'Recomendamos reservar con 3 a 5 días de anticipación, aunque también atendemos mudanzas urgentes según disponibilidad.' },
  { q: '¿Emiten factura?', a: 'Sí, contamos con facturación para particulares y empresas. Solo indícanoslo al momento de agendar.' },
];

export const MudanzaLanding = () => (
  <>
    {/* HERO */}
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 size-96 rounded-full bg-sky-200/40 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-sky-700 shadow-sm">
            <span className="size-2 rounded-full bg-green-500" />
            Cotización gratis en minutos
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-sky-950 text-balance sm:text-5xl lg:text-6xl">
            Tu mudanza segura y
            {' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">sin estrés</span>
            {' '}
            en todo México
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Mudanzas locales y foráneas, empacado profesional y guardamuebles. Cuidamos tus cosas como si fueran nuestras, con precio cerrado y mudanza asegurada.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:from-sky-600 hover:to-sky-700"
            >
              Cotizar gratis ahora
            </a>
            <a
              href={`tel:+${SiteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300 bg-white px-7 py-4 text-base font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              📞
              {' '}
              {SiteConfig.phoneDisplay}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(stat => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-extrabold text-sky-700">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-sky-300/30 to-sky-100/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-2 shadow-card">
            <img
              src="/1.jpg"
              alt="Camión de Mudanzas Cano con la rampa lista para cargar frente a una casa"
              className="h-80 w-full rounded-2xl object-cover sm:h-96 lg:h-[28rem]"
              loading="eager"
            />
          </div>
          <div className="animate-float-slow absolute -bottom-5 -left-5 hidden rounded-2xl border border-sky-100 bg-white px-5 py-4 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-green-100 text-xl">🛡️</span>
              <div>
                <div className="text-sm font-bold text-sky-950">Mudanza asegurada</div>
                <div className="text-xs text-slate-500">Cobertura total incluida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TRUST BAR */}
    <section className="border-y border-sky-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {TRUST.map(item => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-2xl">{item.icon}</span>
            <div>
              <div className="font-display font-bold text-sky-950">{item.title}</div>
              <div className="text-sm text-slate-500">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* SERVICES */}
    <section id="servicios" className="bg-gradient-to-b from-white to-sky-50/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wider text-sky-600">Nuestros servicios</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-sky-950 sm:text-4xl">Todo tipo de mudanzas, una sola empresa</h2>
          <p className="mt-4 text-slate-600">Desde un departamento hasta una oficina completa. Elige el servicio que necesitas y nosotros nos encargamos del resto.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(service => (
            <div key={service.title} className="group rounded-2xl border border-sky-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-card">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 text-3xl transition group-hover:scale-110">{service.icon}</span>
              <h3 className="mt-5 font-display text-xl font-bold text-sky-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* NOSOTROS */}
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="font-semibold uppercase tracking-wider text-sky-600">Nosotros</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-sky-950 sm:text-4xl">Una empresa mexicana en la que puedes confiar</h2>
            <p className="mt-4 text-slate-600">
              En Mudanzas Cano llevamos más de 12 años haciendo que mudarse sea fácil y seguro. Somos un equipo de profesionales que trata cada mudanza como si fuera la propia: con cuidado, puntualidad y honestidad.
            </p>
            <p className="mt-3 text-slate-600">
              Desde un pequeño departamento hasta el traslado completo de una oficina, contamos con el equipo, las unidades y la experiencia para cuidar lo que más te importa.
            </p>
            <ul className="mt-8 space-y-5">
              {ABOUT_POINTS.map(point => (
                <li key={point.title} className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-2xl">{point.icon}</span>
                  <div>
                    <div className="font-display font-bold text-sky-950">{point.title}</div>
                    <div className="text-sm text-slate-600">{point.text}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:from-sky-600 hover:to-sky-700"
            >
              Conoce cómo trabajamos
            </a>
          </div>

          <div>
            <AboutSlider />
            <p className="mt-2 text-center text-sm text-slate-400">Desliza para ver nuestro equipo y trabajo en acción</p>
          </div>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section id="proceso" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wider text-sky-600">Cómo funciona</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-sky-950 sm:text-4xl">Tu mudanza en 4 simples pasos</h2>
          <p className="mt-4 text-slate-600">Hacemos que mudarte sea fácil. Tú nos dices qué necesitas y nosotros nos encargamos de todo.</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(step => (
            <div key={step.num} className="relative rounded-2xl border border-sky-100 bg-white p-7 shadow-sm">
              <span className="font-display text-5xl font-extrabold text-sky-100">{step.num}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-sky-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY US + QUOTE FORM */}
    <section className="bg-gradient-to-br from-sky-600 to-sky-800 py-16 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="font-semibold uppercase tracking-wider text-sky-200">¿Por qué Mudanzas Cano?</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">La tranquilidad de mudarte con expertos</h2>
          <p className="mt-4 text-sky-100/90">Más de 15,000 familias y empresas ya confiaron en nosotros. Estos son los beneficios que recibes:</p>
          <ul className="mt-8 space-y-4">
            {BENEFITS.map(benefit => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm">✓</span>
                <span className="text-sky-50">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-7 shadow-card sm:p-9">
          <h3 className="font-display text-2xl font-extrabold text-sky-950">Cotiza tu mudanza gratis</h3>
          <p className="mt-1 text-sm text-slate-500">Recibe tu precio cerrado por WhatsApp en minutos.</p>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>

    {/* COVERAGE */}
    <section id="cobertura" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wider text-sky-600">Cobertura</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-sky-950 sm:text-4xl">Llegamos a donde tú vas</h2>
          <p className="mt-4 text-slate-600">Operamos en las principales ciudades del país y realizamos mudanzas foráneas a toda la República Mexicana.</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SiteConfig.cities.map(city => (
            <span key={city} className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-5 py-2.5 text-sm font-medium text-sky-800">
              📍
              {city}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white">
            ...y toda la República 🇲🇽
          </span>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section id="opiniones" className="bg-sky-50/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wider text-sky-600">Opiniones reales</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-sky-950 sm:text-4xl">Miles de clientes felices</h2>
          <p className="mt-4 text-slate-600">La confianza se gana mudanza tras mudanza. Esto dicen quienes ya se mudaron con nosotros.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(item => (
            <figure key={item.name} className="flex flex-col rounded-2xl border border-sky-100 bg-white p-7 shadow-sm">
              <div className="text-lg text-amber-400" aria-label={`${item.stars} de 5 estrellas`}>{'★'.repeat(item.stars)}</div>
              <blockquote className="mt-4 flex-1 text-slate-700">{`“${item.text}”`}</blockquote>
              <figcaption className="mt-5 border-t border-sky-50 pt-4">
                <div className="font-bold text-sky-950">{item.name}</div>
                <div className="text-sm text-slate-500">{item.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section id="preguntas" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-wider text-sky-600">Preguntas frecuentes</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-sky-950 sm:text-4xl">Resolvemos tus dudas</h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map(faq => (
            <details key={faq.q} className="group rounded-2xl border border-sky-100 bg-white p-5 shadow-sm [&_summary]:cursor-pointer">
              <summary className="flex items-center justify-between gap-4 font-display font-semibold text-sky-950 marker:content-none">
                {faq.q}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 to-sky-700 px-8 py-14 text-center text-white shadow-card sm:py-16">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">¿Listo para tu próxima mudanza?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sky-100">Cotiza gratis hoy mismo y recibe tu precio cerrado en minutos. Sin compromiso.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-sky-700 shadow-soft transition hover:bg-sky-50"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href={`tel:+${SiteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Llamar al
              {' '}
              {SiteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* WhatsApp flotante */}
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.57-.35M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20" />
      </svg>
    </a>
  </>
);
