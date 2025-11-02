import { Heart } from "lucide-react";
import Link from "next/link";
// フッターのリンクデータ
const footerLinks = {
  company: {
    title: "ミッション情報",
    links: [
      { label: "概要", href: "#" },
      { label: "ミッション", href: "#" },
      { label: "ニュースリリース", href: "#" },
      { label: "よくある質問", href: "#" },
      { label: "お問い合わせ", href: "#" },
    ]
  },
  service: {
    title: "サービス",
    links: [
      { label: "トピック一覧", href: "/health_info#healthinfo_list" },
      { label: "記事一覧", href: "/health_info/article" },
      { label: "データ一覧", href: "#" },
      { label: "トレーニング情報", href: "/exercise/" },
      { label: "AI支援ツール", href: "#" }
    ]
  },
  support: {
    title: "サポート",
    links: [
      { label: "サイトマップ", href: "#" },
      { label: "利用規約", href: "/terms" },
      { label: "プライバシーポリシー", href: "/privacy" }
    ]
  }
};
// フッターコンポーネント
export default function Footer() {
  // 年を動的に取得
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Heart className="h-6 w-6 text-blue-600" />
                <span>HealthHub</span>
              </Link>
              <p className="text-sm text-gray-600">
                最新のテクノロジーと確かな医療知識で、
                すべての人々の健康と笑顔をサポートします。
              </p>
            </div>
            {/* Footer Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 font-semibold text-gray-900">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    // リンクタイトル毎に区切る
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom Bar */}
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
              <p>© {currentYear} HealthHub, Inc. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/terms" className="hover:text-gray-900">利用規約</Link>
                <Link href="/privacy" className="hover:text-gray-900">プライバシーポリシー</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}