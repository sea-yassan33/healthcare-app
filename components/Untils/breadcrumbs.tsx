"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    name: decodeURIComponent(seg),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-600">
      <ol className="flex">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {crumbs.length > 0 && <span >≫</span>}
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i}>
            {i === crumbs.length - 1 ? (
              <span>{crumb.name}</span>
            ) : (
              <>
                <Link href={crumb.href} className="hover:underline">
                  {crumb.name}
                </Link>
                <span>≫</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}