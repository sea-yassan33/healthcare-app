import { Card, CardContent } from "@/components/ui/card";
export default function PrivacyPage() {
return (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">プライバシーポリシー</h1>
    <Card className="mb-6">
      <CardContent className="p-6 space-y-4 text-base leading-relaxed">
        <p>
          本プライバシーポリシー（以下「本ポリシー」といいます）は、当サイトにおけるユーザーの個人情報の取り扱いについて定めるものです。
        </p>
        <h2 className="text-xl font-semibold mt-4">第1条（個人情報の収集）</h2>
        <p>
          本サイトは、ユーザーが利用登録をする際に氏名、メールアドレス等の個人情報をお尋ねする場合があります。
        </p>
        <h2 className="text-xl font-semibold mt-4">第2条（個人情報の利用目的）</h2>
        <p>本サイトは、収集した個人情報を以下の目的で利用いたします。</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>サービス提供および運営のため</li>
          <li>ユーザーからのお問い合わせに対応するため</li>
          <li>サービス改善や新サービス開発のため</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">第3条（個人情報の第三者提供）</h2>
        <p>
          本サイトは、法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
        </p>
        <h2 className="text-xl font-semibold mt-4">第4条（免責事項）</h2>
        <p>
          当サイトは、以下の場合において生じた損害について一切の責任を負いません。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>第三者による不正アクセス、ウイルス感染など、運営者が合理的な安全対策を講じてもなお発生した場合</li>
          <li>ユーザーご自身の管理不足（パスワードの漏洩、端末の紛失など）によって個人情報が漏えいした場合</li>
          <li>当サイトからリンクされた外部サイトにおける個人情報の管理・利用に関して発生した場合</li>
          <li>法令に基づき公的機関から情報開示を求められた場合</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4">第5条（ポリシーの変更）</h2>
        <p>
          本サイトは、必要に応じて本ポリシーを変更することができます。変更後のポリシーは、当サイトに掲載された時点から効力を生じるものとします。
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          最終更新日: 2025年10月4日
        </p>
      </CardContent>
    </Card>
  </div>
);
}