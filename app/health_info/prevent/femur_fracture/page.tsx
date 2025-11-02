import FemurFractureCont from "@/components/HealthInfo/Prevent/FemurFracture/contents";
import { JsonLd } from "@/components/Untils/JsonLd";
import type { Metadata } from 'next';
const mt_title = 'Health Hub | 【予防】大腿骨骨折'
const mt_description = 'HealthHub | 大腿骨骨折についてや予防に関する情報や運動方法について提供するページです。'
export const metadata: Metadata = {
  title: mt_title,
  description: mt_description,
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '情報', '予防', '大腿骨骨折'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/exercise',
    siteName: 'HealthHub',
    title: mt_title,
    description: mt_description,
  },
};
export default function FemurFracturePage() {
  return (
    <>
      <section className="w-full bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              大腿骨骨折について
            </h2>
          </div>
        </div>
        <FemurFractureCont />
      </section>
      <JsonLd crumbs={[
        { name: "Home", href: "/" },
        { name: "HealthInfo", href: "/health_info" },
        { name: "Prevent", href: "/health_info/prevent" },
        { name: "FemurFracture", href: "/health_info/prevent/femur_fracture" },
      ]} />
    </>
  );
}