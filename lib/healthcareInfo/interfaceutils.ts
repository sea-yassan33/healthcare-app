export interface HealthcareInfoRow {
  id: number;
  category: number;
  url: string;
  title: string;
  description?: string;
  tags?: string[];
  date: string;
  created_at: string;
  updated_at: string;
};

// 汎用的なDocumentインターフェース
export interface HCIDocument {
  id: number;
  category: string;
  title: string;
  description: string;
  content: string;
  updatedAt: string;
}
// ドキュメントリスト用のPropsインターフェース
export interface HCIDocumentListProps {
  documents: Document[]; // ドキュメントの配列
  num: number;           // 表示する数などの指定
  id_flag?: boolean;     // 任意のIDフラグ
}