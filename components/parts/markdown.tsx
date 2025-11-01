import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from "rehype-highlight";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// propsの定義
type Props = { content: string };
export default function MarkdownParts({ content }: Props) {
  return (
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
          // h1時のスタイル
          h1: ({ ...props }) => (
            <h1
              className="border-b-4 border-[#415C52] pb-2 mb-4 font-bold text-3xl"
              {...props}
            >
              {props.children}
            </h1>
          ),
          // h2時のスタイル
          h2: ({ ...props }) => (
            <h2
              className="border-b-2 pb-1 mb-3 font-semibold text-2xl"
              {...props}
            >
              {props.children}
            </h2>
          ),
          // テーブル
          table: ({ children }) => (
            <Table className="w-full border border-gray-300 my-6">
              {children}
            </Table>
          ),
          thead: ({ children }) => <TableHeader>{children}</TableHeader>,
          tbody: ({ children }) => <TableBody>{children}</TableBody>,
          tr: ({ children }) => <TableRow>{children}</TableRow>,
          th: ({ children }) => (
            <TableHead className="font-semibold bg-gray-50">{children}</TableHead>
          ),
          td: ({ children }) => <TableCell>{children}</TableCell>,
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}