import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './translations/english.json'
import arabic from './translations/arabic.json'
import { LANGUAGE_STORAGE_KEY } from "./context/language/LanguageProvider";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: english },
            ar: { translation: arabic },
        },
        lng: localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? 'en',
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });