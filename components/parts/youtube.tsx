// propsの定義
type Props = { name: string, url: string, chanel:string };
export default function YoutubeParts({ name, url, chanel }: Props) {
  const youtubeDomain = "https://www.youtube-nocookie.com/embed/"
  const youtubeUrl = `${youtubeDomain}${url}`
  return (
    <>
      <div className="font-bold text-lg">
        【YouTube】＠{chanel}
      </div>
      <div className="w-[50%] h-[50%] aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={youtubeUrl}
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </>
  );
}