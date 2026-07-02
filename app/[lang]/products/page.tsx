import products from "../../../data/products.json";
import { getLocale, type Lang } from "../../../components/i18n";
import { ProductCard } from "../../../components/product-card";

export const metadata = {
  title: "Products",
  description: "Microwave popcorn bags, PFAS-free popcorn bags, microwave pork rind bags and greaseproof kraft paper."
};

export default function ProductsPage({ params }: { params: { lang: Lang } }) {
  const t = getLocale(params.lang);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t.common.allProducts}</span>
          <h1 className="section-title">{t.pages.productsTitle}</h1>
          <p className="lead">{t.pages.productsIntro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container product-layout">
          <aside className="sidebar">
            {products.map((product) => (
              <a href={`#${product.slug}`} key={product.slug}>
                {product.name[params.lang]}
              </a>
            ))}
          </aside>
          <div className="grid two">
            {products.map((product) => (
              <div id={product.slug} key={product.slug}>
                <ProductCard product={product} lang={params.lang} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
