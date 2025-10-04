import { Card, CardContent } from "@/components/ui/card";
export default function TermsPage() {
return (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">利用規約</h1>
    <Card className="mb-6">
      <CardContent className="p-6 space-y-4 text-base leading-relaxed">
        <p>
          本利用規約（以下「本規約」といいます）は、本サイトをご利用いただく際の条件を定めるものです。
          ユーザーの皆様は、本規約に従って当サイトをご利用いただきます。
        </p>
        <h2 className="text-xl font-semibold mt-4">第1条（適用）</h2>
        <p>
        本規約は、ユーザーと本サイト運営者との間の利用に関わる一切の関係に適用されるものとします。
        </p>
        <h2 className="text-xl font-semibold mt-4">第2条（禁止事項）</h2>
        <p>ユーザーは、以下の行為を行ってはなりません。</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>法令または公序良俗に違反する行為</li>
          <li>当サイトの運営を妨害する行為</li>
          <li>その他、運営者が不適切と判断する行為</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">第3条（免責事項）</h2>
        <p>
          本サイトは、正確な情報を提供するよう努めますが、内容の正確性、完全性を保証するものではありません。
        </p>
        <h2 className="text-xl font-semibold mt-4">第4条（規約の変更）</h2>
        <p>
        本サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができます。
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          最終更新日: 2025年10月4日
        </p>
      </CardContent>
    </Card>
  </div>
  );
}