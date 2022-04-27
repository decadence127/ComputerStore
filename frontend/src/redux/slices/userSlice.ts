import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCredentialData } from "../services/authService";
import { RootState } from "../store";

export interface AccountData {
  token: string;
  phoneNumber: string;
  contactInfo: string;
}

export interface UserState {
  id: string;
  username: string;
  email: string;
  role: string;
  accountData: AccountData;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id: "",
  username: "",
  isAuthenticated: !!localStorage.getItem("accessToken"),
  email: "",
  role: "",
  accountData: {
    token: localStorage.getItem("accessToken") || "",
    phoneNumber: "",
    contactInfo: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { id, username, email, role, accountData },
      }: PayloadAction<UserCredentialData>
    ) => {
      state.id = id;
      state.username = username;
      state.isAuthenticated = true;
      state.role = role;
      state.email = email;
      state.accountData.token = accountData.token;
      state.accountData.phoneNumber = accountData.phoneNumber;
      state.accountData.contactInfo = accountData.contactInfo;

      localStorage.setItem("accessToken", accountData.token);
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
