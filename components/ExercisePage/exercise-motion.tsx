"use client";
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { ExerciseDetail } from "@/lib/exercise/interfaceUtils";
import { DialogTitle } from "@radix-ui/react-dialog";
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
          <DialogTitle className="text-2xl font-bold border-l-4 border-black pl-3 mb-6">{exercise.name}</DialogTitle>
          <DialogDescription className="hidden">{exercise.name}の動画</DialogDescription>
          <div className="mb-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={exercise.videoUrl}
                title={exercise.name}
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
        </div>
      </DialogContent>
    </Dialog>
  );
}