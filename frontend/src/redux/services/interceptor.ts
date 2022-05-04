import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { clearCredentials, setCredentials } from "../slices/userSlice";
import { RootState } from "../store";
import { API_ROUTE, REFRESH_ROUTE } from "../../utils/constants/apiRoutes";
import { UserCredentialData } from "./authService";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_ROUTE,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).userReducer.accountData;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      headers.set("Access-Control-Allow-Origin", "*");
    }
    return headers;
  },
});

export const reauthBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, options) => {
  let result = await baseQuery(args, api, options);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(REFRESH_ROUTE, api, options);

    if (refreshResult.data) {
      api.dispatch(setCredentials(refreshResult.data as UserCredentialData));
      result = await baseQuery(args, api, options);
    } else {
      api.dispatch(clearCredentials());
    }
  }
  return result;
};
