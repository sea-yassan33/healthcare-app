import type { Metadata } from 'next';
import HeroSection from "@/components/Home/hero";
import NewsSection from "@/components/Home/news";
import AppsSection from "@/components/Home/apps";
import AboutSection from "@/components/Home/about";
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
