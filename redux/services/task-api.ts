import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TaskResponse } from './interfaces/tasks/Task-response';
import { TaskStatsResponse } from './interfaces/tasks/Task-stats-response';
import { TaskFilters } from './interfaces/tasks/Task-filters';

export const taskApi = createApi({
    reducerPath: 'taskAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: (headers) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbW9ocHQ5ajEwMDAxMndlcHhvZzJxZDZ5IiwiZW1haWwiOiJhZG1pbkB0YXNrZmxvdy5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Nzc0OTQ0NDAsImV4cCI6MTc3NzQ5ODA0MH0.YSPk2Kvj1t-e-urdqfe34n0UMQEmVYfIX6xRO9k6buU";

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
        }),
    })
});

export const { useGetTasksQuery, useGetStatsQuery } = taskApi;