import ArticlList from "@/components/Home/article_list";
import HomeNewDataList from "@/components/Home/new_data";

export default function NewsSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      {/* 健康情報一覧 */}
      <ArticlList />
      <hr className="mt-3 mb-3"/>
      {/* 最新データ一覧 */}
      <HomeNewDataList />
    </section>
  );
}