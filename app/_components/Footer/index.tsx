import { Heart } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: {
    title: "企業情報",
    links: [
      { label: "会社概要", href: "/about" },
      { label: "ミッション", href: "/mission" },
      { label: "採用情報", href: "/careers" },
      { label: "ニュースリリース", href: "/news" }
    ]
  },
  service: {
    title: "サービス",
    links: [
      { label: "健康情報一覧", href: "/health-info" },
      { label: "AI評価", href: "/ai-assessment" },
      { label: "トレーニングサポート", href: "/training" },
      { label: "オンライン相談", href: "/consultation" }
    ]
  },
  support: {
    title: "サポート",
    links: [
      { label: "お問い合わせ", href: "/contact" },
      { label: "よくある質問", href: "/faq" },
      { label: "利用規約", href: "/terms" },
      { label: "プライバシーポリシー", href: "/privacy" }
    ]
  }
};

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <Heart className="h-6 w-6 text-pink-500" />
              <span>HealthCare</span>
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
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                    >
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
            <p>© 2024 HealthCare, Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-gray-900">利用規約</Link>
              <Link href="/privacy" className="hover:text-gray-900">プライバシーポリシー</Link>
              <Link href="/sitemap" className="hover:text-gray-900">サイトマップ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}