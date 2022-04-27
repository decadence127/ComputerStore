import { createApi } from "@reduxjs/toolkit/query/react";

import {
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  REFRESH_ROUTE,
  REGISTER_ROUTE,
} from "../../utils/constants/apiRoutes";
import { UserState } from "../slices/userSlice";
import { reauthBaseQuery } from "./interceptor";

export interface RegistrationRequest
  extends Pick<UserState, "username" | "email"> {
  password: string;
}
export interface UserCredentialData extends UserState {}

export interface LoginRequest extends Pick<UserState, "email"> {
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: reauthBaseQuery,
  endpoints: (builder) => ({
    registration: builder.mutation<void, RegistrationRequest>({
      query: (credentials) => ({
        url: REGISTER_ROUTE,
        method: "POST",
        body: credentials,
      }),
    }),
    refresh: builder.mutation<UserCredentialData, void>({
      query: () => ({
        url: REFRESH_ROUTE,
        method: "GET",
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: LOGOUT_ROUTE,
        method: "GET",
      }),
    }),
    login: builder.mutation<UserCredentialData, LoginRequest>({
      query: (arg) => ({
        url: LOGIN_ROUTE,
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useRefreshMutation,
  useLoginMutation,
  useLogoutMutation,
} = authApi;
