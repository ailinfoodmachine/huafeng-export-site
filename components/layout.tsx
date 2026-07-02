import Link from "next/link";
import { Mail, MessageSquare, Phone } from "lucide-react";
import site from "../data/site.json";
import { getLocale, type Lang } from "./i18n";
import { DocumentSettings } from "./document-settings";
import { LanguageSwitcher } from "./language-switcher";

const navItems = ["products", "catalog", "about", "contact"] as const;

export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = getLocale(lang);

  return (
    <>
      <DocumentSettings lang={lang} />
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href={`/${lang}`} aria-label="Huafeng Printing home">
            <span className="brand-mark">HF</span>
            <span>{site.shortName}</span>
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href={`/${lang}`}>{t.nav.home}</Link>
            {navItems.map((item) => (
              <Link key={item} href={`/${lang}/${item}`}>
                {t.nav[item]}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <LanguageSwitcher lang={lang} />
            <Link className="btn" href={`/${lang}/contact`} title={t.nav.quote}>
              <Mail size={17} />
              {t.nav.quote}
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <aside className="whatsapp-float" aria-label="WhatsApp QR code">
        <img src="/images/contact/whatsapp-qr.jpg" alt="WhatsApp QR code" width="112" height="112" />
        <span>WhatsApp</span>
      </aside>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand">
                <span className="brand-mark">HF</span>
                <span>{site.companyName[lang]}</span>
              </div>
              <p>{t.footer.intro}</p>
            </div>
            <div>
              <h3>{t.nav.products}</h3>
              <p>
                <Link href={`/${lang}/products`}>Microwave popcorn bags</Link>
                <br />
                <Link href={`/${lang}/products/pfas-free-popcorn-bags`}>PFAS-free popcorn bags</Link>
                <br />
                <Link href={`/${lang}/products/greaseproof-kraft-paper`}>Greaseproof kraft paper</Link>
              </p>
            </div>
            <div>
              <h3>{t.nav.contact}</h3>
              <p>
                <Mail size={15} /> {site.email}
                <br />
                <Phone size={15} /> {site.phone}
                <br />
                <MessageSquare size={15} /> WhatsApp: {site.whatsapp}
                <br />
                {site.address[lang]}
              </p>
              <img className="footer-qr" src="/images/contact/whatsapp-qr.jpg" alt="WhatsApp QR code" width="96" height="96" />
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} {site.companyName[lang]}. {t.footer.copyright}
          </div>
        </div>
      </footer>
    </>
  );
}
