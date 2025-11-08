import { JsonLd } from "@/components/Untils/JsonLd";
import type { Metadata } from 'next';
const mt_title = 'Health Hub | 【動作】寝返り'
const mt_description = 'HealthHub | 寝返り動作にまつわる知見や動作取得について提供するページです。'
export const metadata: Metadata = {
  title: mt_title,
  description: mt_description,
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '情報', '予防', '寝返り'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/exercise',
    siteName: 'HealthHub',
    title: mt_title,
    description: mt_description,
  },
};
export default function TossingAndTurningPage() {
  return (
    <>
      <section className="w-full bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              寝返りについて（準備中）
            </h2>
          </div>
        </div>
      </section>
      <JsonLd crumbs={[
        { name: "Home", href: "/" },
        { name: "HealthInfo", href: "/health_info" },
        { name: "Prevent", href: "/health_info/prevent" },
        { name: "TossingAndTurning", href: "/health_info/prevent/tat" },
      ]} />
    </>
  );
}