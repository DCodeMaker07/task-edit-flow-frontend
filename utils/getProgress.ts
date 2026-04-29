import { Task } from "@/redux/services/interfaces/projects/Project-response";

export const getProjectProgress = (tasks: Task[]) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'DONE').length;

  return {
    total,
    completed,
  };
};