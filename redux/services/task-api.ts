import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TaskResponse } from './interfaces/tasks/Task-response';
import { TaskStatsResponse } from './interfaces/tasks/Task-stats-response';
import { TaskFilters } from './interfaces/tasks/Task-filters';

export const taskApi = createApi({
    reducerPath: 'taskAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: (headers) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbW9ocHQ5aXgwMDAwMndlcHh6MDlhNDV6IiwiZW1haWwiOiJwbUB0YXNrZmxvdy5jb20iLCJyb2xlIjoiUFJPSkVDVF9NQU5BR0VSIiwiaWF0IjoxNzc3NDg5MDE4LCJleHAiOjE3Nzc0OTI2MTh9.a_JaOnpe9tR9h_YsdT1vgvAmD_5HN_WfT3Znwe1rKtM";

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTasks: builder.query<TaskResponse, TaskFilters>({
            query: (filters) => ({
                url: 'tasks',
                params: filters,
            }),
        }),

        getStats: builder.query<TaskStatsResponse, null>({
            query: () => 'tasks/stats'
        })
    })
});

export const { useGetTasksQuery, useGetStatsQuery } = taskApi;