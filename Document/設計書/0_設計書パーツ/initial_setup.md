[create-next-appで訊かれていること](https://zenn.dev/ikkik/articles/51d97ff70bd0da)

## GitHub必要なモジュールをインストール
```sh
## プロジェクト作成
cd ./[任意の格納場所]

## GitHubからclone
git clone https://github.com/sea-yassan33/next14-format.git [プロジェクト名]

## プロジェクトに移動
cd ./[プロジェクト名]

## .gitを削除
rm -rf .git

## 必要なモジュールをインストール
npm i
```

## 用意するディレクトリ
```txt
app/_components
```
## 書換えるファイル
#### app\globals.css (実施済み)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## vscodeセッティング

settings.jsonの設定
```json
{
  "tailwindCSS.experimental.classRegex": [
    ["tv\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## 追加ライブラリ(下記インストール済み)
```sh
## Tailwind Variants
npm install tailwind-variants

## ui.shadcn
## https://ui.shadcn.com/
npx shadcn@latest init -d
npx shadcn@latest add

## Headless UI
## https://headlessui.com/v1
npm install @headlessui/react

## reacticons
## https://react-icons.github.io/react-icons/
npm install react-icons

## Heroicons
## https://zenn.dev/nino_cast/books/43c539eb47caab/viewer/807f3b
## https://heroicons.com/solid
npm install @heroicons/react

## ブラウザ依存のライブラリ
## https://qiita.com/KokiSakano/items/e3a42a12f5de3c9f88ea
npm install framer-motion
```

## page開発テンプレート
```js
import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';

export default function Home() {
  const twStayles = tv({
    variants: {
      style:{
        text01:'text-cyan-400',
      },
    },
  });

  return (
    <div className={twStayles({style:'text01'})}>
      first_commit
    </div>
  );
}
```

## デザインテンプレート
- [tailwindCSS 入門](https://zenn.dev/yohei_watanabe/books/c0b573713734b9)
- [tailwind cheatSeet](https://nerdcave.com/tailwind-cheat-sheet)
- [フレームワーク](https://tailblocks.cc/)
- [デザインテンプレート](https://v0.dev/legacy?from=chat)