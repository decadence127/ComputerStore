import { createSlice } from "@reduxjs/toolkit";
import { CommodityState } from "./commoditySlice";
import { UserState } from "./userSlice";

export interface CartState {
  id: string | number;
  account: UserState;
  commodities: CommodityState[];
}

const initialState: CartState = {
  id: "",
  account: {} as UserState,
  commodities: [],
};

const cartSlice = createSlice({
  name: "commodity",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.id = action.payload.id;
      state.account = action.payload.account;
      state.commodities = action.payload.commodities;
    },
  },
});

export default cartSlice.reducer;

export const { setCart } = cartSlice.actions;
