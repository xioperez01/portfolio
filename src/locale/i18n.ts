import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import dictionary from "./dictionary";

export const getLocale = (language: string): Record<string, unknown> => {
  const locale: Record<string, unknown> = {};
  Object.keys(dictionary).forEach((key: string) => {
    locale[key] = dictionary[key][language];
  });

  return locale;
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
    },
    resources: {
      es: {
        translation: getLocale("es"),
      },
      en: {
        translation: getLocale("en"),
      },
    },
  });

export default i18n;

