import { tv } from 'tailwind-variants';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { TodaysSessions } from '../../components/ExcisePage/todays-session';

export default function ExecisePage() {
  const twStayles = tv({
    variants: {
      style:{
        section01:'relative flex flex-col items-center pt-16 sm:pt-24 pb-8',
        section02:'mx-auto max-w-4xl px-6 md:px-4 pb-16',
        section02_h2:'text-center text-lg sm:text-xl text-slate-700 mb-6',
        section02_inner:'grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center',
        section02_button:'w-[280px] sm:w-[340px] h-12 rounded-full text-sm sm:text-base',
      },
    },
  });
  return (
    <div className="relative min-h-screen">
      <section className={twStayles({style:'section01'})}>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
          トレーニング情報
        </h1>
      </section>
      {/* menu */}
      <section className={twStayles({style:'section02'})}>
        <h2 className={twStayles({style:'section02_h2'})}>MENU</h2>
        <div className={twStayles({style:'section02_inner'})}>
          <Link href="/execise/muscle_tr">
            <Button className={twStayles({style:'section02_button'})} variant="outline">筋力トレーニング</Button>
          </Link>
          <Link href="/execise/earobic_tr">
            <Button className={twStayles({style:'section02_button'})} variant="outline">有酸素トレーニング</Button>
          </Link>
          <Link href="#">
            <Button className={twStayles({style:'section02_button'})} variant="outline">トレーニングプログラム</Button>
          </Link>
          <Link href="#">
            <Button className={twStayles({style:'section02_button'})} variant="outline">インターバルトレーニング</Button>
          </Link>
          <Link href="#">
            <Button className={twStayles({style:'section02_button'})} variant="outline">Myトレーニング</Button>
          </Link>
          <Link href="#">
            <Button className={twStayles({style:'section02_button'})} variant="outline">AIトレーニング作成</Button>
          </Link>
        </div>
      </section>
      <TodaysSessions />
    </div>
  );
}