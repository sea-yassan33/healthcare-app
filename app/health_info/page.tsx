import {Heart} from "lucide-react";
import HealthInfoList from "../../components/HealthInfo/health_info_list";
export default function HealthInfo() {
  return (
    <main className="max-w-6xl mx-auto py-8 px-4">
      {/* ヘッダー */}
      <section className="flex items-center gap-3 mb-4">
        <div className="bg-muted rounded-full p-3">
          <Heart className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">健康情報一覧</h1>
          <p className="text-muted-foreground text-sm mt-1">
            あなたの健康をサポートする情報をお届けします
          </p>
        </div>
      </section>
      <HealthInfoList />
    </main>
  );
}