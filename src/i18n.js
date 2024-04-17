import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      desc: "nice description bro",
    },
  },
  pl: {
    translation: {
      "Welcome to React": "Witaj w React z react-i18next",
      desc: "to niezly opis",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
