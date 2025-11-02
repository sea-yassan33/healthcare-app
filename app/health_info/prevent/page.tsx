import PreventList from "@/components/HealthInfo/Prevent/prevent_list";
import { JsonLd } from "@/components/Untils/JsonLd";
import type { Metadata } from 'next';
const mt_title = 'Health Hub | コンデション・予防'
const mt_description = 'HealthHub | 予防理学療法の観点からコンディショニングや疾病予防に関する情報を提供しております。'
export const metadata: Metadata = {
  title: mt_title,
  description: mt_description,
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '情報', '予防'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/exercise',
    siteName: 'HealthHub',
    title: mt_title,
    description: mt_description,
  },
};
export default function PreventPage() {
  return (
    <>
      <section className="w-full bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              コンディショニング・予防理学一覧
            </h2>
            <p className="text-lg text-gray-600">
              コンディショニングや疾病予防など予防理学療法の観点で情報を提供しております。
            </p>
          </div>
        </div>
        <PreventList />
      </section>
      <JsonLd crumbs={[
        { name: "Home", href: "/" },
        { name: "HealthInfo", href: "/health_info" },
        { name: "Prevent", href: "/health_info/prevent" },
      ]} />
    </>
  );
}