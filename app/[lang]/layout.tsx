import { notFound } from "next/navigation";
import { isLang, languages, type Lang } from "../../components/i18n";
import { SiteShell } from "../../components/layout";

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLang(params.lang)) {
    notFound();
  }

  return <SiteShell lang={params.lang as Lang}>{children}</SiteShell>;
}
