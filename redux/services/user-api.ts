/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserResponse } from './interfaces/users/User-response';
import { UserFilters } from './interfaces/users/User-filters';
import { CreateUserDto, UpdateUserDto } from './interfaces/users/User-dto';

export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<UserResponse, UserFilters>({
            query: (filters) => ({
                url: 'users',
                params: filters,
            }),
            providesTags: ['Users'],
        }),

        createUser: builder.mutation<any, CreateUserDto>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Users'],
        }),

        updateUser: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `users/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Users'],
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],
        }),
    })
});

export const { useGetUsersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
