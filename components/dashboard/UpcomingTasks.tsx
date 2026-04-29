import { mockTasks } from "@/utils/tasks"
import { TaskItem } from "./TaskItem"
import { Task } from "@/redux/services/interfaces/tasks/Task-response"
type Props = {
  tasks: Task[]
}
export const UpcomingTasks = ({ tasks }: Props) => {
  return (
    <div className="w-full h-full bg-zinc-50 rounded-md shadow-md p-4 overflow-y-auto">
      <p className='text-xl text-zinc-800 font-semibold mb-6'>Upcoming Tasks</p>
      <div className="flex flex-col gap-4">
        {
          tasks.map((item) => <TaskItem key={item.id} task={item} />)
        }
      </div>
    </div>
  )
}