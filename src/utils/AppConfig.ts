import { esMX } from '@clerk/localizations';
import type { LocalizationResource } from '@clerk/shared/types';
import type { LocalePrefixMode } from 'next-intl/routing';

/** Locale prefix strategy for next-intl routing. */
const localePrefix: LocalePrefixMode = 'as-needed';

/** Centralized application configuration */
export const AppConfig = {
  name: 'Mudanzas Cano',
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
    localePrefix,
  },
};

const supportedLocales: Record<string, LocalizationResource> = {
  es: esMX,
};

export const ClerkLocalizations = {
  defaultLocale: esMX,
  supportedLocales,
};
