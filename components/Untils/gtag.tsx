import Script from "next/script";

export function Gtag() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5YMYP4V1QT" 
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5YMYP4V1QT', { page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  );
}