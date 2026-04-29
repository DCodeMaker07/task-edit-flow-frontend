"use client"
import { TaskFilters, TaskTable } from "@/components";
import { useGetTasksQuery } from "@/redux/services/task-api";
import { useState } from "react";

export default function TasksPage() {
  
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const { data: response, isLoading, isFetching, error } = useGetTasksQuery({
    page: 1,
    pageSize: 10,
    priority,
    status
  });
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>some error</p>;

  return (
    <div className='lg:w-[88%] flex flex-col gap-4'>
      <div className='flex justify-between'>
        <p className='text-zinc-500'>Manage and track all your tasks</p>
        <button className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
          </svg>
          New Task
        </button>
      </div>

      <TaskFilters status={status} priority={priority} setStatus={setStatus} setPriority={setPriority} />
      <TaskTable tasks={response!.data!} />

    </div>
  )
}
