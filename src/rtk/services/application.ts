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
  tagTypes: ["MyApplications"],
  endpoints: (builder) => ({
    applyForJob: builder.mutation({
      query: (newApplication: any) => ({
        url: "application/",
        method: "POST",
        body: newApplication,
      }),
      invalidatesTags: ["MyApplications"],
    }),

    getMyApplications: builder.query<APIResponse, number>({
      query: (id) => `application/user/${id}`,
      providesTags: ["MyApplications"],
    }),

    getJobApplicantsByCompanyId: builder.query<APIResponse, { id: number }>({
      query: ({ id }) => `application/company/${id}`,
    }),

    getRecommendedApplicantsById: builder.query<APIResponse, { id: number }>({
      query: ({ id }) => `application/recommended/${id}`,
    }),
  }),
});

export const { useApplyForJobMutation, useGetMyApplicationsQuery, useGetJobApplicantsByCompanyIdQuery, useGetRecommendedApplicantsByIdQuery } =
  applicationApi;
