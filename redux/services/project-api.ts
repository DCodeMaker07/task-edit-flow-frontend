import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProjectResponse } from './interfaces/projects/Project-response';

export const projectApi = createApi({
    reducerPath: 'projectAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1',
        prepareHeaders: (headers) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbW9ocHQ5ajEwMDAxMndlcHhvZzJxZDZ5IiwiZW1haWwiOiJhZG1pbkB0YXNrZmxvdy5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3Nzc0ODk4NTEsImV4cCI6MTc3NzQ5MzQ1MX0.k5ch2GE62BLWljs7hp8IuY2EXH-X8PLNFN0LFha3-Rc";

            if(token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getProjects: builder.query<ProjectResponse, null>({
            query: () => 'projects'
        }),
    })
});

export const { useGetProjectsQuery } = projectApi;