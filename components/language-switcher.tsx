"use client";

import { Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { languages, type Lang } from "./i18n";

const languageCodes = languages.map((language) => language.code).join("|");
const languagePrefix = new RegExp(`^/(${languageCodes})(?=/|$)`);

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = languages.find((language) => language.code === lang) ?? languages[0];

  function handleChange(nextLang: string) {
    const nextPath = pathname.match(languagePrefix)
      ? pathname.replace(languagePrefix, `/${nextLang}`)
      : `/${nextLang}${pathname}`;
    router.push(nextPath);
  }

  return (
    <label className="lang-select" aria-label="Language selector">
      <Globe2 size={16} aria-hidden="true" />
      <select value={lang} onChange={(event) => handleChange(event.target.value)}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
      <span>{current.shortLabel}</span>
    </label>
  );
}
