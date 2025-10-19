import IntervalList from '@/components/ExercisePage/IntervalTr/interval-list';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Health Hub | インターバルTR',
  description: 'HealthHub | インターバルトレーニングを紹介するページです。メリハリをつけた効果的なトレーニング方法を紹介します。',
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '健康管理', 'トレーニング'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/exercise/earobic_tr',
    siteName: 'HealthHub',
    title: 'HealthHub | インターバルTR',
    description: 'HealthHub | インターバルトレーニングを紹介するページです。メリハリをつけた効果的なトレーニング方法を紹介します。',
  },
};

export default function IntervalTrPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="py-4 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">インターバルトレーニング</h1>
        <p className="text-gray-500 mb-2 max-w-2xl mx-auto">
          インターバルトレーニングを紹介するページです。<br/>
          メリハリをつけた効果的なトレーニング方法を紹介します。
        </p>
      </div>
      <IntervalList />
    </main>
  )
}