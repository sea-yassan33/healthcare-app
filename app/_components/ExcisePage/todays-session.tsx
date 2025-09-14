import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Session = {
  title: string;
  imageSrc: string;
  href?: string;
};
const sessions: Session[] = [
  {
    title: "ランニングプログラム",
    imageSrc: "/img/exercise_top/02.png",
  },
  {
    title: "体幹強化プログラム",
    imageSrc: "/img/exercise_top/03.png",
  },
  {
    title: "エアロビックプログラム",
    imageSrc: "/img/exercise_top/01.png",
  },
];

export function TodaysSessions() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-4 pb-20">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide mb-8">
        本日のセッション
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 place-items-center">
        {sessions.map((s) => (
          <article key={s.title} className="flex flex-col items-center text-center">
            <div className="relative h-44 w-44 rounded-full overflow-hidden ring-2 ring-pink-300 bg-slate-200">
              <Image
                src={s.imageSrc}
                alt={s.title}
                fill
                sizes="176px"
                className="object-cover"
                priority={false}
              />
            </div>
            <p className="mt-5 text-sm sm:text-base font-medium tracking-wide">
              {s.title}
            </p>
            <div className="mt-2 h-px w-56 bg-slate-300" />
            <Button
              variant="pink"
              className="mt-3 w-56 h-10 rounded-full text-sm"
              {...(s.href ? { asChild: true } : {})}
            >
              {s.href ? <Link href={s.href}>詳細</Link> : "詳細"}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}