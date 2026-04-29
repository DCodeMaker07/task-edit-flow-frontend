import { UpcomingTasks } from "@/components";

export default function page() {
  return (
    <div className='lg:w-[88%] flex flex-col gap-6'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        <div className='bg-zinc-50 shadow-md p-8 rounded-md'>
          <div className='flex flex-col gap-y-4'>
            <div className='flex flex-row justify-between'>
              <p className='text-zinc-700'>To Do</p>
              <p className='bg-zinc-200 rounded-full px-2'>12</p>
            </div>
            <div>
              <p className='text-3xl'>12</p>
            </div>
          </div>
        </div>

        <div className='bg-zinc-50 shadow-md p-8 rounded-md'>
          <div className='flex flex-col gap-y-4'>
            <div className='flex flex-row justify-between'>
              <p className='text-zinc-700'>In Progress</p>
              <p className='bg-blue-200 text-blue-500 rounded-full px-2'>5</p>
            </div>
            <div>
              <p className='text-3xl'>5</p>
            </div>
          </div>
        </div>

        <div className='bg-zinc-50 shadow-md p-8 rounded-md'>
          <div className='flex flex-col gap-y-4'>
            <div className='flex flex-row justify-between'>
              <p className='text-zinc-700'>In Progress</p>
              <p className='bg-yellow-200 text-yellow-500 rounded-full px-2'>3</p>
            </div>
            <div>
              <p className='text-3xl'>3</p>
            </div>
          </div>
        </div>

        <div className='bg-zinc-50 shadow-md p-8 rounded-md'>
          <div className='flex flex-col gap-y-4'>
            <div className='flex flex-row justify-between'>
              <p className='text-zinc-700'>In Progress</p>
              <p className='bg-green-200 text-green-500 rounded-full px-2'>28</p>
            </div>
            <div>
              <p className='text-3xl'>28</p>
            </div>
          </div>
        </div>
      </div>

      <UpcomingTasks />
    </div>
  )
}
