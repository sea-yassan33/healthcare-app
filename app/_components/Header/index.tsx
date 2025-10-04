"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Heart } from "lucide-react";
import Link from "next/link";
import { tv } from 'tailwind-variants';

export default function Header() {
    const twStayles = tv({
    variants: {
      style:{
        header_top:'sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        header_nav:'text-sm hover:text-blue-600 transition-colors',
        hum01:'md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        hum_link:'text-sm py-2 hover:text-blue-600 transition-colors',
      },
    },
  });
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  return (
    <header className={twStayles({style:'header_top'})}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-900">HealthHub</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label="メインメニュー">
            <Link href="/" className={twStayles({style:'header_nav'})}>
              ホーム
            </Link>
            <Link href="/health_info" className={twStayles({style:'header_nav'})}>
              健康情報
            </Link>
            <Link href="/execise" className={twStayles({style:'header_nav'})}>
              トレーニング情報
            </Link>
            <Link href="#" className={twStayles({style:'header_nav'})}>
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
          {/* ハンバーガーボタン */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label="メニューを開閉"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {/* SP_ハンバーガーメニュー */}
      {open && (
        <div id="mobile-menu" className={twStayles({style:'hum01'})}>
          <nav className="container py-4 flex flex-col gap-3" aria-label="モバイルメニュー">
            <Link href="/" className={twStayles({style:'hum_link'})} onClick={closeMenu}>
              ホーム
            </Link>
            <Link href="/health_info" className={twStayles({style:'hum_link'})} onClick={closeMenu}>
              健康情報
            </Link>
            <Link href="/execise" className={twStayles({style:'hum_link'})} onClick={closeMenu}>
              トレーニング情報
            </Link>
            <Link href="#" className={twStayles({style:'hum_link'})} onClick={closeMenu}>
              AI支援ツール
            </Link>
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" onClick={closeMenu}>
                私たちについて
              </Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800" onClick={closeMenu}>
                問い合わせ
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}