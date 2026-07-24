import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { MudanzaLanding } from './_components/MudanzaLanding';

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: { absolute: 'Mudanzas Cano — Servicios de mudanza seguros en todo México' },
  description: 'Empresa de mudanzas en México: mudanzas locales y foráneas, empacado profesional, fletes y guardamuebles. Cotiza gratis tu mudanza segura, puntual y sin estrés.',
  alternates: { canonical: '/' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { q: '¿Cuánto cuesta una mudanza?', a: 'El precio depende del volumen, la distancia y los servicios extra como empacado o guardamuebles. Te damos una cotización gratuita y con precio cerrado, sin cargos ocultos.' },
    { q: '¿Las mudanzas están aseguradas?', a: 'Sí. Todas nuestras mudanzas incluyen cobertura contra daños durante el traslado para que viajes con total tranquilidad.' },
    { q: '¿Atienden mudanzas foráneas en toda la República?', a: 'Sí, realizamos mudanzas locales y foráneas a cualquier estado de México con seguimiento de tu envío en todo momento.' },
    { q: '¿Ofrecen servicio de empacado?', a: 'Por supuesto. Podemos empacar todo por ti con materiales profesionales, o solo lo más frágil. Tú decides el nivel de servicio.' },
  ].map(item => ({
    '@type': 'Question',
    'name': item.q,
    'acceptedAnswer': { '@type': 'Answer', 'text': item.a },
  })),
};

export default async function Index(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <MudanzaLanding />
    </>
  );
}
