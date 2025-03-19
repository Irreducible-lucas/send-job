import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { APIResponse } from "../../type";

export const educationApi = createApi({
  reducerPath: "educationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["MyEducation"],
  endpoints: (builder) => ({
    createEducation: builder.mutation({
      query: (education: any) => ({
        url: "education/create",
        method: "POST",
        body: education,
      }),
      invalidatesTags: ["MyEducation"],
    }),

    getMyEducationalHistory: builder.query<APIResponse, number>({
      query: (id) => `education/user/${id}`,
      providesTags: ["MyEducation"],
    }),

    updateEducationByUserId: builder.mutation({
      query: (education: any) => ({
        url: `education/update/${education?.id}`,
        method: "PATCH",
        body: education,
      }),
      invalidatesTags: ["MyEducation"],
    }),

    deleteEducationById: builder.mutation({
      query: (id) => ({
        url: `education/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MyEducation"],
    })

  }),
});

export const { useCreateEducationMutation, useGetMyEducationalHistoryQuery, useUpdateEducationByUserIdMutation, useDeleteEducationByIdMutation } = educationApi;
