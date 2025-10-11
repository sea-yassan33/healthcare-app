import type { Metadata } from 'next';
import HeroSection from "./_components/Section/hero";
import NewsSection from "./_components/Section/news";
import AppsSection from "./_components/Section/apps";
import AboutSection from "./_components/Section/about";
import { JsonLd } from '@/components/Untils/JsonLd';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://healthcare-app-seven.vercel.app/",
  },
};

export default function Home() {

  return (
    <>
      <main>
        <HeroSection />
        <NewsSection />
        <AppsSection />
        <AboutSection />
      </main>
      <JsonLd />
    </>
  );
}
