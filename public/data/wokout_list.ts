import workout_list from './workout_list.json';

export interface Workout {
  id: number;
  title: string;
  videoId: string;
  updatedAt: string;
}

export const workouts: Workout[] = workout_list;