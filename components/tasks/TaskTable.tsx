"use client"
import { Task } from '@/redux/services/interfaces/tasks/Task-response';
import { useDeleteTaskMutation } from '@/redux/services/task-api';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';
import { format } from 'date-fns';

type Props = {
  tasks: Task[],
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null | undefined>>
}

export const TaskTable = ({ tasks, setSelectedTask }: Props) => {

  const [deleteTask] = useDeleteTaskMutation();
  const handleDelete = async (taskId: string) => {
    await deleteTask(taskId);
  }

    const handleEdit = async (task: Task) => {
        setSelectedTask(task);
        const modal = document.getElementById('my_task_form_modal') as HTMLDialogElement | null;
        modal?.showModal();
    }

  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'projectId',
      header: 'Project',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.original.status;

        const styles = {
          TODO: 'bg-zinc-200 text-zinc-700',
          IN_PROGRESS: 'bg-blue-100 text-blue-700',
          IN_REVIEW: 'bg-yellow-100 text-yellow-700',
          DONE: 'bg-green-100 text-green-700',
        };

        return (
          <span className={`px-2 py-1 rounded text-xs ${styles[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: 'priority',
      header: 'Priority',
      cell: ({ row }) => {
        const priority = row.original.priority;

        const styles = {
          LOW: 'bg-green-100 text-green-700',
          MEDIUM: 'bg-yellow-100 text-yellow-700',
          HIGH: 'bg-orange-100 text-orange-700',
          CRITICAL: 'bg-red-100 text-red-700',
        };

        return (
          <span className={`px-2 py-1 rounded text-xs ${styles[priority]}`}>
            {priority}
          </span>
        );
      },
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => {
        const date = row.original.dueDate;
        if (!date) return '—';

        return format(new Date(date), "yyyy-MM-dd");
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const task = row.original;

        return (
          <div className="flex gap-2">
            <button className='btn btn-warning' onClick={() => handleEdit(task)}>
              ✏️
            </button>

            <button
              className='btn bg-rose-600 text-zinc-50'
              onClick={() => handleDelete(task.id)}
            >
              X
            </button>
          </div>
        );
      },
    },
  ];
  const table = useReactTable({ data: tasks, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">

        {/* HEADER */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className='text-zinc-800' key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* BODY */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
