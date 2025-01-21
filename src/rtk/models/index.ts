import { UserModel } from "../../type";

// category
export interface Category {
  id: string;
  title: String;
  icon: String;
}

export interface LoginModel {
  UserName: string;
  Password: String;
}

export interface UserState {
  user: UserModel;
  token: {};
  error: string | undefined;
  authenticated: Boolean;
  loading: Boolean;
}
