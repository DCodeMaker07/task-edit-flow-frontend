import { TaskProject } from "./projects";

export const getProjectProgress = (tasks: TaskProject[]) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'DONE').length;

  return {
    total,
    completed,
  };
};