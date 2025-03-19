import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Salad, Dumbbell } from "lucide-react";

const newsItems = [
  {
    icon: Heart,
    date: "2024.03.21",
    title: "心臓の健康を保つための新しい研究結果",
    description: "日常的な運動と食事管理が心臓病のリスクを大幅に低減することが判明",
    category: "健康"
  },
  {
    icon: Salad,
    date: "2024.03.20",
    title: "地中海式食事法の最新メリット",
    description: "長期研究により、認知機能の維持と寿命延長への効果が確認される",
    category: "栄養"
  },
  {
    icon: Dumbbell,
    date: "2024.03.19",
    title: "効果的な筋力トレーニングの新手法",
    description: "少ない時間で最大の効果を得られる最新のトレーニング方法を紹介",
    category: "運動"
  },
  {
    icon: Brain,
    date: "2024.03.18",
    title: "メンタルヘルスケアの重要性",
    description: "ストレス社会における精神衛生管理の新しいアプローチ",
    category: "メンタルヘルス"
  }
];

export default function NewsSection() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            最新情報
          </h2>
          <p className="text-lg text-gray-600">
            健康・栄養・運動に関する最新のニュースをお届けします
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <div className="flex h-12 items-center gap-2">
                  <item.icon className="h-6 w-6 text-gray-900" />
                  <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}