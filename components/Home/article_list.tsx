import { documents } from "@/lib/parts/document";
import TopickList from "@/components/parts/topic_list";

export default function ArticlList(){
  // updatedAtで新しい順に並び替え
  const docmentData = documents.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  return(
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          最新記事
        </h2>
        <p className="text-lg text-gray-600">
          運動・栄養に関する記事をお届けします
        </p>
      </div>
      {/* News Cards */}
      <TopickList documents={docmentData} num={4}/>
    </div>
  )
}