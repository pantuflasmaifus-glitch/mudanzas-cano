import { setRequestLocale } from 'next-intl/server';
import { SiteConfig } from '@/utils/SiteConfig';
import { MudanzaFooter } from './_components/MudanzaFooter';
import { MudanzaHeader } from './_components/MudanzaHeader';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const businessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    'name': SiteConfig.name,
    'url': SiteConfig.url,
    'description': 'Empresa de mudanzas en México: mudanzas locales y foráneas, empacado profesional, fletes y guardamuebles.',
    'telephone': `+${SiteConfig.phoneRaw}`,
    'email': SiteConfig.email,
    'priceRange': '$$',
    'image': `${SiteConfig.url}/og-image.png`,
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'MX',
      'addressLocality': 'Ciudad de México',
      'addressRegion': 'CDMX',
    },
    'areaServed': SiteConfig.cities.map(city => ({ '@type': 'City', 'name': city })),
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '08:00',
      'closes': '19:00',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '2150',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <MudanzaHeader />
      <main>{props.children}</main>
      <MudanzaFooter />
    </>
  );
}
