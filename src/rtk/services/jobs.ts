import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constant";
import { APIResponse } from "../../type";

// Define a service using a base URL and expected endpoints
export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // const token = store.getState().user.token;

      // headers.set('Authorization', `Bearer ${token.token}`);
      // headers.set('secret', `${token.secret}`);

      return headers;
    },
  }),
  tagTypes: ["Job", "JobByCompany"],
  endpoints: (builder) => ({
    getFeaturedJobs: builder.query<APIResponse, string>({
      query: () => `jobs/featured`,
      providesTags: ["Job"],
    }),

    getJobsByCategory: builder.query<APIResponse, { id: number }>({
      query: (id) => `jobs/category/${id}`,
      // providesTags: ["JobByCompany"],
    }),

    getJobsByCompanyId: builder.query<APIResponse, { id: number }>({
      query: (id) => `jobs/company/${id}`,
    }),

    getAllJobs: builder.query<APIResponse, { id: number }>({
      query: (id) => `jobs/`,
    }),

    getMatchedJobs: builder.query<APIResponse, { id: number }>({
      query: (id) => `jobs/matched/${id}`,
    }),

    searchJob: builder.query({
      query: ({ searchParamsObj = {}, pageNum = 1, limit = 10 }) => ({
        url: "jobs/search",
        params: {
          page: pageNum, // Keep consistency with getJobs
          limit,
          ...searchParamsObj, // Spread additional search filters
        },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        // If it's the first page, replace the cache, otherwise append
        if (arg.pageNum === 1) {
          currentCache.data = newItems.data; // Replace for first page
        } else {
          currentCache.data = [...(currentCache.data || []), ...newItems.data]; // Append for next pages
        }
        currentCache.hasMore = newItems.hasMore;
      },
      forceRefetch: ({ currentArg, previousArg }) =>
        currentArg?.pageNum !== previousArg?.pageNum,
    }),

    // createBooking: builder.mutation({
    //   query: (newBooking: BookingModel) => ({
    //     url: 'orders/',
    //     method: 'POST',
    //     body: newBooking,
    //   }),
    //   invalidatesTags: ['Booking'],
    // }),
    // get single booking
    // getBooking: builder.query<BookingModel, {id: number}>({
    //   query: ({id}) => `orders/${id}`,
    // }),
    // upfate booking status
  }),

  // update rejected table
});

export const {
  useGetFeaturedJobsQuery,
  useGetJobsByCompanyIdQuery,
  useGetJobsByCategoryQuery,
  useGetMatchedJobsQuery,
  useSearchJobQuery,
} = jobsApi;
