import { kz } from 'src/i18n/dictionaries/kz';
import { ru } from 'src/i18n/dictionaries/ru';
import { events } from 'src/i18n/dictionaries/ru/events';

/**
 * As keys are used BCP 47 locale identifiers
 * (see ECMAScript Intl standard)
 */
export const locales = {
  ru: {
    title: 'Русский',
    dictionary: ru,
  },
  kz: {
    title: 'Қазақша',
    dictionary: kz,
  },
} as const;

export const LOCALES: Locales[] = Object.keys(locales) as never[];
export const defaultLocale: Locales = 'ru';
export const defaultDictionary = locales[defaultLocale].dictionary;

export type Locales = keyof typeof locales;
export type Dictionary = typeof defaultDictionary;
export type DictionaryKey = keyof Dictionary;
export type Events = keyof typeof events;
