import * as icons from 'react-feather';

export default function FeatherIcon({ icon, className }: { icon: keyof typeof icons, className?: string }) {
  const Icon = icons[icon];
  return (
    <Icon className={`${className} w-5 h-5`} />
  )
}
