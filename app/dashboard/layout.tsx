import { Sidebar } from '@/components'
import React from 'react'

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='bg-zinc-100 lg:h-dvh w-full flex flex-col lg:flex-row gap-4 p-4'>
      <Sidebar />
      {children}
    </div>
  )
}
