import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "..";
import { BASE_URL } from "../../constant";
import { APIResponse, Job } from "../../type";

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

    getMatchedJobs: builder.query<APIResponse, { id: number }>({
      query: (id) => `jobs/matched/${id}`,
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
} = jobsApi;
