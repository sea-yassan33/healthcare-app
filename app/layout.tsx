import type { Metadata } from 'next';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gtag } from '@/components/Untils/gtag';

export const metadata: Metadata = {
  metadataBase: new URL("https://healthcare-app-seven.vercel.app/"),
  title: 'Health Hub | 健康アプリで運動・栄養をサポート',
  description: 'Health Hub | AI を活用したトレーニング情報・健康情報を発信。初心者から上級者まで、運動・栄養・健康管理をサポートする情報を提供します。',
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '健康管理', 'トレーニング'],
  verification: {
    google: "IwOtXLvZZyGTORVWA8hCGYB4Lco2l8N1hJ5qs5G9KXM",
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/',
    siteName: 'HealthHub',
    title: 'HealthHub | AI支援健康アプリで運動・栄養をサポート',
    description: 'AI を活用したトレーニング情報・健康情報を発信／運動・栄養・健康管理をサポートする情報サイト',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'HealthHub',
      },  
      {
        url: '/icon.png',
        width: 1800,
        height: 1600,
        alt: 'HealthHub',
      },
    ],
  },
    robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://healthcare-app-seven.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon.png" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Gtag />
      </head>
      <body className="min-h-screen bg-white">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
