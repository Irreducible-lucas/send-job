import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { APIResponse } from "../../type";

export const workApi = createApi({
  reducerPath: "workApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["MyWork"],
  endpoints: (builder) => ({
    createWork: builder.mutation({
      query: (work: any) => ({
        url: "work/create",
        method: "POST",
        body: work,
      }),
      invalidatesTags: ["MyWork"],
    }),

    getMyWorkHistory: builder.query<APIResponse, number>({
      query: (id) => `work/user/${id}`,
      providesTags: ["MyWork"],
    }),

    updateWorkByUserId: builder.mutation({
      query: (work: any) => ({
        url: `work/update/${work?.id}`,
        method: "PUT",
        body: work,
      }),
      invalidatesTags: ["MyWork"],
    }),

    deleteWorkById: builder.mutation({
      query: (id) => ({
        url: `work/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MyWork"],
    })

  }),
});

export const { useCreateWorkMutation, useGetMyWorkHistoryQuery, useUpdateWorkByUserIdMutation, useDeleteWorkByIdMutation } = workApi;
