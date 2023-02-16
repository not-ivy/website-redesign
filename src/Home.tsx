import { User } from 'react-feather';

export default function Home() {
  return (
    <>
      <div className='mb-4 w-full flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-medium mb-2">Hi, my name is ivy.</h1>
        <h3 className="text-zinc-500 flex items-center"><User className='w-4 h-4 mr-2' />they/them</h3>
      </div>
    </>
  )
}
