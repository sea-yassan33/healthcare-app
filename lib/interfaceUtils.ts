// 汎用的なDocumentインターフェース
export interface Document {
  id: number;
  category: string;
  title: string;
  description: string;
  content: string;
  updatedAt: string;
}

// ドキュメントリスト用のPropsインターフェース
export interface DocumentListProps {
  documents: Document[]; // ドキュメントの配列
  num: number;           // 表示する数などの指定
  id_flag?: boolean;     // 任意のIDフラグ
}

// 汎用的なWorkoutインターフェース
export interface Workout {
  id: number;
  title: string;
  videoId: string;
  updatedAt: string;
}

// トレーニングリスト用のPropsインターフェース  
export interface WorkoutListProps {
  workouts: Workout[]; // トレーニングの配列
  num: number;         // 表示する数などの指定
}