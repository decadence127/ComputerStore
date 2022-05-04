import { createSlice } from "@reduxjs/toolkit";
import { CommodityState } from "./commoditySlice";
import { UserState } from "./userSlice";

export interface OrderState {
  id: string | number;
  condition: "PROCESSING" | "DELIVERED" | "CANCELED";
  address: {
    id: string | number;
    city: string;
    street: string;
    houseNumber: string;
  };
  account: UserState;
  orderDate: Date | string;
  deliveryDate: Date | string;
  commodities: CommodityState[];
}

const initialState: OrderState = {
  id: "",
  condition: "PROCESSING",
  address: {
    id: "",
    city: "",
    street: "",
    houseNumber: "",
  },
  account: {} as UserState,
  orderDate: new Date(),
  deliveryDate: new Date(),
  commodities: [],
};

const orderSlice = createSlice({
  name: "commodity",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.id = action.payload.id;
      state.condition = action.payload.condition;
      state.address = action.payload.address;
      state.account = action.payload.account;
      state.orderDate = action.payload.orderDate;
      state.deliveryDate = action.payload.deliveryDate;
      state.commodities = action.payload.commodities;
    },
  },
});

export default orderSlice.reducer;

export const { setOrder } = orderSlice.actions;
