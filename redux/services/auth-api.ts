import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LoginDto } from './interfaces/auth/login-dto';
import { LoginResponse } from './interfaces/auth/login-response';

export const authApi = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginDto>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;