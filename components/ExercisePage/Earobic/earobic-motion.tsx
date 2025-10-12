"use client";
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { EarobicDetail } from "@/lib/exercise/interfaceUtils";
import { DialogTitle } from "@radix-ui/react-dialog";
type Props = {
  earobic: EarobicDetail | null;
  open: boolean;
  onClose: () => void;
};
export function EarobicModal({ earobic, open, onClose }: Props) {
  if (!earobic) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full p-8 bg-white rounded-xl shadow-xl">
        <div>
          <DialogTitle className="text-2xl font-bold border-l-4 border-black pl-3 mb-6">{earobic.name}</DialogTitle>
          <DialogDescription className="hidden">{earobic.name}の動画</DialogDescription>
          <div className="mb-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={earobic.videoUrl}
                title={earobic.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-lg">{earobic.eventLabel}</div>
            <div className="mt-2">{earobic.overveiew}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}