"use client";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Filter } from "lucide-react";

// サンプルデータ
const categories = [
  { label: "全て", value: "" },
  { label: "トピック", value: "トピック" },
  { label: "論文", value: "論文" },
  { label: "データ紹介", value: "データ紹介" },
];

const tags = [
  "ストレス管理", "ストレッチ", "マインドフルネス", "メンタルヘルス", "リラクゼーション",
  "予防医学", "予防接種", "健康政策", "健康診断", "健康食品", "健康飲料", "免疫", "国際比較",
  "平均寿命", "感染症", "早期発見", "有酸素運動", "栄養", "栄養バランス", "水分補給", "生活習慣病",
  "疲労回復", "睡眠", "睡眠の質", "研究", "神経科学", "筋力トレーニング", "統計", "脱水予防",
  "認知機能", "運動", "食事療法", "生活リズム",
];

const healthInfos = [
  {
    id: 1,
    category: "トピック",
    title: "バランスの良い食事で健康的な生活を",
    description: "日常生活において栄養バランスの取れた食事は、健康維持の基本です。五大栄養素をバランス良く摂取することで、体の機能を最適に保つことができます。",
    tags: ["栄養", "栄養バランス", "健康食品", "食事療法"],
    author: "田中 栄養士",
    time: "5分",
    date: "2024年12月15日"
  },
  {
    id: 2,
    category: "トピック",
    title: "日常的な運動で心身の健康を維持",
    description: "定期的な運動は、身体的健康だけでなく精神的な健康にも大きな効果があります。運動習慣を身につけることで、生活の質を向上させることができます。",
    tags: ["運動", "有酸素運動", "筋力トレーニング", "ストレッチ"],
    author: "佐藤 トレーナー",
    time: "7分",
    date: "2024年12月12日"
  },
  {
    id: 3,
    category: "トピック",
    title: "質の良い睡眠で疲労回復とパフォーマンス向上",
    description: "良質な睡眠は、身体の回復と脳の機能維持に不可欠です。睡眠の質を改善することで、日中のパフォーマンスが大幅に向上します。",
    tags: ["睡眠", "睡眠の質", "疲労回復", "生活リズム"],
    author: "山田 睡眠専門医",
    time: "6分",
    date: "2024年12月10日"
  },
];

export default function HealthInfoList() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // フィルタリング
  const filteredInfos = healthInfos.filter(info => {
    const matchCategory = !category || info.category === category;
    const matchSearch =
      !search ||
      info.title.includes(search) ||
      info.description.includes(search) ||
      info.tags.some(tag => tag.includes(search));
    const matchTags =
      selectedTags.length === 0 ||
      selectedTags.every(tag => info.tags.includes(tag));
    return matchCategory && matchSearch && matchTags;
  });

  return (
    <>
      {/* 検索 */}
      <div className="max-w-xl mb-6">
        <Input
          placeholder="健康情報を検索..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>
      {/* カテゴリ・タグフィルター */}
      <section className="bg-muted/50 rounded-xl p-6 mb-8">
        {/* カテゴリ */}
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium">カテゴリ別フィルター:</span>
          <div className="flex gap-2 ml-4">
            {categories.map(cat => (
              <Button
                key={cat.value}
                variant={category === cat.value ? "default" : "outline"}
                size="sm"
                className={cn("rounded-full px-3", category === cat.value && " text-gray-100 bg-blue-600")}
                onClick={() => setCategory(cat.value)}
                >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
        {/* タグ */}
        <div>
          <span className="text-sm font-medium">タグ別フィルター:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className={cn("cursor-pointer rounded-full px-3 py-1 text-sm", selectedTags.includes(tag) && " text-gray-100 bg-blue-600")}
                onClick={() =>
                  setSelectedTags(selectedTags.includes(tag)
                    ? selectedTags.filter(t => t !== tag)
                    : [...selectedTags, tag])
                }
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* 件数表示 */}
      <div className="mb-6 text-muted-foreground text-sm">
        {filteredInfos.length}件の健康情報が見つかりました
      </div>

      {/* カードリスト */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredInfos.map(info => (
          <Card key={info.id} className="bg-muted/40">
            <CardHeader className="pb-2">
              <Badge variant="secondary" className="rounded px-2 py-1 text-xs mb-2">{info.category}</Badge>
              <h2 className="text-lg font-semibold">{info.title}</h2>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {info.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="rounded-full px-2 py-1 text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>{info.author}</span>
                <span>・</span>
                <span>{info.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{info.date}</span>
                <Button variant="link" className="px-0 h-auto text-primary text-xs">詳しく見る</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}