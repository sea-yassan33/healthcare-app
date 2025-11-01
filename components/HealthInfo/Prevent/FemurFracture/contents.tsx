import fs from "fs";
import path from "path";
import MarkdownParts from "@/components/parts/markdown";
import { tv } from 'tailwind-variants';
import YoutubeParts from "@/components/parts/youtube";
const twStayles = tv({
  variants: {
    style: {
      content:"w-full sm:w-[100%] md:w-[90%] lg:w-[80%] mx-auto bg-white shadow-lg p-4 sm:p-6 lg:p-8 box-border",
      h1:"border-b-4 border-[#415C52] pb-2 mb-4 font-bold text-3xl",
      h2:"border-b-2 pb-1 mb-3 font-semibold text-2xl",
    },
  },
});
// markdownfile読み込み
const content01 = fs.readFileSync(path.join(process.cwd(), "public", "md", "femur_fracture", "ff01.md"), "utf-8");
const content02 = fs.readFileSync(path.join(process.cwd(), "public", "md", "femur_fracture", "ff02.md"), "utf-8");
const content03 = fs.readFileSync(path.join(process.cwd(), "public", "md", "femur_fracture", "ff03.md"), "utf-8");
const content04 = fs.readFileSync(path.join(process.cwd(), "public", "md", "femur_fracture", "ff04.md"), "utf-8");

export default function FemurFractureCont() {
  return (
    <>
      <div className={twStayles({ style: 'content' })}>
        {/* 目次・大腿骨骨折とは */}
        <MarkdownParts content={content01} />
        {/* 脱臼肢位 */}
        <YoutubeParts name="脱臼肢位" chanel="みやけチャンネル" url="fzl1wZNyaC0" />
        {/* 要因について */}
        <MarkdownParts content={content02} />
        {/* 術後の筋力低下の影響 */}
        <MarkdownParts content={content03} />
        {/* 予防について */}
        <MarkdownParts content={content04} />
        {/* 予防運動 */}
        <div className={twStayles({ style: 'h2' })}>
          運動方法
        </div>
      </div>
    </>
  )
}