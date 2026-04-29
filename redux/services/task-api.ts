import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TaskResponse } from './interfaces/tasks/Task-response';
import { TaskStatsResponse } from './interfaces/tasks/Task-stats-response';
import { TaskFilters } from './interfaces/tasks/Task-filters';

export const taskApi = createApi({
    reducerPath: 'taskAPI',
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
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query<TaskResponse, TaskFilters>({
            query: (filters) => ({
                url: 'tasks',
                params: filters,
            }),
            providesTags: ['Tasks'],
        }),

        getStats: builder.query<TaskStatsResponse, null>({
            query: () => 'tasks/stats',
        }),
        createTask: builder.mutation({
            query: (body) => ({
                url: 'tasks',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Tasks'],
        }),

        updateTask: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `tasks/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Tasks'],
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Tasks'],
        }),
    })
});

export const { useGetTasksQuery, useGetStatsQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = taskApi;