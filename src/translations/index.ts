import translationEn from './en/translation.json';
import translationEs from './es/translation.json';
import translationCa from './ca/translation.json';
import translationFr from './fr/translation.json';

const en = {
  translation: translationEn,
} as const;

const es = {
  translation: translationEs,
} as const;

const ca = {
  translation: translationCa,
} as const;

const fr = {
  translation: translationFr,
} as const;

export const translations = {
  en,
  es,
  ca,
  fr,
} as const;
