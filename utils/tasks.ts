export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Task {
  id: string;
  title: string;
  priority: TaskPriority;
  dueDate?: Date | null;
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design dashboard UI',
    priority: 'HIGH',
    dueDate: new Date('2026-05-01'),
  },
  {
    id: '2',
    title: 'Implement authentication',
    priority: 'CRITICAL',
    dueDate: new Date('2026-04-30'),
  },
  {
    id: '3',
    title: 'Setup database schema',
    priority: 'MEDIUM',
    dueDate: new Date('2026-05-03'),
  },
  {
    id: '4',
    title: 'Create API endpoints',
    priority: 'HIGH',
    dueDate: new Date('2026-05-02'),
  },
  {
    id: '5',
    title: 'Write unit tests',
    priority: 'LOW',
    dueDate: new Date('2027-05-02'),
  },
];