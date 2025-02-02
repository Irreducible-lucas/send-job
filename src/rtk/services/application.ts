import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { APIResponse, Job } from "../../type";

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
      query: (newApplication: Job) => ({
        url: "application/",
        method: "POST",
        body: newApplication,
      }),
      invalidatesTags: ["MyApplications"],
    }),

    getMyApplications: builder.query<APIResponse, string>({
      query: () => `application/`,
      providesTags: ["MyApplications"],
      keepUnusedDataFor: 12,
    }),
  }),
});

export const { useApplyForJobMutation, useGetMyApplicationsQuery } =
  applicationApi;
