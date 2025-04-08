import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { APIResponse } from "../../type";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<APIResponse, void>({
      query: () => `categories/`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
