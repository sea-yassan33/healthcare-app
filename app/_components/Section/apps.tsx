import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Dumbbell } from "lucide-react";
import Image from "next/image";

const apps = [
  {
    icon: Activity,
    title: "健康情報一覧",
    description: "毎日を健康に過ごすための基礎知識をお届けいたします。",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=500",
  },
  {
    icon: Brain,
    title: "AI評価",
    description: "病院・クリニックで処方された当社のおくすりについて、患者さんとそのご家族向けにわかりやすく解説している検索サイトです。",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=500",
  },
  {
    icon: Dumbbell,
    title: "トレーニングサポート",
    description: "公式YouTubeチャンネルです。糖尿病やパーキンソン病などの疾病に関する動画を掲載しています。",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500",
  },
];

export default function AppsSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            アプリケーション
          </h2>
          <p className="text-lg text-gray-600">
            あなたの健康をサポートする便利な機能
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {apps.map((app, index) => (
            <Card key={index} className="group overflow-hidden">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}