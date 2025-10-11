"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Filter } from "lucide-react";
import { healtTags } from "../../lib/parts/helth_info_tag";
import healthinfo from "@/public/data/healthinfo.json";

// 大項目：カテゴリー
const categories = [
  { label: "全て", value: 0 },
  { label: "トピック", value: 1 },
  { label: "論文", value: 2 },
  { label: "データ紹介", value: 3 },
];

// healtTagsからタグ名の配列を作成
const tags = healtTags.map(tag => tag.Tag);
// 健康情報一覧（トピック、論文、データ含む：最新順）
const healthInfos = healthinfo;

export default function HealthInfoList() {
  const [category, setCategory] = useState<number>(0);
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
                onClick={() => setCategory(cat.value as number)}
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
              {/* カテゴリ値毎にカテゴリー名を出力 */}
              {info.category === 1 && <Badge variant="secondary" className="rounded px-2 py-1 text-xs mb-2">トピック</Badge>}
              {info.category === 2 && <Badge variant="secondary" className="rounded px-2 py-1 text-xs mb-2">論文</Badge>}
              {info.category === 3 && <Badge variant="secondary" className="rounded px-2 py-1 text-xs mb-2">データ紹介</Badge>}
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
              <div className="gap-2">
                <span>記事投稿日：{info.date.split(" ")[0]}</span><br/>
              </div>
              <div className="flex items-center gap-2">
                <Link href={info.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="px-0 h-auto text-primary text-xs">詳しく見る</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}