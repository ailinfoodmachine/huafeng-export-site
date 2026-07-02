import { Download } from "lucide-react";
import products from "../../../data/products.json";
import { getLocale, type Lang } from "../../../components/i18n";

const certificates = [
  { name: "ISO 9001 Certificate", href: "/catalogs/9001.pdf" },
  { name: "ISO 22000 Certificate", href: "/catalogs/22000.pdf" },
  { name: "PFAS-Free Test Report", href: "/catalogs/a2260329592101001.pdf" },
  { name: "2026 Test Report", href: "/catalogs/pl0501142-2026-1776910528594-26.pdf" }
];

export const metadata = {
  title: "Catalog Downloads",
  description: "Download Huafeng product introductions, certificates and test report PDFs."
};

export default function CatalogPage({ params }: { params: { lang: Lang } }) {
  const t = getLocale(params.lang);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t.common.productCatalog}</span>
          <h1 className="section-title">{t.pages.catalogTitle}</h1>
          <p className="lead">{t.pages.catalogIntro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <div>
            <h2>{t.pages.productPdfs}</h2>
            <div className="grid">
              {products.map((product) => (
                <a className="catalog-link" href={product.catalog} key={product.slug}>
                  <span>{product.name[params.lang]}</span>
                  <Download size={18} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2>{t.pages.certificateReports}</h2>
            <div className="grid">
              {certificates.map((item) => (
                <a className="catalog-link" href={item.href} key={item.href}>
                  <span>{item.name}</span>
                  <Download size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
