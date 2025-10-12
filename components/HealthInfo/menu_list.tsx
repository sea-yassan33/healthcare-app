import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Dumbbell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { tv } from 'tailwind-variants';

const menu_list = [
  {
    icon: Brain,
    title: "記事一覧",
    description: "独自調査した健康に関する最新記事を提供します。",
    link: "/health_info/",
    image: "https://i.gyazo.com/746ba1df96721f92c2e14cfff7f6d05a.jpg",
  },
  {
    icon: Dumbbell,
    title: "データ一覧",
    description: "公共機関が提供する健康に関するデータを掲載しています。",
    link: "/health_info/",
    image: "https://i.gyazo.com/66f7bae333beeb37cadc3ea82a42b9df.jpg",
  },
];

  const twStayles = tv({
    variants: {
      style:{
        link_btn:'flex-1 items-center justify-center inline-block px-4 my-2 rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition',
      },
    },
  });
export default function HIMenuList() {
  return (
    <section className="w-full bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            MENU
          </h2>
          <p className="text-lg text-gray-600">
            様々な情報を提供します。
          </p>
          <Link href="#healthinfo_list" className={twStayles({style:'link_btn'})}>
              健康情報一覧はこちら
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {menu_list.map((app, index) => (
            <Card key={index} className="group overflow-hidden">
              <Link href={app.link}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <app.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {app.description}
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}