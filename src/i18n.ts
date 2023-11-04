import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import { Lang } from "@enums";

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Lang.EN,
    lng: localStorage.getItem("i18nextLng") ?? Lang.EN,
    debug: true,

    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
