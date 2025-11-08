import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";
import MarkdownParts from "@/components/parts/markdown";
import YoutubeParts from "@/components/parts/youtube";
import Link from "next/link";
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
const files = ["ff00.md", "ff01.md", "ff02.md","ff03.md", "ff04.md"];
const contents = files.map((file) => {
  const filePath = path.join(process.cwd(), "public", "md", "femur_fracture", file);
  return fs.readFileSync(filePath, "utf-8");
});

export default function FemurFractureCont() {
  const abstract =[
    { title:"目次", name:"abs", md_num: 0},
    { title:"大腿骨骨折とは", name:"why", md_num: 1},
    { title:"要因について", name:"factor", md_num: 2},
    { title:"術後の筋力低下の影響", name:"muscle", md_num: 3},
    { title:"予防について", name:"prevention", md_num: 4},
    { title:"運動方法", name:"exercise", md_num: 99},
  ]
  return (
    <>
      <div className={cn(styles[0].content)}>
        {/* 目次・大腿骨骨折とは */}
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
        <h2 className="hidden" id={abstract[1].name}>大腿骨骨折とは</h2>
        <MarkdownParts content={contents[1]} />
        {/* 脱臼肢位 */}
        <YoutubeParts name="脱臼肢位" chanel="みやけチャンネル" url="fzl1wZNyaC0" />
        {/* 要因について */}
        <h2 className="hidden" id={abstract[2].name}>要因について</h2>
        <MarkdownParts content={contents[2]} />
        {/* 術後の筋力低下の影響 */}
        <h2 className="hidden" id={abstract[3].name}>術後の筋力低下の影響</h2>
        <MarkdownParts content={contents[3]} />
        {/* 予防について */}
        <h2 className="hidden" id={abstract[4].name}>予防について</h2>
        <MarkdownParts content={contents[4]} />
        {/* 予防運動 */}
        <h2 className="hidden" id={abstract[5].name}>運動方法</h2>
        <div className={cn(styles[0].h2, "mt-2")}>
          運動方法
        </div>
        <p className={cn(styles[0].p,)}>①大腿四頭筋セッティング(目安：5秒間×10回×3-5セット)</p>
        <YoutubeParts name="大腿四頭筋セッティング" chanel="川田整形外科リハビリ" url="6WSLng_ktXo" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>②ヒップリフト(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="ヒップリフト" chanel="MELOS" url="FdEmJ3wPC_Y" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>③股関節外転運動(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="股関節外転運動" chanel="医療生協さいたま生活協同組合" url="ljBgpReYw1E" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>④股関節屈曲運動(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="股関節屈曲運動" chanel="株式会社リハサク" url="bPIa4lApz7k" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>⑤膝関節伸展運動(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="膝関節伸展運動" chanel="膝関節症クリニック" url="c2P08OZPmik" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>⑥スクワット(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="スクワット" chanel="膝関節症クリニック" url="dl2tkDNGB0k" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>⑦ヒールレイズ(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="ヒールレイズ" chanel="株式会社リハサク" url="IlKR4r9ZMpc" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p)}>⑧立位股関節外転運動(目安：10-20回×2-3セット)</p>
        <YoutubeParts name="立位股関節外転運動" chanel="医療生協さいたま生活協同組合" url="x1aS2IYAxho" />
      </div>
    </>
  )
}