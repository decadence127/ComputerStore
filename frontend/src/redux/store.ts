import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { rtkQueryErrorMiddleware } from "./middlewares/errorMiddleware";
import { authApi } from "./services/authService";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  userReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, rtkQueryErrorMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
