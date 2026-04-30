export interface UserResponse {
    success: boolean;
    data: User[];
    message: string;
    meta: Meta;
}

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserRole {
    Admin = "ADMIN",
    ProjectManager = "PROJECT_MANAGER",
    Developer = "DEVELOPER",
}

export interface Meta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}
