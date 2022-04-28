import { createSlice } from "@reduxjs/toolkit";

export interface CommodityState {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

const initialState: CommodityState = {
  id: "",
  name: "",
  price: 0,
  quantity: 0,
  description: "",
};

const commoditySlice = createSlice({
  name: "commodity",
  initialState,
  reducers: {
    setCommodity: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.quantity = action.payload.quantity;
      state.description = action.payload.description;
    },
  },
});

export default commoditySlice.reducer;

export const { setCommodity } = commoditySlice.actions;
