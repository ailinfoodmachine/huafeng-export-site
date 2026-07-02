import type { Metadata } from "next";
import site from "../data/site.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Jinan Huafeng Printing Co., Ltd. | Food Paper Packaging Manufacturer",
    template: "%s | Huafeng Printing"
  },
  description:
    "Export manufacturer of microwave popcorn bags, PFAS-free popcorn bags, microwave pork rind bags and greaseproof kraft paper.",
  openGraph: {
    title: "Jinan Huafeng Printing Co., Ltd.",
    description:
      "Food-contact paper packaging manufacturer for microwave snack bags and greaseproof kraft paper.",
    url: site.domain,
    images: ["/images/hero/hero-factory.webp"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
