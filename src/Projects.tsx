import sparrow from './assets/sparrow.webp';
import typescript from './assets/typescript.svg';
import melon from './assets/melon.webp';
import isotope from './assets/isotope.webp';
import { ReactNode } from 'react';
import FeatherIcon from './FeatherIcon';

export default function Projects() {
  return (
    <>
      <Project
        img={sparrow}
        title="Project Sparrow"
        subtitle="An open source social media."
        started={new Date(1665290791000)}
        url="https://sparrowsocial.com"
      >
        <IconLabel label='Node.js'><FeatherIcon icon='Database' /></IconLabel>
        <IconLabel label='Remix'><FeatherIcon icon='Globe' /></IconLabel>
        <IconLabel label='TailwindCSS'><FeatherIcon icon='Feather' /></IconLabel>
        <IconLabel label='Typescript'><img alt="typescript" src={typescript} className="w-5 h-5 select-none" /></IconLabel>
      </Project>
      <hr className='my-6' />
      <Project
        img={melon}
        title="Melon"
        subtitle="A sweet link shortener."
        started={new Date(1667113200000)}
        finished={new Date(1668153600000)}
        url="https://m.not-ivy.dev"
      >
        <IconLabel label='Deno'><FeatherIcon icon='Database' /></IconLabel>
        <IconLabel label='Fresh'><FeatherIcon icon='Globe' /></IconLabel>
        <IconLabel label='Twind'><FeatherIcon icon='Feather' /></IconLabel>
        <IconLabel label='Typescript'><img alt="typescript" src={typescript} className="w-5 h-5 select-none" /></IconLabel>
      </Project>
      <hr className='my-6' />
      <Project
        img={isotope}
        title="Isotope"
        subtitle='Built on deuterium, a secure and decentralized chatting protocol.'
        started={new Date(167143680000)}
        finished={new Date(167213424900)}
        url="https://github.com/isotope-app/hydrogen"
      >
        <IconLabel label='Node.js'><FeatherIcon icon='Database' /></IconLabel>
        <IconLabel label='React + Vite'><FeatherIcon icon='Globe' /></IconLabel>
        <IconLabel label='WindiCSS'><FeatherIcon icon='Feather' /></IconLabel>
        <IconLabel label='Typescript'><img alt="typescript" src={typescript} className="w-5 h-5 select-none" /></IconLabel>
      </Project>
    </>
  )
}

function IconLabel({ children, label }: { children: ReactNode, label: string }) {
  return (
    <span className='flex items-center gap-2'>{children}<span>{label}</span></span>
  )
}

function Project({ img, title, subtitle, started, finished, url, children }: { img: string, title: string, subtitle: string, started: Date, url: string; finished?: Date, children: ReactNode }) {
  const formatter = Intl.DateTimeFormat([...navigator.languages], { dateStyle: 'medium' });
  return (
    <div className='flex items-center flex-col'>
      <a href={url} className="rounded-md w-4/5 mx-auto mb-4 shadow-lg shadow-zinc-800/80 hover:shadow-zinc-900 active:shadow-md transition-shadow" >
        <img src={img} alt={title} className="rounded-md" />
      </a>
      <h3 className='font-medium text-xl'>{title}</h3>
      <h4 className='font-medium mb-1'>{subtitle}</h4>
      <div className='flex gap-2 text-sm mb-3'>
        <span>Started at {formatter.format(started)}</span>
        <span>{finished ? `Finished at ${formatter.format(finished)}` : 'Not completed yet'}</span>
      </div>
      <div className='flex gap-4 w-full justify-center items-center'>
        {children}
      </div>
    </div>
  )
}
