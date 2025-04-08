import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/user/userSlice";
import authReducer from "./features/user/authSlice";
import jobInterestReducer from "./features/user/jobInterestSlice";
import jobReducer from "./features/user/jobSlice"

import { jobsApi } from "./services/jobs";
import { applicationApi } from "./services/application";
import { educationApi } from "./services/education";
import { workApi } from "./services/work";
import {categoryApi} from "./services/categories"

const store = configureStore({
  reducer: {
    job: jobReducer,
    auth: authReducer,
    jobInterests: jobInterestReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
    [educationApi.reducerPath]: educationApi.reducer,
    [workApi.reducerPath]: workApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobsApi.middleware,
      applicationApi.middleware,
      educationApi.middleware,
      workApi.middleware,
      categoryApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
