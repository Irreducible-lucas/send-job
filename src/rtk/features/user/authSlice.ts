import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios";
import { auth } from "../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

interface initialState {
  currentUser: any;
  token: string;
  isLoading: boolean;
  error: string;
}

const initialState: initialState = {
  currentUser: null,
  token: "",
  isLoading: false,
  error: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      // Login using firebase signInWithEmailAndPassword function
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Get access token after user logged in successfully
      const accessToken = await userCredential.user.getIdToken();
      const response = await axios.get("/users/info", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user_data", JSON.stringify(response.data.user));
      return {
        user: response.data.user,
        token: accessToken,
      };
    } catch (error: any) {
      let errorMessage = "An error occurred";

      // Handle Firebase-specific error codes
      switch (error.code) {
        case "auth/invalid-credential":
          errorMessage = "Invalid email or password provided.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email format.";
          break;
        case "auth/user-disabled":
          errorMessage = "User account has been disabled.";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        default:
          errorMessage = "An error occurred";
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";
      const user = localStorage.getItem("user_data") ?? "";
      let userData;
      if (!user) {
        const response = await axios.get("/users/info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.setItem("user_data", JSON.stringify(response.data.user));
        userData = response.data.user;
      } else {
        userData = JSON.parse(user);
      }
      const data = {
        user: userData,
        token: token
      }
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// thunk action to update user profile
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (userData: any, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";

      // Send updated user data to your backend
      const response = await axios.patch(`/users/update/${userData.get("id")}`, userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      const updatedUser = response.data.user;
      localStorage.setItem("user_data", JSON.stringify(updatedUser));

      return {
        user: updatedUser,
        token: token
      };
    } catch (error: any) {
      let errorMessage = "Failed to update profile";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user_data");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.currentUser = null;
        state.token = "";
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.currentUser = null;
        state.token = "";
        state.error = action.payload as string;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.currentUser = null;
        state.token = "";
        state.error = "";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        state.error = "";
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.currentUser = null;
        state.token = "";
        state.error = action.payload as string;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = null;
        state.token = "";
        state.error = "";
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.user;
        state.error = "";
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
  },
});

export default authSlice.reducer;
