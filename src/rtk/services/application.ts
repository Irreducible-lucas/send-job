import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { APIResponse } from "../../type";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["MyApplications", "Documents", "JobApplicants"],
  endpoints: (builder) => ({
    applyForJob: builder.mutation({
      query: (newApplication: any) => ({
        url: "application/",
        method: "POST",
        body: newApplication,
      }),
      invalidatesTags: ["MyApplications", "Documents"],
    }),

    getDocuments: builder.query<any, {userId: number, jobId: any}>({
      query: ({userId, jobId}) => `documents?userId=${userId}&jobId=${jobId}`,
      providesTags: ["Documents"],
    }),

    getMyApplications: builder.query<APIResponse, number>({
      query: (id) => `application/user/${id}`,
      providesTags: ["MyApplications"],
    }),

    getApplicantsByJobId: builder.query<any, number>({
      query: (id) => `application/job/${id}`,
      providesTags: ["JobApplicants"],
    }),

    getApplicationStatus: builder.query<any, {userId: number, jobId: number}>({
      query: ({userId, jobId}) => `application?userId=${userId}&jobId=${jobId}`,
    }),

    getJobApplicantsByCompanyId: builder.query<APIResponse, { id: number }>({
      query: ({ id }) => `application/company/${id}`,
      keepUnusedDataFor: 15,
    }),

    getRecommendedApplicantsById: builder.query<APIResponse, { id: number }>({
      query: ({ id }) => `application/recommended/${id}`,
    }),

    updateApplication: builder.mutation({
      query: ({appId, update}: any) => ({
        url: `application/status/${appId}`,
        method: "PATCH",
        body: update,
      }),
      invalidatesTags: ["MyApplications", "JobApplicants"],
    }),
  }),
});

export const { useApplyForJobMutation, useGetDocumentsQuery, useGetMyApplicationsQuery, 
  useGetApplicantsByJobIdQuery, useGetJobApplicantsByCompanyIdQuery, 
  useGetRecommendedApplicantsByIdQuery, useUpdateApplicationMutation, useGetApplicationStatusQuery } =
  applicationApi;
