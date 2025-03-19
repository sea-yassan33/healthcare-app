import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <Heart className="h-6 w-6 text-pink-500" />
          <span>HealthCare</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/exercise" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Exercise
          </Link>
          <Link href="/nutrition" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Nutrition
          </Link>
          <Link href="/wellness" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Wellness
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="hidden bg-gray-900 text-white hover:bg-gray-800 md:inline-flex">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}