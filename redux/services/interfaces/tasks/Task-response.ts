export interface TaskResponse {
    success: boolean;
    data:    Task[];
    message: string;
    meta:    Meta;
}

export interface Task {
    id:           string;
    title:        string;
    description:  string;
    status:       Status;
    priority:     Priority;
    dueDate:      Date;
    projectId:    string;
    assignedToId: string;
    createdById:  string;
    createdAt:    Date;
    updatedAt:    Date;
    assignedTo:   AssignedTo;
    createdBy:    AssignedTo;
    project:      Project;
}

export interface AssignedTo {
    id:    string;
    name:  string;
    email: string;
}
export enum Priority {
    Low = "LOW",
}

export interface Project {
    id:   string;
    name: string;
}

export enum Status {
    Todo = "TODO",
}

export interface Meta {
    page:       number;
    limit:      number;
    total:      number;
    totalPages: number;
}
