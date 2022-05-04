import { OrderState } from "./../slices/orderSlice";
import { createApi } from "@reduxjs/toolkit/query/react";

import { ORDER_ROUTE, ORDERS_ROUTE } from "../../utils/constants/apiRoutes";
import { setOrder } from "../slices/orderSlice";
import { reauthBaseQuery } from "./interceptor";

export interface OrderData extends OrderState {}

export const orderApi = createApi({
  reducerPath: "orderApi",
  tagTypes: ["order"],
  baseQuery: reauthBaseQuery,
  endpoints: (builder) => ({
    getOrders: builder.query<OrderData[], void>({
      query: () => ({
        url: ORDERS_ROUTE,
        method: "GET",
      }),
      providesTags: ["order"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setOrder(data));
        }
      },
    }),
    addOrder: builder.mutation<any, Omit<OrderData, "id">>({
      query: (order) => ({
        url: ORDERS_ROUTE,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["order"],
    }),
    getOrder: builder.query<{ id: string }, OrderData>({
      query: ({ id }) => ({
        url: `${ORDER_ROUTE}/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    changeOrder: builder.mutation<any, Partial<OrderData>>({
      query: (body) => ({
        url: `${ORDER_ROUTE}/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAddOrderMutation,
  useChangeOrderMutation,
  useGetOrdersQuery,
  useGetOrderQuery,
} = orderApi;
