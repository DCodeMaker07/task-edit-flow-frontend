"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components'

export default function LayoutPage({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <div className='bg-zinc-100 lg:h-dvh w-full flex flex-col lg:flex-row gap-4 p-4'>
      <Sidebar />
      {children}
    </div>
  )
}
