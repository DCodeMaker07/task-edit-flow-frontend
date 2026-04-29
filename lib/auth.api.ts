import { axiosInstance } from './axios';
import { LoginDto, LoginResponse } from '@/types/auth';
import { ApiResponse } from '@/types/api';

export const loginRequest = async (data: LoginDto) => {
  const res = await axiosInstance.post<ApiResponse<LoginResponse>>(
    '/auth/login',
    data
  );

  return res.data;
};