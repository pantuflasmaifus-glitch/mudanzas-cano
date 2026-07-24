import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['500', '600', '700', '800'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mudanzascano.com.mx'),
  title: {
    default: 'Mudanzas Cano — Servicios de mudanza seguros en todo México',
    template: '%s | Mudanzas Cano',
  },
  description: 'Empresa de mudanzas en México. Mudanzas locales y foráneas, empacado profesional, fletes y guardamuebles. Cotiza gratis tu mudanza segura, puntual y sin estrés.',
  keywords: ['mudanzas méxico', 'empresa de mudanzas', 'mudanzas cdmx', 'fletes y mudanzas', 'mudanzas locales', 'mudanzas foráneas', 'empacado profesional', 'guardamuebles', 'mudanzas económicas'],
  authors: [{ name: 'Mudanzas Cano' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Mudanzas Cano',
    title: 'Mudanzas Cano — Tu mudanza segura en todo México',
    description: 'Mudanzas locales y foráneas, empacado profesional y guardamuebles. Cotización gratis en minutos.',
    url: 'https://mudanzascano.com.mx',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudanzas Cano — Tu mudanza segura en todo México',
    description: 'Mudanzas locales y foráneas, empacado profesional y guardamuebles. Cotización gratis en minutos.',
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <NextIntlClientProvider>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
