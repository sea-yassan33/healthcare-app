// 筋力トレーニング一覧
export type MuscleKey = 'all'|'shoulder' | 'back' | 'arm' | 'chest' | 'abs' |'hip' |'thigh' | 'leg';
export interface ExerciseRow {
  id: number;
  name: string;
  muscleKey: string;
  muscleLabel: string;
  mainMuscle?: string;
  videoUrl?: string;
  delet_flag: number;
  created_at: string;
  updated_at: string;
};
export interface ExerciseDetail {
  id: number;
  name: string;
  muscleKey: string;
  muscleLabel: string;
  mainMuscle?: string;
  videoUrl?: string;
  delet_flag: number;
  created_at: string;
  updated_at: string;
};

// 有酸素運動一覧
export type EarobicKey = 'all'|'walking' | 'running'| 'circit'| 'dance'| 'yoga'| 'stretch'| 'other';
export interface EarobicRow {
  id: number;
  name: string;
  eventKey: string;
  eventLabel: string;
  exerciseTime?: string;
  overveiew?: string;
  videoUrl?: string;
  thumbnailUrl: string;
  delet_flag: number;
  created_at: string;
  updated_at: string;
}
export interface EarobicDetail {
  id: number;
  name: string;
  eventKey: string;
  eventLabel: string;
  exerciseTime?: string;
  overveiew?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  delet_flag: number;
  created_at: string;
  updated_at: string;
}