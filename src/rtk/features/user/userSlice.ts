import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../models";
import { UserType } from "../../../type";
import axios from "axios";
import { BASE_URL } from "../../../constant";

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    password: "",
    telephone: "",
    profile_image: "",
    gender: "male",
    birth_date: "",
    job_title: "",
    interested_job: "",
    work_location: "",
  } as UserType,
  token: {} as [],
  error: undefined,
  authenticated: false,
  loading: true,
};

// Generates pending, fulfilled and rejected action types
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (email: string) => {
    try {
      const response = await axios.get(`${BASE_URL}users/${email}`);
      return response.data;
    } catch (error) {
      if (error) throw error;
      else {
        return null;
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    logoutUser: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.authenticated = initialState.authenticated;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(loginUser.fulfilled, (state, action) => {
    //   //   state.loadingUI = false;
    //   state.token = action.payload;
    // });

    // builder.addCase(loginUser.rejected, (state, action) => {
    //   //   state.loadingUI = false;
    //   // console.log(action.error, 'from slice');
    // });

    // register user state case

    // fetch user state cases
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.user = action.payload.user;
        state.error = "";
        state.authenticated = true;
        state.loading = false;
      }
    );

    builder.addCase(fetchUser.pending, (state, action) => {
      state.error = "";
      if (!state.authenticated) state.loading = true;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message || "Something went wrong";
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;
