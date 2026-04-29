import { Task } from "@/utils/tasks"

type Props = {
  task: Task
}
export const TaskItem = ({ task }: Props) => {
  const priorityStyles = {
    LOW: 'bg-zinc-100 text-zinc-700',
    MEDIUM: 'bg-orange-100 text-orange-700',
    HIGH: 'bg-rose-100 text-rose-600',
    CRITICAL: 'bg-red-100 text-red-700',
  };
  return (
    <div>
      <p className="text-zinc-700">{task.title}</p>
      <div className="flex flex-row justify-between">
        <p className="text-zinc-400 text-xs">Due: {task.dueDate?.toLocaleDateString()}</p>
        <p className={`lowercase text-md px-2 py-1 rounded-md ${priorityStyles[task.priority]}`}>{task.priority}</p>
      </div>
    </div>
  )
}
