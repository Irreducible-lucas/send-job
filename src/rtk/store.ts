import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import jobInterestReducer from "./features/user/jobInterestSlice";

import { jobsApi } from "./services/jobs";

const store = configureStore({
  reducer: {
    // cake: cakeReducer,
    // icecream: icecreamReducer,
    user: userReducer,
    jobInterests: jobInterestReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
