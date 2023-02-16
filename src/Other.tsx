import { Link } from 'wouter';
import FeatherIcon from "./FeatherIcon";

export default function Other() {
  return (
    <div className='flex flex-col gap-4'>
      <Card title="osu! maps" link="/maps" />
      <Card title="random music" link="/" />
    </div>
  )
}

function Card({ title, link }: { title: string, link: string }) {
  return (
    <Link to={link} className="p-4 flex justify-between items-center border rounded-md shadow-md w-full hover:shadow-zinc-400 transition-shadow active:shadow-sm">
      <span>{title}</span>
      <FeatherIcon icon="ArrowRight" />
    </Link>
  )
}

