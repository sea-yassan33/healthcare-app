export function JsonLd() {
  return (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "name": "Health Hub",
            "url": "https://healthcare-app-seven.vercel.app"
          }),
        }}
      />
  );
}
