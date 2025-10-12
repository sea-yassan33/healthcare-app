import Link from "next/link";
import healthinfo from "@/public/data/healthinfo.json";
import { HealthcareInfoRow } from "@/lib/healthcareInfo/interfaceutils";
import { tv } from 'tailwind-variants';

// トピックデータ
const NEWS_TOPICS: HealthcareInfoRow[] = healthinfo
                                          .filter(info => info.category === 1)
                                          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                                          .slice(0,5); 
// コンポーネント
export default function HomeNewsTopic(){
  const twStayles = tv({
    variants: {
      style:{
        top01:'relative py-12 px-4 bg-gradient-to-br from-blue-100 to-white min-h-[500px]',
        top02:'relative max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-lg px-8 py-10',
        news_list:'flex flex-col md:flex-row md:items-center border-b border-[#E5E5E5] py-5 gap-2 md:gap-0',
        news_date:'flex flex-row md:flex-col items-start md:items-start w-32 shrink-0 md:text-right mb-1',
        news_title:'flex-1 text-base md:text-lg text-black font-medium hover:underline',
        news_icon:'ml-3 text-[#2176AE] font-bold text-2xl hover:text-red-300',
        link_btn:'flex-1 flex items-center justify-center rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition',
      },
    },
  });
  return(
    <>
      <section className={twStayles({style:'top01'})} id="news_topic">
        <div className={twStayles({style:'top02'})}>
          {/* タイトル行 */}
          <div className="flex flex-col md:flex-row md:items-end gap-3 mb-8">
            <h2 className="text-4xl font-bold text-[#2176AE] leading-snug mr-4">
              NEWS
              <span className="text-black text-2xl align-middle ml-3 font-medium">Topics</span>
              <span className="text-black text-sm align-middle ml-3 font-medium"> ※外部サイトへ遷移※</span>
            </h2>
          </div>
          {/* ニュースリスト */}
          <ul>
            {NEWS_TOPICS.map((item, i) => (
              <li key={item.title + i} className={twStayles({style:'news_list'})}>
                {/* 日付 */}
                <div className={twStayles({style:'news_date'})}>
                  <span className="block text-[#2176AE] font-semibold md:text-base text-sm">
                    {item.date.slice(0, 4)}
                  </span>
                  <span className="block text-black font-bold md:text-lg text-base ml-2 md:ml-0">
                    {item.date.slice(5, 10).replace("-", "／")}
                  </span>
                </div>
                {/* タイトル */}
                <Link
                  href={item.url} target="_blank" rel="noopener noreferrer" className={twStayles({style:'news_title'})}>
                  {item.title}
                </Link>
                {/* アイコン（→） */}
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className={twStayles({style:'news_icon'})}>
                  &rarr;
                </Link>
              </li>
            ))}
          </ul>
          {/* 下部ボタン */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link href="/health_info#healthinfo_list" className={twStayles({style:'link_btn'})}>
              健康情報一覧はこちら&nbsp;<span className="ml-1 text-lg">&rarr;</span>
            </Link>
            <Link href="#news_topic" className={twStayles({style:'link_btn'})}>
              記事一覧はこちら&nbsp;<span className="ml-1 text-lg">&rarr;</span>
            </Link>
            <Link href="#news_topic" className={twStayles({style:'link_btn'})}>
              データ一覧はこちら&nbsp;<span className="ml-1 text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}