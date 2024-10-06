"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import spanish from "../utils/languages/es.json";
import english from "../utils/languages/en.json";
import portuguese from "../utils/languages/pt.json";
import french from "../utils/languages/fr.json";
import arabic from "../utils/languages/ar.json";
import chinese from "../utils/languages/ch.json";

const resources = {
  es: {
    translation: spanish,
  },
  en: {
    translation: english,
  },
  pt: {
    translation: portuguese,
  },
  fr: {
    translation: french,
  },
  ar: {
    translation: arabic,
  },
  ch: {
    translation: chinese,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
