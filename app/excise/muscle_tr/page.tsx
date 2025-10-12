import MuscleContent from "@/components/ExcisePage/MuscleTr";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Health Hub | 筋力トレーニング',
  description: 'HealthHub | 筋力トレーニングリストです。自宅でできる筋力トレーニングリストを作成しました。基本的に道具なしで手軽にできる運動を中心に紹介しています。',
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '健康管理', 'トレーニング'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/excise/muscle_tr',
    siteName: 'HealthHub',
    title: 'HealthHub | 筋力トレーニングリスト',
    description: 'HealthHub | 筋力トレーニングリストです。自宅でできる筋力トレーニングリストを作成しました。基本的に道具なしで手軽にできる運動を中心に紹介しています。',
  },
};
export default function MusclePage() {
  return (
    <main className="p-6 md:p-8 space-y-6">
      <MuscleContent />
    </main>
  );
}