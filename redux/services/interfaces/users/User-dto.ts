export interface CreateUserDto {
    email: string;
    name: string;
    password: string;
    role?: string;
    avatarUrl?: string;
}

export interface UpdateUserDto {
    name?: string;
    role?: string;
    avatarUrl?: string;
}
