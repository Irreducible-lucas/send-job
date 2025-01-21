import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../models";
import { UserModel } from "../../../type";

const initialState: UserState = {
  user: {} as UserModel,
  token: {} as [], //TokenModel,
  error: undefined,
  authenticated: false,
  loading: true,
};

// Generates pending, fulfilled and rejected action types
// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async (body: LoginModel) => {
//     try {
//       let response: any = await axios.post(`${AUTH_BASE_URL}login`, body);

//       console.log(response, 'from server 1');
//       if (!response.data?.token) {
//         return response.data;
//       }
//       // get server token

//       response = await getServerToken(body.UserName, response.data?.token);

//       if (!response) return 'Authentication Error';

//       if (response?.user?.InActive) return 'InActive';

//       await setHeaders(response);
//       storeAuthToken(response);
//       storeUserName(body.UserName);

//       return response;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

// export const registerUser = createAsyncThunk(
//   'user/registerUser',
//   async (body: UserModel) => {
//     try {
//       const url = body.interpreter
//         ? `${AUTH_BASE_URL}register`
//         : `${AUTH_BASE_URL}register-customer`;
//       let response: any = await axios.post(url, body);

//       if (!response.data?.token) {
//         return {message: 'error', error: true};
//       }
//       // get server token

//       let serverResponse = await getServerToken(
//         body.Email,
//         response.data?.token,
//       );

//       if (!serverResponse) return {message: 'error', error: true};

//       await setHeaders(serverResponse);

//       await storeUserName(body.Email);

//       const roleId = body.interpreter
//         ? '1cf787b6-f0d6-499b-aabf-59f54fb43f13'
//         : '68e81ba9-0899-40c4-b232-beeb4d60148b';

//       addRole(response.data.user.id, roleId);
//       return {message: 'successful', Id: response.data.user.id, error: false};
//     } catch (error) {
//       throw {message: 'error', error: true};
//     }
//   },
// );

// // Generates pending, fulfilled and rejected action types
// export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}${suffix}users`);

//     return response.data;
//   } catch (error) {
//     if (error) throw error;
//     else {
//       return null;
//     }
//   }
// });

// // get Auth token
// export const getAuthToken = createAsyncThunk('user/getAuthToken', async () => {
//   const jsonValue = await AsyncStorage.getItem('authTokens');

//   if (jsonValue !== null) {
//     let authTokens = JSON.parse(jsonValue + '');
//     // set axios header
//     await setHeaders(authTokens);
//     return authTokens;
//   } else {
//     return null;
//   }
// });

// chnage profile picture

// verify password

// export const sendOTP = createAsyncThunk(
//   'user/sendOTP',
//   async (body: OTPModel) => {
//     try {
//       let response = await axios.post(`${BASE_URL}mails/`, body);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

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
  // extraReducers: builder => {
  //   builder.addCase(getAuthToken.fulfilled, (state, action) => {
  //     if (action?.payload?.token && action?.payload?.secret) {
  //       state.token = action.payload;
  //     }

  //     state.loading = false;
  //   });

  //   builder.addCase(loginUser.fulfilled, (state, action) => {
  //     //   state.loadingUI = false;
  //     state.token = action.payload;
  //   });

  //   builder.addCase(loginUser.rejected, (state, action) => {
  //     //   state.loadingUI = false;
  //     // console.log(action.error, 'from slice');
  //   });

  //   // register user state case

  //   // fetch user state cases
  //   builder.addCase(
  //     fetchUser.fulfilled,
  //     (state, action: PayloadAction<UserModel>) => {
  //       console.log('fulfiled');
  //       if (action.payload?.InActive) {
  //         state.error = 'Your account is inactive';
  //         state.authenticated = false;
  //       } else {
  //         state.user = action.payload;
  //         state.error = '';
  //         state.authenticated = true;
  //       }
  //       state.loading = false;
  //     },
  //   );

  //   builder.addCase(fetchUser.pending, (state, action) => {
  //     state.error = '';
  //     if (!state.authenticated) state.loading = true;
  //   });

  //   builder.addCase(fetchUser.rejected, (state, action) => {
  //     state.error = action.error.message || 'Something went wrong';

  //     state.loading = false;
  //   });
  // },
});

export default userSlice.reducer;
export const { logoutUser } = userSlice.actions;

// export const storeAuthToken = async (value: TokenModel) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem('authTokens', jsonValue);
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const setHeaders = (authToken: any) => {
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken.token;
//   axios.defaults.headers.common['secret'] = authToken.secret;
// };
