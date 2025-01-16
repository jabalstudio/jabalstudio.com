export const i18n = {
    defaultLocale: "en",
    locales: ["en", "de", "ar", "fr", "es"],
  };
  
  // Define the Locale type using JavaScript
  /**
   * @typedef {"en" | "de" | "ar" | "fr" | "es"} Locale
   */
  
  import 'server-only';
  
  const dictionaries = {
    en: () => import('../../../public/dictionaries/en.json').then((module) => module.default),
    de: () => import('../../../public/dictionaries/de.json').then((module) => module.default),
    ar: () => import('../../../public/dictionaries/ar.json').then((module) => module.default),
    fr: () => import('../../../public/dictionaries/fr.json').then((module) => module.default),
    es: () => import('../../../public/dictionaries/es.json').then((module) => module.default),
  };
  
  /**
   * Fetches the dictionary for a given locale.
   * @param {"en" | "de" | "ar" | "fr" | "es"} locale - The locale for which to fetch the dictionary.
   * @returns {Promise<Object>} The dictionary object.
   */
  export const getDictionary = async (locale) => dictionaries[locale]?.() ?? dictionaries.en();