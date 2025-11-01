import { tv } from 'tailwind-variants';
import type { Metadata } from 'next';
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import json_hci_docment from "@/public/data/document.json";
import { HCIDocument } from "@/lib/healthcareInfo/interfaceutils";
import { Button } from '@/components/ui/button';
// propsの定義
type Props = { params: { detail: string } };
// メタデータ
export function generateMetadata({ params: { detail } }: Props): Promise<Metadata> {
  // IDからドキュメントを取得
  const id_str:string = detail.replace('article_','').replace('_detail','');
  const HCI_DATA : HCIDocument | undefined =  json_hci_docment.find((doc) => doc.id === Number(id_str));
  return Promise.resolve({
    title: `Health Hub | ${HCI_DATA?.title ?? "Health Hub | 記事詳細"}` ,
    description: `Health Hub | ${HCI_DATA?.description ?? "Health Hub | 指定された記事が見つかりませんでした。"}`,
  });
}
// コンポーネント
export default function ArticleDetail({ params: { detail } }: Props) {
  const id_str:string = detail.replace('article_','').replace('_detail','');
  const twStayles = tv({
    variants: {
      style: {
        container:
          "bg-white text-gray-800 flex flex-col justify-center items-center mb-6 px-4 sm:px-6 lg:px-8", 
        content:
          "w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white shadow-lg p-4 sm:p-6 lg:p-8 box-border", 
      },
    },
  });
    // IDからドキュメントを取得
  const HCI_DATA : HCIDocument | undefined =  json_hci_docment.find((doc) => doc.id === Number(id_str));
  // ドキュメントが存在しない場合
  if (!HCI_DATA) {
    return <p className="text-center text-gray-600">ドキュメントが見つかりませんでした。</p>;
  }
  return (
    <div className={twStayles({style:'container'})}>
      <div className={twStayles({style:'content'})}>
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-left">{HCI_DATA.title}</h1>
          <div className="text-center text-gray-600">
            <h2 className="text-lg sm:text-xl text-left">更新日: {HCI_DATA.updatedAt}</h2>
          </div>
        </header>
        <div className="prose max-w-none">
          <Markdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              a: ({ ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.children}
                </a>
              ),
            }}
          >
            {HCI_DATA.content}
          </Markdown>
        </div>
        <Link href="/health_info/article" className='float-right'>
          <Button variant="secondary" className='m-2'>一覧に戻る</Button>
        </Link>
      </div>  
    </div>
  );
}