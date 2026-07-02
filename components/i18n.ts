import en from "../locales/en.json";
import zh from "../locales/zh.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import ru from "../locales/ru.json";
import ar from "../locales/ar.json";

export const languages = [
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "zh", label: "\u4e2d\u6587", shortLabel: "\u4e2d\u6587", dir: "ltr" },
  { code: "es", label: "Español", shortLabel: "ES", dir: "ltr" },
  { code: "fr", label: "Français", shortLabel: "FR", dir: "ltr" },
  { code: "ru", label: "Русский", shortLabel: "RU", dir: "ltr" },
  { code: "ar", label: "العربية", shortLabel: "AR", dir: "rtl" }
] as const;

export type Lang = (typeof languages)[number]["code"];

export function isLang(value: string): value is Lang {
  return languages.some((language) => language.code === value);
}

export function getLocale(lang: Lang) {
  const locales = { en, zh, es, fr, ru, ar };
  return locales[lang] ?? en;
}

export function getLanguageMeta(lang: Lang) {
  return languages.find((language) => language.code === lang) ?? languages[0];
}
