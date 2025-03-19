import HeroSection from "./_components/Section/hero";
import NewsSection from "./_components/Section/news";
import AppsSection from "./_components/Section/apps";
import AboutSection from "./_components/Section/about";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <NewsSection />
      <AppsSection />
      <AboutSection />
    </div>
  );
}
