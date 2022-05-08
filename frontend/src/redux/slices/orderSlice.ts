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
  payment: "CASH" | "CARD";
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
  payment: "CASH",
  orderDate: new Date(),
  deliveryDate: new Date(),
  commodities: [],
};

const orderSlice = createSlice({
  name: "commodity",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.condition = action.payload.condition;
      state.address = action.payload.address;
      state.account = action.payload.account;
      state.payment = action.payload.payment;
      state.commodities = action.payload.commodities;
    },
    setOrderCommodities: (state, action) => {
      state.commodities = action.payload;
    },
    setOrderAddress: (state, action) => {
      state.address = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export default orderSlice.reducer;

export const {
  setOrder,
  setOrderCommodities,
  setOrderAddress,
  setPayment,
  setAccount,
} = orderSlice.actions;
