import { mockTasks } from "@/utils/tasks"
import { TaskItem } from "./TaskItem"

export const UpcomingTasks = () => {
  return (
    <div className="w-full h-full bg-zinc-50 rounded-md shadow-md p-4">
      <p className='text-xl text-zinc-800 font-semibold mb-6'>Upcoming Tasks</p>
      <div className="flex flex-col gap-4">
        {
          mockTasks.map((item) => <TaskItem key={item.id} task={item} />)
        }
      </div>
    </div>
  )
}