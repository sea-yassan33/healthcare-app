"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// データの型定義
interface TrainingData {
  minute: number;
  speed: number;
}
// コンポーネント
export default function ItProgram01() {
  const [data, setData] = useState<TrainingData[]>([]);
  useEffect(() => {
    fetch("/data/tr/interval_tr.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // 速度の最小・最大を計算して軸を自動調整
  const minSpeed = Math.min(...data.map((d) => d.speed || 0));
  const maxSpeed = Math.max(...data.map((d) => d.speed || 0));

  return (
    <Card className="w-full max-w-3xl mx-auto p-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">
          インターバルTR - NO.1
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <XAxis
                dataKey="minute"
                type="number"
                domain={[0, "dataMax"]}
                tickCount={10}
                label={{ value: "時間 (分)", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                label={{ value: "速度 (km/h)", angle: -90, position: "insideLeft" }}
                domain={[minSpeed - 0.3, maxSpeed + 0.3]} //軸をデータにフィットさせる
              />
              <Tooltip />
              <Legend />
              <Line
                type="stepAfter"
                dataKey="speed"
                stroke="#666"
                strokeWidth={2}
                name="速度"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
