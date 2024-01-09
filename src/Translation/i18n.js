import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationKo from 'Translation/ko/translation.json';
import translationEn from 'Translation/en/translation.json';

const resources = {
  ko: {
    translation : translationKo
  },
  en: {
    translation : translationEn
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng:'ko',
  fallbackLng:'en',
  interpolation : {
    escapeValue : false
  }
});

export default i18n;