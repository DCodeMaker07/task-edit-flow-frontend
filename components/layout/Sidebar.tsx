"use client"
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Link from 'next/link';
import { clearUser } from '@/redux/slices/authSlice';

const menuItems = [
  {
    label: 'Home',
    path: '/dashboard',
    icon: (
      <path d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z" />
    ),
  },
  {
    label: 'Projects',
    path: '/dashboard/projects',
    icon: (
      <path d="M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.825-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM2 20V4h8l2 2h10v14zm2-2V6z" />
    ),
  },
  {
    label: 'Users',
    path: '/dashboard/users',
    icon: (
      <path d="M12.3 12.22A4.92 4.92 0 0 0 14 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 1 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28M9 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9.74.32A5 5 0 0 0 15 3.5a1 1 0 0 0 0 2a3 3 0 0 1 3 3a3 3 0 0 1-1.5 2.59a1 1 0 0 0-.5.84a1 1 0 0 0 .45.86l.39.26l.13.07a7 7 0 0 1 4 6.38a1 1 0 0 0 2 0a9 9 0 0 0-4.23-7.68"></path>
    ),
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const user = useAppSelector(state => state.auth.user);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    router.push("/auth/login");
  };

  return (
    <div className='w-full lg:w-[12%] h-auto lg:h-full bg-zinc-50 rounded-md shadow p-4 overflow-x-auto lg:overflow-visible'>

      {/* CONTENEDOR PRINCIPAL */}
      <div className='flex flex-row lg:flex-col justify-between h-auto lg:h-full whitespace-nowrap'>

        {/* IZQUIERDA */}
        <div className="shrink-0">
          <div className='mt-2 mb-8'>
            <p className='text-2xl font-bold tracking-wider'>TaskFlow</p>
          </div>

          <div className="flex lg:flex-col gap-4 flex-nowrap">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 px-3 py-2 group cursor-pointer rounded-md transition-all duration-300 ${isActive
                    ? 'bg-neutral text-zinc-50'
                    : 'text-zinc-700 hover:bg-neutral hover:text-zinc-50'
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className={`transition-all ${isActive
                      ? 'text-zinc-50'
                      : 'text-zinc-700 group-hover:text-zinc-50'
                      }`}
                  >
                    <g fill="currentColor">{item.icon}</g>
                  </svg>

                  <p
                    className={`tracking-wider transition-all ${isActive
                      ? 'text-zinc-50'
                      : 'text-zinc-700 group-hover:text-zinc-50'
                      }`}
                  >
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* DERECHA */}
        <div className="shrink-0">
          <div>
            <div className='flex flex-row w-full h-full items-center gap-2 bg-zinc-200 rounded-lg p-2 overflow-hidden'>
              <Image
                src={'/img/cristiano.webp'}
                alt='user_profile'
                width={500}
                height={500}
                className='rounded-full object-cover w-11 h-11'
              />
              <div className='tracking-wider'>
                <p className='text-zinc-700 text-xs'>{user?.email || ''}</p>
                <p className='text-zinc-500 text-xs lowercase'>{user?.role || ''}</p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className='flex gap-2 group transition-all ease-in-out duration-500 cursor-pointer hover:bg-neutral rounded-md hover:py-2 hover:pl-2' onClick={handleLogout}>
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
            <p className='tracking-wider transition-all text-zinc-700 group-hover:text-zinc-50'>
              Logout
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}