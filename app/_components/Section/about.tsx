import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "思いやりの心",
    description: "個人のニーズに合わせたサービスを提供し、健康を支えます。"
  },
  {
    icon: Users,
    title: "データ連携",
    description: "医療・福祉データを元に、人々の健康を支えるサービスを提供します。"
  },
  {
    icon: Globe,
    title: "グローバルな視点",
    description: "最新の技術と知見を取り入れ、革新的なソリューションを提供します。"
  },
  {
    icon: Sparkles,
    title: "革新への挑戦",
    description: "最先端技術を活用し、新しい挑戦に挑みます。"
  }
];

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            私たちのミッション
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            すべての人々が健やかで幸せな生活を送れる社会の実現を目指して。
            私たちは、最新のテクノロジーと最新の健康に関する知見を組み合わせ、
            一人一人に寄り添ったヘルスケアサービスを提供することで、
            人々の健康と笑顔を支えていきます。
          </p>
          <div className="mb-16">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-blue-200 px-8 text-gray-700 hover:bg-blue-50"
            >
              詳しく見る
            </Button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-blue-50 p-3">
                <value.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}