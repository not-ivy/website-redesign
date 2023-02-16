import { ReactNode, useEffect, useState } from "react";
import { Home, Archive, Trash2 } from 'react-feather';
import { Link, useLocation } from 'wouter';

export function NavBar() {
  const [time, setTime] = useState(new Date());
  const formatter = Intl.DateTimeFormat([...navigator.languages], { timeStyle: 'short', dateStyle: 'medium' });
  const [location] = useLocation();

  useEffect(() => {
    const update = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => clearInterval(update);
  }, [])

  return (
    <div className="border p-4 rounded-lg shadow-lg flex items-center justify-between mb-8">
      <nav className="flex gap-4 items-center">
        <Item to="/">
          <Home className="m-2 w-5 h-5" />
        </Item>
        <Item to="/projects">
          <Archive className="m-2 w-5 h-5" />
        </Item>
        <Item to="/other">
          <Trash2 className="m-2 w-5 h-5" />
        </Item>
      </nav>
      <span>{!location.slice(1).length ? 'home' : location.slice(1)}</span>
      <span className="font-medium">{formatter.format(time)}</span>
    </div>
  )
}

export function Item({ className, children, to, }: { className?: string, children: ReactNode, to: string }) {
  return (
    <div className={`cursor-pointer active:shadow-sm border rounded-md shadow-md hover:shadow-zinc-400 transition-shadow ${className}`}>
      <Link to={to} >{children}</Link>
    </div>
  )
}
