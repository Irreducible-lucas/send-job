// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {BASE_URL} from '../../utils';
import { store } from "..";
// import {suffix} from '../../environment';
// import {BookingModel, WrittenBooking} from '../../types';

// Define a service using a base URL and expected endpoints
export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "BASE_URL" + "suffix", //we need to add base URL later
    prepareHeaders: (headers) => {
      const token = store.getState().user.token;

      // headers.set('Authorization', `Bearer ${token.token}`);
      // headers.set('secret', `${token.secret}`);

      return headers;
    },
  }),
  tagTypes: ["Booking", "Written", "OpenBooking"],
  endpoints: (builder) => ({
    // getBookings: builder.query<BookingModel[], string>({
    //   query: () => `orders/`,
    //   providesTags: ['Booking'],
    // }),
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

export const {} = jobsApi;
