import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, BicepsFlexed, HeartIcon } from "lucide-react";
import json_hci_docment from "@/public/data/document.json";
import { HCIDocument } from "@/lib/healthcareInfo/interfaceutils";
import Link from "next/link";

const HCI_DATA : HCIDocument[] = json_hci_docment; 

export default function ArticleList() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">健康記事一覧</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        This is a list of health articles. The content is independently researched from various sources. Article details are displayed in Markdown format.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HCI_DATA.map((data, index) => (
          <Link href={`/health_info/article/article_${data.id}_detail`} key={index} className="no-underline">
            <Card className="text-left shadow-sm border border-gray-200 hover:shadow-md transition">
              <CardHeader>
                {data.category === "運動" && <BicepsFlexed className="h-6 w-6 text-black mb-2" />} 
                {data.category === "栄養" && <Fish className="h-6 w-6 text-orange-400 mb-2" />} 
                {data.category === "健康" && <HeartIcon className="h-6 w-6 text-pink-400 mb-2" />} 
                <CardTitle className="text-lg font-semibold">{data.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-wrap min-h-[2.5rem]">{data.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
