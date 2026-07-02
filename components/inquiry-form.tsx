"use client";

import products from "../data/products.json";
import site from "../data/site.json";
import { getLocale, type Lang } from "./i18n";

export function InquiryForm({ lang, productName }: { lang: Lang; productName?: string }) {
  const t = getLocale(lang);

  return (
    <form
      className="form"
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
    >
      <input type="hidden" name="_subject" value="New Huafeng website inquiry" />
      <input type="hidden" name="_next" value={`${site.domain.replace(/\/$/, "")}/${lang}/thank-you`} />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />
      <input type="hidden" name="_captcha" value="false" />
      <input name="name" placeholder={t.form.name} required />
      <input name="email" placeholder={t.form.email} type="email" required />
      <input name="company" placeholder={t.form.company} />
      <select name="product" defaultValue={productName || ""} required>
        <option value="" disabled>
          {t.form.product}
        </option>
        {products.map((product) => (
          <option key={product.slug} value={product.name.en}>
            {product.name[lang]}
          </option>
        ))}
      </select>
      <textarea name="message" placeholder={t.form.message} required />
      <button className="btn" type="submit">
        {t.form.submit}
      </button>
    </form>
  );
}
