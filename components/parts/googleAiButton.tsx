import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { tv } from 'tailwind-variants';
// propsの定義
type Props = { search: string};
// style
const twStayles = tv({
  variants: {
    style:{
      link_btn:'flex items-center justify-center px-4 my-2 w-fit rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa]',
    },
  },
});

export default function GoogleAiSearchButton({ search }: Props){
  const encoded = encodeURIComponent(search);
  const url = `https://www.google.com/ai?q=${encoded}`;
  return(
    <>
      <Link href={url} className={twStayles({style:'link_btn'})} target="_blank"><FcGoogle/>Google AIに詳しく聞く</Link>
    </>
  )
}