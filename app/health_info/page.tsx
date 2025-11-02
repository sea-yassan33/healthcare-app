import { Heart } from "lucide-react";
import HealthInfoList from "../../components/HealthInfo/health_info_list";
import HIMenuList from "@/components/HealthInfo/menu_list";
import { JsonLd } from "@/components/Untils/JsonLd";
import type { Metadata } from 'next';
const mt_title = 'Health Hub | 健康情報'
const mt_description = 'HealthHub | 様々な情報源から健康に関する情報を提供します。トピックからオリジナル記事まで様々なコンテンツを用意しております。'
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
export default function HealthInfo() {
  return (
    <>
      <HIMenuList />
      <hr className="my-5" />
      <section className="max-w-7xl mx-auto py-8 px-4">
        {/* ヘッダー */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-muted rounded-full p-3">
            <Heart className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold" id="healthinfo_list">健康情報一覧</h1>
            <p className="text-muted-foreground text-sm mt-1">
              あなたの健康をサポートする情報をお届けします
            </p>
          </div>
        </div>
        <HealthInfoList />
      </section>
      <JsonLd crumbs={[
        { name: "Home", href: "/" },
        { name: "HealthInfo", href: "/health_info" },
      ]} />
    </>
  );
}