/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { TaskFilters, TaskFormModal, TaskPagination, TaskTable } from "@/components";
import { Task } from "@/redux/services/interfaces/tasks/Task-response";
import { useGetTasksQuery } from "@/redux/services/task-api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TasksPage() {

  const [selectedTask, setSelectedTask] = useState<Task | null>();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const params = useParams();

  const { data: response, isLoading, isFetching, error } = useGetTasksQuery({
    page,
    pageSize,
    priority,
    status,
    projectId: params.id as string
  });

  useEffect(() => {
    setPage(1);
  }, [status, priority]);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>some error</p>;

  const totalPages = response?.meta?.totalPages || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='lg:w-[88%] flex flex-col gap-4'>
      <div className='flex justify-between'>
        <p className='text-zinc-500'>Manage and track all your tasks</p>
        <button className="btn btn-primary" onClick={() => {
          const modal = document.getElementById('my_task_form_modal') as HTMLDialogElement | null;
          modal?.showModal();
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"></path>
          </svg>
          New Task
        </button>
      </div>

      <TaskFilters status={status} priority={priority} setStatus={setStatus} setPriority={setPriority} />
      <TaskTable tasks={response!.data!} setSelectedTask={setSelectedTask} />

      <TaskPagination page={page} pages={pages} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} />

      <TaskFormModal task={selectedTask || undefined} projectId={params.id as string} />

    </div>
  )
}
