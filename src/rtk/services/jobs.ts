import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "..";
import { BASE_URL } from "../../constant";
import { Job } from "../../type";

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
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    getFeaturedJobs: builder.query<Job[], string>({
      query: () => `jobs/featured`,
      providesTags: ["Job"],
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

export const { useGetFeaturedJobsQuery } = jobsApi;
