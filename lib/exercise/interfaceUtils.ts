// 筋力トレーニング一覧
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
export type MuscleKey = 'all'|'shoulder' | 'back' | 'arm' | 'chest' | 'abs' |'hip' |'thigh' | 'leg';

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