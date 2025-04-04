import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: false,
    returnNull: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  })
  .catch(console.warn);

export default i18n;
