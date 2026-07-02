import Link from "next/link";
import { Award, Factory, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import products from "../../data/products.json";
import site from "../../data/site.json";
import { getLocale, type Lang } from "../../components/i18n";
import { ProductCard } from "../../components/product-card";

const icons = [Factory, PackageCheck, ShieldCheck, Truck];

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const t = getLocale(params.lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.companyName.en,
    alternateName: site.companyName.zh,
    foundingDate: site.founded,
    address: site.address.en,
    email: site.email,
    url: site.domain
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <img className="hero-bg" src="/images/hero/hero-factory.webp" alt="Huafeng Printing factory workshop" />
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">{t.home.eyebrow}</span>
            <h1>{t.home.title}</h1>
            <p>{t.home.intro}</p>
            <div className="hero-actions">
              <Link className="btn" href={`/${params.lang}/products`}>
                {t.home.primary}
              </Link>
              <Link className="btn secondary" href={`/${params.lang}/contact`}>
                {t.home.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container metrics">
          <div className="metric"><strong>2011</strong><span>Established</span></div>
          <div className="metric"><strong>4</strong><span>Core product lines</span></div>
          <div className="metric"><strong>ISO</strong><span>9001 / 22000 documents</span></div>
          <div className="metric"><strong>OEM</strong><span>Custom printing and sizing</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{t.common.featuredProducts}</span>
          <h2 className="section-title">{t.home.productsTitle}</h2>
          <div className="grid four">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} lang={params.lang} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <span className="eyebrow">{t.common.factoryStrength}</span>
            <h2 className="section-title">{t.home.factoryTitle}</h2>
            <p className="lead">{t.home.factoryIntro}</p>
            <div className="feature-list">
              {["Food-contact paper packaging", "Custom printed packaging", "Batch inspection and reports", "Export documents support"].map((item, index) => {
                const Icon = icons[index];
                return (
                  <div className="feature-item" key={item}>
                    <Icon size={22} />
                    <div><strong>{item}</strong></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="image-grid">
            {[1, 2, 3, 4].map((item) => (
              <img key={item} src={`/images/factory/factory-${item}.webp`} alt={`Huafeng factory ${item}`} width="600" height="480" />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{t.common.certifications}</span>
          <h2 className="section-title">{t.home.certTitle}</h2>
          <div className="grid three">
            {site.certificates.map((certificate) => (
              <div className="card" key={certificate}>
                <div className="card-body feature-item">
                  <Award size={22} />
                  <strong>{certificate}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="logos" style={{ marginTop: 28 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div className="logo-box" key={item}>
                <img src={`/images/logos/customer-logo-${item}${item === 4 || item === 6 ? ".svg" : item === 5 ? ".jpg" : ".png"}`} alt={`Customer logo ${item}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
