import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocale, type Lang } from "./i18n";

type Product = {
  slug: string;
  category: string;
  name: Record<Lang, string>;
  summary: Record<Lang, string>;
  features: Record<Lang, string[]>;
  images: string[];
};

export function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const t = getLocale(lang);

  return (
    <article className="card product-card">
      <img src={product.images[0]} alt={product.name[lang]} width="640" height="480" />
      <div className="card-body">
        <span className="eyebrow">{product.category}</span>
        <h3>{product.name[lang]}</h3>
        <p>{product.summary[lang]}</p>
        <div className="tag-row">
          {product.features[lang].slice(0, 3).map((feature) => (
            <span className="tag" key={feature}>
              {feature}
            </span>
          ))}
        </div>
        <Link className="btn secondary" href={`/${lang}/products/${product.slug}`}>
          {t.common.details} <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
