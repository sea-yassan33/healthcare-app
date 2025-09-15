"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Search as SearchIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { ExerciseModal } from "@/components/ExcisePage/excise-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
// モーダルに渡す詳細データ
type ExerciseDetail = {
  title: string;
  videoUrl: string;
  mainMuscle: string;
  steps: string[];
};
// テーブル1行分の型
type ExerciseRow = {
  name: string;
  muscleKey: MuscleKey;
  muscleLabel: string; // 表示用（肩/背中/腕/胸/腹部）
  mainMuscle?: string; // 例: 三角筋前部/中部/後部
  videoUrl?: string;
};
type MuscleKey = "all" | "shoulder" | "back" | "arm" | "chest" | "abs";
const MUSCLE_TABS: { key: MuscleKey; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "shoulder", label: "肩" },
  { key: "back", label: "背中" },
  { key: "arm", label: "腕" },
  { key: "chest", label: "胸" },
  { key: "abs", label: "腹部" },
];
// 参考動画や手順をモーダル用に定義（必要分だけ）
const exerciseDetails: Record<string, ExerciseDetail> = {
  "フロントレイズ": {
    title: "フロントレイズ｜三角筋前部",
    videoUrl: "https://www.youtube.com/embed/55HUwh5Oy8A",
    mainMuscle: "三角筋前部",
    steps: [
      "両手にダンベルを持つ",
      "腕を前方にまっすぐ上げる",
      "肩の高さまで持ち上げてゆっくり下ろす",
    ],
  },
  "パイクプッシュアップ": {
    title: "パイクプッシュアップ｜三角筋前部",
    videoUrl: "https://www.youtube.com/embed/qkHj1V9rR3M",
    mainMuscle: "三角筋前部",
    steps: [
      "臀部を高く上げV字姿勢を作る",
      "肘を曲げて頭を床へ近づける",
      "肩周りを意識して押し上げる",
    ],
  },
  "ダンベルサイドレイズ": {
    title: "ダンベルサイドレイズ｜三角筋中部",
    videoUrl: "https://www.youtube.com/embed/3VcKaXpzqRo",
    mainMuscle: "三角筋中部",
    steps: [
      "両手にダンベルを持ち体側に下げる",
      "肘を軽く曲げたまま横に持ち上げる",
      "肩の高さで止めゆっくり下ろす",
    ],
  },
  "ダンベルショルダープレス": {
    title: "ダンベルショルダープレス｜三角筋中部",
    videoUrl: "https://www.youtube.com/embed/8QZ-mq6LwqE",
    mainMuscle: "三角筋中部",
    steps: [
      "ダンベルを肩の高さに構える",
      "肘を伸ばして頭上に押し上げる",
      "コントロールしながら下ろす",
    ],
  },
  "ダンベルアップライトロウ": {
    title: "ダンベルアップライトロウ｜三角筋中部・僧帽筋",
    videoUrl: "https://www.youtube.com/embed/EXF2XAlkqL0",
    mainMuscle: "三角筋中部・僧帽筋",
    steps: [
      "両手にダンベルを持ち太もも前に構える",
      "肘を外に張りながら胸の高さまで引き上げる",
      "ゆっくり下ろす",
    ],
  },
  "リアレイズ": {
    title: "リアレイズ｜三角筋後部",
    videoUrl: "https://www.youtube.com/embed/TN1hG9n3Gf4",
    mainMuscle: "三角筋後部",
    steps: [
      "前傾姿勢をとりダンベルを両手に持つ",
      "肩甲骨を寄せる意識で横に開く",
      "コントロールして下ろす",
    ],
  },
};

// テーブルに表示するデータ（必要に応じて拡張可能）
const ALL_EXERCISES: ExerciseRow[] = [
  // 肩：三角筋前部
  { name: "フロントレイズ", muscleKey: "shoulder", muscleLabel: "肩", mainMuscle: "三角筋前部", videoUrl: exerciseDetails["フロントレイズ"]?.videoUrl },
  { name: "パイクプッシュアップ", muscleKey: "shoulder", muscleLabel: "肩", mainMuscle: "三角筋前部", videoUrl: exerciseDetails["パイクプッシュアップ"]?.videoUrl },
  // 肩：三角筋中部
  { name: "ダンベルサイドレイズ", muscleKey: "shoulder", muscleLabel: "肩", mainMuscle: "三角筋中部", videoUrl: exerciseDetails["ダンベルサイドレイズ"]?.videoUrl },
  { name: "ダンベルショルダープレス", muscleKey: "shoulder", muscleLabel: "肩", mainMuscle: "三角筋中部", videoUrl: exerciseDetails["ダンベルショルダープレス"]?.videoUrl },
  { name: "ダンベルアップライトロウ", muscleKey: "shoulder", muscleLabel: "肩", mainMuscle: "三角筋中部", videoUrl: exerciseDetails["ダンベルアップライトロウ"]?.videoUrl },
  // 肩：三角筋後部
  { name: "リアレイズ", muscleKey: "shoulder", muscleLabel: "肩", mainMuscle: "三角筋後部", videoUrl: exerciseDetails["リアレイズ"]?.videoUrl },
  // サンプルとして他部位にダミーを少し用意（モーダルは「準備中」表示にする）
  { name: "ベントオーバーロウ", muscleKey: "back", muscleLabel: "背中", mainMuscle: "広背筋", videoUrl: "https://www.youtube.com/embed/pYcpY20QaE8" },
  { name: "プルアップ", muscleKey: "back", muscleLabel: "背中", mainMuscle: "広背筋", videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g" },
  { name: "アームカール", muscleKey: "arm", muscleLabel: "腕", mainMuscle: "上腕二頭筋", videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo" },
  { name: "トライセプスエクステンション", muscleKey: "arm", muscleLabel: "腕", mainMuscle: "上腕三頭筋", videoUrl: "https://www.youtube.com/embed/2-LAMcpzODU" },
  { name: "ベンチプレス", muscleKey: "chest", muscleLabel: "胸", mainMuscle: "大胸筋", videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg" },
  { name: "プッシュアップ", muscleKey: "chest", muscleLabel: "胸", mainMuscle: "大胸筋", videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4" },
  { name: "クランチ", muscleKey: "abs", muscleLabel: "腹部", mainMuscle: "腹直筋", videoUrl: "https://www.youtube.com/embed/MKmrqcoCZ-M" },
  { name: "レッグレイズ", muscleKey: "abs", muscleLabel: "腹部", mainMuscle: "下腹部", videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI" },
];
// 1ページあたりの行数
const PAGE_SIZE = 10;
// メインコンポーネント
export default function Sample18Table() {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleKey>("all");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedExerciseName, setSelectedExerciseName] = useState<string | null>(null);
  // フィルタリング
  const filtered = useMemo(() => {
    // 部位で絞り込み
    const byMuscle =
      selectedMuscle === "all"
        ? ALL_EXERCISES
        : ALL_EXERCISES.filter((e) => e.muscleKey === selectedMuscle);
    // さらに検索文字列で絞り込み
    const bySearch = search.trim()
      ? byMuscle.filter((e) =>
          e.name.toLowerCase().includes(search.trim().toLowerCase())
        )
      : byMuscle;
    return bySearch;
  }, [selectedMuscle, search]);
  // ページング
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paged = filtered.slice(start, end);
  // 部位タブ選択時の処理
  const handleSelectMuscle = (key: MuscleKey) => {
    setSelectedMuscle(key);
    setPage(1);
  };
  // モーダル制御
  const openModal = (name: string) => {
    setSelectedExerciseName(name);
  };
  const closeModal = () => setSelectedExerciseName(null);
  return (
    <main className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Muscle Traning List</h2>
        {/* 検索 + アクション */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <div className="flex w-full sm:w-auto items-center gap-2">
            <SearchIcon className="h-4 w-4" />
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full sm:w-72"
            />
          </div>
        </div>
        {/* 部位絞り込み */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted-foreground">【Select Part】</span>
          <div className="flex flex-wrap gap-2">
            {MUSCLE_TABS.map((tab) => (
              <Button
                key={tab.key}
                type="button"
                onClick={() => handleSelectMuscle(tab.key)}
                variant={selectedMuscle === tab.key ? "default" : "outline"}
                className="h-8 px-3"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* テーブル */}
      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%]">種目</TableHead>
              <TableHead className="w-[30%]">部位</TableHead>
              <TableHead className="w-[30%]">サブ部位/カテゴリー</TableHead>
              <TableHead className="w-[5%]">詳細記事</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paged.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  該当する種目がありません
                </TableCell>
              </TableRow>
            ) : (
              paged.map((row) => (
                <TableRow key={`${row.muscleKey}-${row.name}`}>
                  <TableCell className="align-top">
                    <button
                      type="button"
                      onClick={() => openModal(row.name)}
                      className="text-sky-600 hover:underline font-medium"
                    >
                      {row.name}
                    </button>
                  </TableCell>
                  <TableCell className="align-top">
                    <Badge variant="secondary" className="rounded-md">
                      {row.muscleLabel}
                    </Badge>
                  </TableCell>
                  <TableCell className="align-top">
                    {row.mainMuscle ? (
                      <Badge variant="outline" className="rounded-md">
                        {row.mainMuscle}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="align-top">
                    {row.videoUrl ? (
                      <Link
                        href={row.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sky-600 hover:underline"
                      >
                        more...
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

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
              onClick={() => setPage((p) => Math.max(1, p - 1))}
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
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* モーダル表示（指定のコンポーネントを利用） */}
      <ExerciseModal
        exercise={
          selectedExerciseName
            ? exerciseDetails[selectedExerciseName] ?? {
                // 万一詳細未定義の種目を開いた場合でもデザインが崩れないように最低限のデータを渡す
                title: `${selectedExerciseName}（準備中）`,
                videoUrl: "",
                mainMuscle: "",
                steps: ["準備中です。少々お待ちください。"],
              }
            : null
        }
        open={!!selectedExerciseName}
        onClose={closeModal}
      />
    </main>
  );
}