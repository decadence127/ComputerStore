import { cartApi } from "./services/cartService";
import { orderApi } from "./services/orderService";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/authService";
import { rtkQueryErrorMiddleware } from "./middlewares/errorMiddleware";
import { commodityApi } from "./services/commodityService";
import userReducer from "./slices/userSlice";
import commodityReducer from "./slices/commoditySlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  commodityReducer,
  orderReducer,
  [authApi.reducerPath]: authApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [commodityApi.reducerPath]: commodityApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      orderApi.middleware,
      cartApi.middleware,
      commodityApi.middleware,
      rtkQueryErrorMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
