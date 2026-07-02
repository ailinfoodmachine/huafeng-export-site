import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import site from "../../../data/site.json";
import { getLocale, type Lang } from "../../../components/i18n";
import { InquiryForm } from "../../../components/inquiry-form";

export const metadata = {
  title: "Contact",
  description: "Contact Huafeng Printing for food paper packaging quotations."
};

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const t = getLocale(params.lang);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t.nav.contact}</span>
          <h1 className="section-title">{t.pages.contactTitle}</h1>
          <p className="lead">{t.pages.contactIntro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <div className="card">
            <div className="card-body">
              <h2>{t.common.requestQuote}</h2>
              <InquiryForm lang={params.lang} />
            </div>
          </div>
          <div>
            <div className="feature-list">
              <div className="feature-item"><Mail size={22} /><div><strong>Email</strong><br />{site.email}</div></div>
              <div className="feature-item"><Phone size={22} /><div><strong>Phone</strong><br />{site.phone}</div></div>
              <div className="feature-item"><MessageSquare size={22} /><div><strong>WhatsApp</strong><br />{site.whatsapp}</div></div>
              <div className="feature-item"><MapPin size={22} /><div><strong>Address</strong><br />{site.address[params.lang]}</div></div>
            </div>
            <div className="qr-panel">
              <img src="/images/contact/whatsapp-qr.jpg" alt="WhatsApp QR code" width="280" height="280" />
              <div>
                <strong>WhatsApp QR</strong>
                <p>Scan to contact Huafeng for product details and quotations.</p>
              </div>
            </div>
            <div className="card" style={{ marginTop: 26 }}>
              <img src="/images/factory/factory-5.webp" alt="Factory location placeholder" width="900" height="520" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
