"use client";

import { useEffect } from "react";
import { getLanguageMeta, type Lang } from "./i18n";

export function DocumentSettings({ lang }: { lang: Lang }) {
  useEffect(() => {
    const meta = getLanguageMeta(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  return null;
}
