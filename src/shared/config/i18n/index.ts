import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-locize-backend'
import { DateTime } from 'luxon'

// const isDev = process.env.NODE_ENV === 'development'
const isDev = false

const locizeOptions = {
  projectId: process.env.LOCIZE_ID,
  // Only to save new keys in dev, do not include the API key in production build
  apiKey: isDev && process.env.LOCIZE_API_KEY,
  referenceLng: 'en',
}

i18n
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      // format: (value, format, lng) => { // legacy usage
      //   if (value instanceof Date) {
      //     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
      //   }
      //   return value;
      // }
    },
    backend: locizeOptions,
    saveMissing: false, //
  })

// new usage
i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE)
})

export default i18n
