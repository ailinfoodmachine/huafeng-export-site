import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getLocale } from "../../../components/i18n";
import { type Lang } from "../../../components/i18n";

export const metadata = {
  title: "Thank You",
  description: "Inquiry submitted."
};

export default function ThankYouPage({ params }: { params: { lang: Lang } }) {
  const t = getLocale(params.lang);

  return (
    <section className="section">
      <div className="container" style={{ minHeight: "52vh", display: "grid", placeItems: "center" }}>
        <div className="card" style={{ maxWidth: 680 }}>
          <div className="card-body">
            <CheckCircle2 size={42} color="#1f6f5b" />
            <h1>{t.pages.thankTitle}</h1>
            <p>{t.pages.thankBody}</p>
            <Link className="btn" href={`/${params.lang}/products`}>{t.pages.backProducts}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
