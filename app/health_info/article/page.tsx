import { tv } from 'tailwind-variants';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Health Hub | 健康記事一覧',
  description: 'HealthHub | 独自に調査した健康に関する記事の一覧になります。公平な視点で情報を提供しています。',
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '健康管理', 'トレーニング'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/health_info/article',
    siteName: 'HealthHub',
    title: 'HealthHub | 健康記事一覧',
    description: '独自に調査した健康に関する記事の一覧になります。公平な視点で情報を提供しています。',
  },
};
export default function Sample00() {
  const twStayles = tv({
    variants: {
      style:{
        text01:'text-cyan-400',
      },
    },
  });
  return (
    <div className={twStayles({style:'text01'})}>
      first_commit
    </div>
  );
}