import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCredentialData } from "../services/authService";
import { RootState } from "../store";

export interface AccountData {
  phone: string;
  firstname: string;
  lastname: string;
}

export interface UserState {
  id: string | number;
  username: string;
  role: string;
  accountData: AccountData;
  token: string;
  email: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: "",
  username: "",
  isAuthenticated: false,
  email: "",
  role: "",
  token: localStorage.getItem("accessToken") || "",
  accountData: {
    phone: "",
    firstname: "",
    lastname: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { id, username, role, email, token, accountData },
      }: PayloadAction<UserCredentialData>
    ) => {
      state.id = id;
      state.username = username;
      state.isAuthenticated = true;
      state.role = role;
      state.email = email;
      state.token = token;
      state.accountData = accountData;

      localStorage.setItem("accessToken", token);
    },
    clearCredentials: () => {
      localStorage.removeItem("accessToken");
      const cleanState = { ...initialState, isAuthenticated: false, token: "" };
      return cleanState;
    },
  },
  extraReducers: {},
});
export const { setCredentials, clearCredentials } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.userReducer;
