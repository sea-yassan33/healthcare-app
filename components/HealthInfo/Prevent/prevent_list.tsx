import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import categories from "./pr_list_data";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function PreventList() {
  return (
    <div className="w-ful py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-bold text-gray-700 mb-6 border-b border-gray-300 pb-2">
          記事カテゴリー
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.title} className="shadow-sm">
              <CardContent className="flex items-start gap-4 p-4">
                <div className="flex-shrink-0 w-12 h-12 relative">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-base mb-1">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1">
                    {category.items.map((item) => (
                      <Link key={item.name} href={item.url} className=" my-1">
                        <Button className="rounded-2xl hover:shadow-md">
                          {item.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}