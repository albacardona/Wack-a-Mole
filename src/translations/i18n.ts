import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsEn from './translations_en.json';
import translationsEs from './translations_es.json';
import translationsFr from './translations_fr.json';
import translationsCa from './translations_ca.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationsEn,
      },
      es: {
        translation: translationsEs,
      },
      fr: {
        translation: translationsFr,
      },
      ca: {
        translation: translationsCa,
      },
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['translation'],
    defaultNS: 'translation',
    returnNull: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  }).catch(console.warn);

export default i18n;
