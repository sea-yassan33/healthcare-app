import type { Metadata } from 'next';
import EarobicHero from '@/components/ExercisePage/Earobic/earobic-hero';
import EarobicList from '@/components/ExercisePage/Earobic/earobic-list';
import { JsonLd } from '@/components/Untils/JsonLd';
export const metadata: Metadata = {
  title: 'Health Hub | 有酸素運動リスト',
  description: 'HealthHub | 有酸素運動リストです。無理なく続けられる運動を見つけましょう。',
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '健康管理', 'トレーニング'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/exercise/earobic_tr',
    siteName: 'HealthHub',
    title: 'HealthHub | 有酸素運動リスト',
    description: 'HealthHub | 有酸素運動リストです。無理なく続けられる運動を見つけましょう。',
  },
};

export default function EarobicTrPage() {
  return (
    <>
      <section className="py-12">
        <EarobicHero />
        <EarobicList />
      </section>
      <JsonLd crumbs={[
        { name: "Home", href: "/" },
        { name: "Exercise", href: "/exercise" },
        { name: "EarobicTr", href: "/exercise/earobic_tr" },
      ]} />
    </>
  )
}