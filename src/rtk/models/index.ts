import { UserModel, UserType } from "../../type";

// category
export interface Category {
  id: string;
  title: String;
  icon: String;
}

export interface LoginModel {
  email: string;
  password: String;
}

export interface UserState {
  user: UserType;
  token: {};
  error: string | undefined;
  authenticated: Boolean;
  loading: Boolean;
}
