import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";
import MarkdownParts from "@/components/parts/markdown";
import YoutubeParts from "@/components/parts/youtube";
import Link from "next/link";
import GoogleAiSearchButton from "@/components/parts/googleAiButton";
// style
const styles = [
  {
    content :"w-full sm:w-[100%] md:w-[90%] lg:w-[80%] mx-auto bg-white shadow-lg p-4 sm:p-6 lg:p-8 box-border",
    h1 :"border-b-4 border-[#415C52] pb-2 mb-4 font-bold text-3xl",
    h2 :"border-b-2 pb-1 mb-3 font-semibold text-2xl",
    p : "text-xl font-bold"
  },
];
// markdownfile読み込み
const files = ["ko00.md","ko01.md","ko02.md","ko03.md",];
const contents = files.map((file) => {
  const filePath = path.join(process.cwd(), "public", "md", "knee_oa", file);
  return fs.readFileSync(filePath, "utf-8");
});

export default function KneeOACont() {
  const abstract =[
    { title:"目次", name:"abs", md_num: 0},
    { title:"変形性膝関節症とは", name:"knee_oa", md_num: 1},
    { title:"要因について", name:"factor", md_num: 2},
    { title:"予防について", name:"prevention", md_num: 3},
    { title:"運動", name:"exercise", md_num: 4},
  ]
  return (
    <>
      <div className={cn(styles[0].content)}>
        {/* 目次 */}
        <h2 className="border-b-4 border-[#415C52] pb-2 mb-4 font-bold text-3xl">
          目次
        </h2>
        <ul className="my-5 list-disc pl-6 text-gray-700">
          {abstract.slice(1).map((abs,i)=>(
            <Link key={i} href={`#${abs.name}`}>
              <li>{abs.title}</li>
            </Link>
          ))}
        </ul>
        {/* 変形性膝関節症とは */}
        <h2 className="hidden" id={abstract[1].name}>変形性膝関節症とは</h2>
        <MarkdownParts content={contents[1]} />
        <YoutubeParts name="変形性膝関節症について" chanel="ふれあいグループ" url="Ps5-vOxcJ9o" />
        {/* 要因について */}
        <h2 className="hidden" id={abstract[2].name}>要因について</h2>
        <MarkdownParts content={contents[2]} />
        <GoogleAiSearchButton search={"変形性膝関節症の要因について"}/>
        {/* 予防について */}
        <h2 className="hidden" id={abstract[3].name}>予防について</h2>
        <MarkdownParts content={contents[3]} />
        <GoogleAiSearchButton search={"変形性膝関節症の予防方法について"}/>
        {/* 運動 */}
        <h2 className={cn(styles[0].h2)} id={abstract[4].name}>運動</h2>
        <p className={cn(styles[0].p,)}>①大腿四頭筋セッティング(目安：5秒間×10回×3-5セット)</p>
        <YoutubeParts name="大腿四頭筋セッティング" chanel="川田整形外科リハビリ" url="6WSLng_ktXo" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p,)}>②内転筋強化(目安：10-15回×3-5セット)</p>
        <YoutubeParts name="内転筋強化" chanel="ひざ関節症クリニック" url="yYES6fNaiAI" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p,)}>③外転筋強化(目安：10-15回×3-5セット)</p>
        <YoutubeParts name="外転筋強化" chanel="前田のまいにちセルフケア !  by GronG" url="Dbw9dYIuJWg" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p,)}>④ストレッチ(目安：10-15回×3-5セット)</p>
        <YoutubeParts name="ストレッチ" chanel="【ひざの痛み専門】セルフエクササイズ教室" url="kM_M8TeN1qY" />
      </div>
    </>
  )
}