export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';

export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: Date | null;
  projectId: string;
  assignedToId?: string | null;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design dashboard UI',
    description: 'Create layout and components in Figma',
    status: 'DONE',
    priority: 'HIGH',
    dueDate: new Date('2026-05-01'),
    projectId: 'p1',
    assignedToId: 'u1',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    title: 'Implement authentication',
    description: 'JWT login and guards',
    status: 'IN_PROGRESS',
    priority: 'CRITICAL',
    dueDate: new Date('2026-04-30'),
    projectId: 'p1',
    assignedToId: 'u2',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Setup database schema',
    description: 'Define Prisma models',
    status: 'DONE',
    priority: 'MEDIUM',
    dueDate: new Date('2026-05-03'),
    projectId: 'p1',
    assignedToId: null,
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    title: 'Create API endpoints',
    description: 'CRUD for tasks and projects',
    status: 'IN_REVIEW',
    priority: 'HIGH',
    dueDate: new Date('2026-05-02'),
    projectId: 'p1',
    assignedToId: 'u3',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    title: 'Write unit tests',
    description: 'Cover services with Jest',
    status: 'TODO',
    priority: 'LOW',
    dueDate: new Date('2027-05-02'),
    projectId: 'p1',
    assignedToId: null,
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    title: 'Implement sidebar navigation',
    description: 'Dynamic routing and active state',
    status: 'DONE',
    priority: 'MEDIUM',
    dueDate: new Date('2026-05-04'),
    projectId: 'p2',
    assignedToId: 'u2',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '7',
    title: 'Integrate Redux store',
    description: 'Global state for auth and tasks',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    dueDate: new Date('2026-05-05'),
    projectId: 'p2',
    assignedToId: 'u1',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '8',
    title: 'Add loading states',
    description: 'Improve UX with skeletons',
    status: 'TODO',
    priority: 'LOW',
    dueDate: new Date('2026-05-06'),
    projectId: 'p2',
    assignedToId: null,
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '9',
    title: 'Fix responsive layout',
    description: 'Mobile and tablet views',
    status: 'IN_REVIEW',
    priority: 'MEDIUM',
    dueDate: new Date('2026-05-07'),
    projectId: 'p3',
    assignedToId: 'u3',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '10',
    title: 'Deploy to production',
    description: 'Docker + CI/CD pipeline',
    status: 'TODO',
    priority: 'CRITICAL',
    dueDate: new Date('2026-05-10'),
    projectId: 'p3',
    assignedToId: 'u1',
    createdById: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];