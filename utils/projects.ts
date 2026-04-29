type ProjectStatus = 'ACTIVE' | 'ARCHIVED';

type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';

type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface TaskProject {
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

export interface Project {
  id: string;
  name: string;
  description?: string | null;
  status: ProjectStatus;
  ownerId: string;
  tasks: TaskProject[];
  createdAt: Date;
  updatedAt: Date;
}

export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'TaskFlow Web App',
    description: 'Frontend + backend del sistema',
    status: 'ACTIVE',
    ownerId: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [
      { id: 't1', title: 'Login UI', status: 'DONE', priority: 'HIGH', projectId: 'p1', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
      { id: 't2', title: 'Auth API', status: 'DONE', priority: 'CRITICAL', projectId: 'p1', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
      { id: 't3', title: 'Dashboard', status: 'IN_PROGRESS', priority: 'HIGH', projectId: 'p1', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
      { id: 't4', title: 'Sidebar', status: 'TODO', priority: 'MEDIUM', projectId: 'p1', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
    ],
  },
  {
    id: 'p2',
    name: 'Mobile App',
    description: 'App en React Native',
    status: 'ACTIVE',
    ownerId: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [
      { id: 't5', title: 'Camera module', status: 'DONE', priority: 'HIGH', projectId: 'p2', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
      { id: 't6', title: 'Notifications', status: 'IN_REVIEW', priority: 'MEDIUM', projectId: 'p2', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
      { id: 't7', title: 'Voice commands', status: 'TODO', priority: 'LOW', projectId: 'p2', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
    ],
  },
  {
    id: 'p3',
    name: 'AI Detection API',
    description: 'YOLOv8 + FastAPI',
    status: 'ARCHIVED',
    ownerId: 'u1',
    createdAt: new Date(),
    updatedAt: new Date(),
    tasks: [
      { id: 't8', title: 'Model training', status: 'DONE', priority: 'CRITICAL', projectId: 'p3', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
      { id: 't9', title: 'API endpoints', status: 'DONE', priority: 'HIGH', projectId: 'p3', createdById: 'u1', createdAt: new Date(), updatedAt: new Date() },
    ],
  },
];