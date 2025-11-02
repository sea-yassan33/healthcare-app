import type { Metadata } from 'next';
import { JsonLd } from '@/components/Untils/JsonLd';
import ArticleList from '@/components/HealthInfo/Article/article_list';
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
export default function ArticlePage() {
  return (
    <>
      <ArticleList />
      <JsonLd crumbs={[
        { name: "Home", href: "/" },
        { name: "HealthInfo", href: "/health_info" },
        { name: "Article", href: "/health_info/article" },
      ]} />
    </>
  );
}