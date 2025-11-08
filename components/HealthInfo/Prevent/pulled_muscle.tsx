import fs from "fs";
import path from "path";
import { cn } from "@/lib/utils";
import MarkdownParts from "@/components/parts/markdown";
import Link from "next/link";
import GoogleAiSearchButton from "@/components/parts/googleAiButton";
import YoutubeParts from "@/components/parts/youtube";
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
const files = ["pm00.md","pm01.md","pm02.md",];
const contents = files.map((file) => {
  const filePath = path.join(process.cwd(), "public", "md", "pulled_muscle", file);
  return fs.readFileSync(filePath, "utf-8");
});

export default function PulledMuscleCont() {
  const abstract =[
    { title:"目次", name:"abs", md_num: 0},
    { title:"肉離れとは", name:"pulled_muscle", md_num: 1},
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
        {/* 肉離れとは */}
        <h2 className="hidden" id={abstract[1].name}>肉離れとは</h2>
        <MarkdownParts content={contents[1]} />
        {/* 要因について */}
        <h2 className="hidden" id={abstract[2].name}>要因について</h2>
        <MarkdownParts content={contents[2]} />
        <GoogleAiSearchButton search={"肉離れの要因について"}/>
        {/* 予防について */}
        <h2 className="hidden" id={abstract[3].name}>予防について</h2>
        <MarkdownParts content={contents[3]} />
        {/* 運動について */}
        <h2 className="hidden" id={abstract[3].name}>運動について</h2>
        <p className={cn(styles[0].p,)}>①予防エクササイズ</p>
        <YoutubeParts name="予防エクササイズ" chanel="CityOfYokohama" url="s2KJYSjaFHQ" />
        <hr className="my-2"/>
        <p className={cn(styles[0].p,)}>②ハムストリングス予防、チューブトレーニング</p>
        <YoutubeParts name="ハムストリングス" chanel="VRTX BAND チューブトレーニングスタジオ by GronG" url="XnCGiTNdvlY" />
      </div>
    </>
  )
}