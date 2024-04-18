import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationsEN, translationsPL } from "./assets/translations.js";

const resources = {
  en: translationsEN,

  pl: translationsPL,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
