import { Award, Building2, Globe2, Printer } from "lucide-react";
import site from "../../../data/site.json";
import { getLocale } from "../../../components/i18n";
import { type Lang } from "../../../components/i18n";

export const metadata = {
  title: "About",
  description: "Factory profile of Jinan Huafeng Printing Co., Ltd."
};

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const t = getLocale(params.lang);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t.pages.aboutEyebrow}</span>
          <h1 className="section-title">{site.companyName[params.lang]}</h1>
          <p className="lead">{t.pages.aboutIntro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">{t.pages.aboutEyebrow}</span>
            <h2 className="section-title">{t.pages.aboutTitle}</h2>
            <p className="lead">{t.pages.aboutBody}</p>
            <div className="feature-list">
              <div className="feature-item"><Building2 size={22} /><strong>Registered in Jinan, Shandong</strong></div>
              <div className="feature-item"><Printer size={22} /><strong>Packaging printing license documents</strong></div>
              <div className="feature-item"><Award size={22} /><strong>ISO, FSC and testing documents available</strong></div>
              <div className="feature-item"><Globe2 size={22} /><strong>Support for overseas food packaging buyers</strong></div>
            </div>
          </div>
          <div className="image-grid">
            {[1, 2, 3, 4].map((item) => (
              <img key={item} src={`/images/contact/about-${item}.webp`} alt={`Huafeng company view ${item}`} width="600" height="480" />
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <span className="eyebrow">{t.common.certifications}</span>
          <h2>{t.home.certTitle}</h2>
          <div className="grid four">
            {["business-license", "printing-license", "foreign-trade-registration", "fsc-certificate"].map((name) => (
              <img className="card" key={name} src={`/images/certificates/${name}.webp`} alt={name} width="600" height="420" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
