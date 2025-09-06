import { Button } from "@/components/ui/button";
import { Menu, Heart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-900">HealthHub</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
              ホーム
            </Link>
            <Link href="#" className="text-sm hover:text-blue-600 transition-colors">
              健康情報
            </Link>
            <Link href="#" className="text-sm hover:text-blue-600 transition-colors">
              トレーニング情報
            </Link>
            <Link href="#" className="text-sm hover:text-blue-600 transition-colors">
              AI支援ツール
            </Link>
          </nav>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            私たちについて
          </Button>
          <Button className="hidden bg-gray-900 text-white hover:bg-gray-800 md:inline-flex">
            問い合わせ
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}