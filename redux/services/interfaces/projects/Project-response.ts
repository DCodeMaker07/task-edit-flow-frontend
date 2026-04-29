export interface ProjectResponse {
    success: boolean;
    data:    Project[];
    message: string;
    meta:    Meta;
}

export interface Project {
    id:          string;
    name:        string;
    description: string;
    status:      ProjectStatus;
    ownerId:     string;
    createdAt:   Date;
    updatedAt:   Date;
    tasks:       Task[];
}

export interface Task {
    id:           string;
    title:        string;
    description:  string;
    status:       Status;
    priority:     string;
    dueDate:      Date;
    projectId:    string;
    assignedToId: string;
    createdById:  string;
    createdAt:    Date;
    updatedAt:    Date;
}

enum ProjectStatus {
    Active = "ACTIVE",
    Archived = "ARCHIVED",
}

export enum Priority {
    Critical = "CRITICAL",
    High = "HIGH",
    Low = "LOW",
    Medium = "MEDIUM",
}

export enum Status {
    Done = "DONE",
    InProgress = "IN_PROGRESS",
    InReview = "IN_REVIEW",
    Todo = "TODO",
}

export interface Meta {
    page:       number;
    limit:      number;
    total:      number;
    totalPages: number;
}
