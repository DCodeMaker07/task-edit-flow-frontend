/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProjectResponse } from './interfaces/projects/Project-response';
import { CreateProjectDto } from './interfaces/projects/Project-dto';

export const projectApi = createApi({
    reducerPath: 'projectAPI',
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
    tagTypes: ['Projects'],
    endpoints: (builder) => ({
        getProjects: builder.query<ProjectResponse, null>({
            query: () => 'projects',
            providesTags: ['Projects'],
        }),
        createProject: builder.mutation<any, CreateProjectDto>({
            query: (body) => ({
                url: 'projects',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Projects'],
        }),
        updateProject: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `projects/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Projects'],
        }),

        deleteProject: builder.mutation({
            query: (id) => ({
                url: `projects/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Projects'],
        }),
    })
});

export const { useGetProjectsQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation } = projectApi;