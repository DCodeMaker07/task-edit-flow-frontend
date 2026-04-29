"use client"
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'

export const Sidebar = () => {
  const user = useAppSelector(state => state.auth.user);
  return (
    <div className='w-[12%] bg-zinc-50 rounded-md shadow p-4'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          <div className='mt-2 mb-8'>
            <p className='text-2xl font-bold tracking-wider'>TaskFlow</p>
          </div>
          <div className='flex lg:flex-col gap-4'>
            {/* HOME */}
            <div className='flex gap-2 group transition-all duration-500 cursor-pointer hover:bg-neutral rounded-md hover:py-2 hover:pl-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-zinc-700 group-hover:text-zinc-50 transition-all"
              >
                <path
                  fill="currentColor"
                  d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
                />
              </svg>
              <p className='tracking-wider text-zinc-700 group-hover:text-zinc-50 transition-all'>
                Home
              </p>
            </div>

            {/* PROJECTS */}
            <div className='flex gap-2 group transition-all duration-500 cursor-pointer hover:bg-neutral rounded-md hover:py-2 hover:pl-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-zinc-700 group-hover:text-zinc-50 transition-all"
              >
                <path
                  fill="currentColor"
                  d="M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.825-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM2 20V4h8l2 2h10v14zm2-2V6z"
                />
              </svg>
              <p className='tracking-wider text-zinc-700 group-hover:text-zinc-50 transition-all'>
                Projects
              </p>
            </div>

            {/* TASKS */}
            <div className='flex gap-2 group transition-all duration-500 cursor-pointer hover:bg-neutral rounded-md hover:py-2 hover:pl-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-zinc-700 group-hover:text-zinc-50 transition-all"
              >
                <path
                  fill="currentColor"
                  d="M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"
                />
              </svg>
              <p className='tracking-wider text-zinc-700 group-hover:text-zinc-50 transition-all'>
                Tasks
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className='flex flex-row w-full h-full items-center gap-2 bg-zinc-200 rounded-lg p-2'>
              <Image
                src={'/img/cristiano.webp'}
                alt='user_profile'
                width={500}
                height={500}
                className='rounded-full object-cover w-11 h-11'
              />
              <div className='tracking-wider'>
                <p className='text-zinc-700 text-xs'>{user?.email || 'test@gmail.com'}</p>
                <p className='text-zinc-500 text-xs lowercase'>{user?.role || 'Developer'}</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className='flex gap-2 group transition-all ease-in-out duration-500 cursor-pointer hover:bg-neutral rounded-md hover:py-2 hover:pl-2'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="text-zinc-700 group-hover:text-zinc-50 transition-all"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
              />
            </svg>
            <p className='tracking-wider transition-all text-zinc-700 group-hover:text-zinc-50'>Logout</p>
          </div>
        </div>

      </div>
    </div>
  )
}
