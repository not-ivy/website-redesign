import FeatherIcon from "./FeatherIcon";

export default function Maps() {
  return (
    <ul className="flex flex-col gap-4">
      <Card name="SIHanatsuka - Symmetry" stars="8.77" video="https://www.youtube.com/watch?v=8-BmUfNB9js" download="/SIHanatsuka_-_Symmetry_sourtaste000.osz" />
    </ul>
  )
}

function Card({ name, stars, video, download }: { name: string, stars: string, video?: string, download?: string }) {
  return (
    <li className="p-4 rounded-md flex items-center justify-between border shadow-md">
      <div className="flex gap-4 items-center">
        <span>{name}</span>
        <span className="flex gap-2 items-center text-sm"><FeatherIcon icon="Star" />{stars}</span>
      </div>
      <div className="flex items-center gap-4">
        <a href={video} className={video || 'text-zinc-200'}><FeatherIcon icon="Play" /></a>
        <a href={download} className={download || 'text-zinc-200'}><FeatherIcon icon="Download" /></a>
      </div>
    </li>
  )
}
