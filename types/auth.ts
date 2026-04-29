export interface LoginResponse {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'PROJECT_MANAGER' | 'DEVELOPER';
  avatarUrl: string | null;
  access_token: string;
}

export interface LoginDto {
  email: string;
  password: string;
}