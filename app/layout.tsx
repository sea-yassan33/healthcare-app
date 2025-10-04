import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "健康情報APP | Home",
  description: "健康情報を提供するWEBアプリケーションです。最新のテクノロジーと最新の健康に関する知見を組み合わせて、健康情報を提供します。",
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
      </head>
      <body className="min-h-screen bg-white">
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
