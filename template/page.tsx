import { tv } from 'tailwind-variants';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Health Hub|健康アプリで運動・栄養をサポート',
  description: 'HealthHub|AI を活用したトレーニング情報・健康情報を発信。初心者から上級者まで、運動・栄養・健康管理をサポートする情報を提供します。',
  keywords: ['健康', 'ヘルスケア', '運動', '栄養', 'AI', '健康管理', 'トレーニング'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://healthcare-app-seven.vercel.app/',
    siteName: 'HealthHub',
    title: 'HealthHub|AI支援健康アプリで運動・栄養をサポート',
    description: 'AI を活用したトレーニング情報・健康情報を発信／運動・栄養・健康管理をサポートする情報サイト',
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