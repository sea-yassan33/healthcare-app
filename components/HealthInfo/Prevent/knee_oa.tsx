// import fs from "fs";
// import path from "path";
import { cn } from "@/lib/utils";
// import MarkdownParts from "@/components/parts/markdown";
// import YoutubeParts from "@/components/parts/youtube";
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
// const files = ["ko00.md",];
// const contents = files.map((file) => {
//   const filePath = path.join(process.cwd(), "public", "md", "knee_oa", file);
//   return fs.readFileSync(filePath, "utf-8");
// });

export default function KneeOACont() {
  const abstract =[
    { title:"目次", name:"abs", md_num: 0},
    { title:"変形性膝関節症とは", name:"knee_oa", md_num: 1},
  ]
  return (
    <>
      <div className={cn(styles[0].content)}>
        {/* 目次 */}
        <h1 className="border-b-4 border-[#415C52] pb-2 mb-4 font-bold text-3xl">
          目次
        </h1>
        <ul className="my-5 list-disc pl-6 text-gray-700">
          {abstract.slice(1).map((abs,i)=>(
            <Link key={i} href={`#${abs.name}`}>
              <li>{abs.title}</li>
            </Link>
          ))}
        </ul>
        <h2 className="hidden" id={abstract[1].name}>変形性膝関節症とは</h2>
      </div>
    </>
  )
}