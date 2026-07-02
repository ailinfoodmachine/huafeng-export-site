import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { notFound } from "next/navigation";
import products from "../../../../data/products.json";
import { getLocale, languages, type Lang } from "../../../../components/i18n";
import { InquiryForm } from "../../../../components/inquiry-form";
import { ProductCard } from "../../../../components/product-card";

export function generateStaticParams() {
  return languages.flatMap((language) =>
    products.map((product) => ({ lang: language.code, slug: product.slug }))
  );
}

export function generateMetadata({ params }: { params: { lang: Lang; slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name[params.lang],
    description: product.summary[params.lang],
    openGraph: {
      title: product.name[params.lang],
      description: product.summary[params.lang],
      images: [product.images[0]]
    }
  };
}

export default function ProductDetailPage({ params }: { params: { lang: Lang; slug: string } }) {
  const t = getLocale(params.lang);
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name.en,
    description: product.summary.en,
    image: product.images
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{product.category}</span>
          <h1 className="section-title">{product.name[params.lang]}</h1>
          <p className="lead">{product.summary[params.lang]}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="gallery">
            <img src={product.images[0]} alt={product.name[params.lang]} width="900" height="700" />
            <div className="thumbs">
              {product.images.slice(1).map((image) => (
                <img key={image} src={image} alt={product.name[params.lang]} width="420" height="310" />
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">{t.common.requestQuote}</span>
            <h2>{t.pages.customTitle}</h2>
            <p className="lead">{t.pages.customIntro}</p>
            <div className="tag-row">
              {product.features[params.lang].map((feature) => (
                <span className="tag" key={feature}>{feature}</span>
              ))}
            </div>
            <Link className="btn secondary" href={product.catalog}>
              <Download size={17} /> {t.common.download} PDF
            </Link>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container grid two">
          <div>
            <span className="eyebrow">{t.common.specifications}</span>
            <h2>{t.common.productParameters}</h2>
            <table className="spec-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="feature-item">
                <FileText size={22} />
                <h2>{t.common.requestQuote}</h2>
              </div>
              <InquiryForm lang={params.lang} productName={product.name.en} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">{t.common.relatedProducts}</span>
          <div className="grid three">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} lang={params.lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
