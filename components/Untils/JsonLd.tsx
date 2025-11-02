'use client'
import Script from "next/script";
type Crumb = { name: string; href: string };
export function JsonLd({ crumbs }: { crumbs: Crumb[] }) {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    itemListElement: crumbs.map((c, i) => ({
      position: i + 1,
      name: c.name,
      url: c.href,
    })),
  };
  return (
    <Script
      id="breadcrumb-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
