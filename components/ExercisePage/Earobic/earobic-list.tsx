"use client";
import Image from 'next/image';
import { useMemo, useState } from "react";
import {ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import earobic_josn from '@/public/data/aerobic_list.json';
import { EarobicKey, EarobicRow } from '@/lib/exercise/interfaceUtils';
import { EarobicModal } from './earobic-motion';

// モーダル用有酸素運動データ
const EarobicDetails: { [id: number]: EarobicRow } = earobic_josn.reduce(
  // idをキーにした連想配列に変換
  (acc: { [id: number]: EarobicRow }, row: EarobicRow) => {
    acc[row.id] = row;
    return acc;
  },
  {}
);
// 有酸素運動カテゴリ
const EAROBIｃ_TABS: { key: EarobicKey; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "walking", label: "ウォーキング" },
  { key: "running", label: "ランニング" },
  { key: "circit", label: "サーキット" },
  { key: "dance", label: "ダンス" },
  { key: "yoga", label: "ヨガ" },
  { key: "stretch", label: "ストレッチ" },
  { key: "other", label: "その他" },
];
// テーブルに表示するデータ（必要に応じて拡張可能）
const ALL_EAROBICS : EarobicRow[] = earobic_josn;
// 1ページあたりの行数
const PAGE_SIZE = 8;
export default function EarobicList(){
  const [selectedEarobic, setSelectedEarobic] = useState<EarobicKey>("all");
  const [search] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedEarobicId, setSelectedEarobicId] = useState<number | null>(null);
  // フィルタリング
  const filtered = useMemo(() => {
    // 部位で絞り込み
    const byEarobic =
      selectedEarobic === "all"
        ? ALL_EAROBICS
        : ALL_EAROBICS.filter((e) => e.eventKey === selectedEarobic);
    // さらに検索文字列で絞り込み
    const bySearch = search.trim()
      ? byEarobic.filter((e) =>
          e.name.toLowerCase().includes(search.trim().toLowerCase())
        )
      : byEarobic;
    return bySearch;
  }, [selectedEarobic, search]);
  // ページング
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paged = filtered.slice(start, end);
  // 部位タブ選択時の処理
  const handleSelectEarobic = (key: EarobicKey) => {
    setSelectedEarobic(key);
    setPage(1);
  };
  // モーダル制御
  const openModal = (id: number) => {
    setSelectedEarobicId(id);
  };
  const closeModal = () => setSelectedEarobicId(null);
  return(
    <>
      <div className="flex flex-col gap-3">
        {/* 部位絞り込み */}
        <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
          <span className="text-muted-foreground">【Select Part】</span>
          <div className="flex flex-wrap gap-2">
            {EAROBIｃ_TABS.map((tab) => (
              <Button
                key={tab.key}
                type="button"
                onClick={() => handleSelectEarobic(tab.key)}
                variant={selectedEarobic === tab.key ? "default" : "outline"}
                className="h-8 px-3"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {paged.length === 0 ? (
        <div className="col-span-full text-center text-muted-foreground py-10">
          No exercises found.
        </div>
        ) : (
        paged.map((earobic:EarobicRow) => (
        <Card key={earobic.id} className="text-center shadow-md" onClick={() => openModal(earobic.id)}>
          <CardHeader>
            <div className="relative w-full h-52 mb-4" >
              <Image
                src={earobic.thumbnailUrl}
                alt={earobic.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardTitle>{earobic.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{earobic.eventLabel}</p>
            <CardDescription>{earobic.overveiew}</CardDescription>
          </CardContent>
        </Card>
        )))}
      </div>
      {/* フッター: 件数とページネーション */}
        <div className="flex items-center justify-between px-4 py-3 border-t text-sm">
          <div className="text-muted-foreground">
            Showing {total === 0 ? 0 : start + 1}-{Math.min(end, total)} of {total}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setPage((p:number) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {/* 簡易ページ番号（先頭/現在/末尾） */}
            <Button
              variant={currentPage === 1 ? "default" : "outline"}
              className="h-8 px-3"
              onClick={() => setPage(1)}
            >
              1
            </Button>
            {totalPages > 3 && currentPage > 3 && <span className="px-1">…</span>}
            {totalPages >= 2 && currentPage !== 1 && currentPage !== totalPages && (
              <Button variant="default" className="h-8 px-3" disabled>
                {currentPage}
              </Button>
            )}
            {totalPages > 3 && currentPage < totalPages - 2 && <span className="px-1">…</span>}
            {totalPages >= 2 && (
              <Button
                variant={currentPage === totalPages ? "default" : "outline"}
                className="h-8 px-3"
                onClick={() => setPage(totalPages)}
              >
                {totalPages}
              </Button>
            )}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setPage((p:number) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* モーダル表示（指定のコンポーネントを利用） */}
        <EarobicModal
          earobic={ selectedEarobicId ? EarobicDetails[selectedEarobicId] : null }
          open={!!selectedEarobicId}
          onClose={closeModal}
        />
    </>
  )
}