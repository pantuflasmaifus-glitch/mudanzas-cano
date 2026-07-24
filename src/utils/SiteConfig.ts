/** Datos de contacto y marca centralizados del sitio. */
export const SiteConfig = {
  name: 'Mudanzas Cano',
  url: 'https://mudanzascano.com.mx',
  /** Número en formato internacional sin signos para enlaces wa.me y tel. */
  phoneRaw: '525531457440',
  /** Número con formato legible para mostrar al usuario. */
  phoneDisplay: '55 3145 7440',
  email: 'hola@mudanzascano.com.mx',
  whatsappMessage: 'Hola, me gustaría cotizar una mudanza.',
  /** Ciudades con cobertura, usadas en la sección de cobertura y en SEO. */
  cities: ['Ciudad de México', 'Estado de México', 'Guadalajara', 'Monterrey', 'Querétaro', 'Puebla', 'Cuernavaca', 'Toluca'],
} as const;

/** Devuelve la URL de WhatsApp con un mensaje opcional. */
export const whatsappUrl = (message: string = SiteConfig.whatsappMessage) =>
  `https://wa.me/${SiteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
