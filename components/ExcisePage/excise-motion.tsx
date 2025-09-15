"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

type ExerciseDetail = {
  title: string;
  videoUrl: string;
  mainMuscle: string;
  steps: string[];
};

type Props = {
  exercise: ExerciseDetail | null;
  open: boolean;
  onClose: () => void;
};

export function ExerciseModal({ exercise, open, onClose }: Props) {
  if (!exercise) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full p-8 bg-white rounded-xl shadow-xl">
        <div>
          <h2 className="text-2xl font-bold border-l-4 border-black pl-3 mb-6">{exercise.title}</h2>
          <div className="mb-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={exercise.videoUrl}
                title={exercise.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-lg">アプローチできる筋肉部位</div>
            <div className="mt-2">{exercise.mainMuscle}</div>
          </div>
          <div>
            <div className="font-bold text-lg">やり方手順</div>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              {exercise.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}