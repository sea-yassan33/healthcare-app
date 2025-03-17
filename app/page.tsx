import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';

export default function Home() {
  const twStayles = tv({
    variants: {
      style:{
        text01:'text-cyan-400',
      },
    },
  });

  return (
    <div className={twStayles({style:'text01'})}>
      first_commit
    </div>
  );
}
