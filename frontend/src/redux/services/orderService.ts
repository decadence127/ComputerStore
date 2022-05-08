import { OrderState } from "./../slices/orderSlice";
import { createApi } from "@reduxjs/toolkit/query/react";

import { ORDER_ROUTE, ORDERS_ROUTE } from "../../utils/constants/apiRoutes";
import { setOrder } from "../slices/orderSlice";
import { reauthBaseQuery } from "./interceptor";
import { cartApi } from "./cartService";

export interface OrderData extends OrderState {}

export const orderApi = cartApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrderData[], void>({
      query: () => ({
        url: ORDERS_ROUTE,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    getUsersOrders: builder.query<OrderData[], { id: string }>({
      query: ({ id }) => ({
        url: `${ORDERS_ROUTE}/user/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    addOrder: builder.mutation<any, Omit<OrderData, "id">>({
      query: (order) => ({
        url: ORDERS_ROUTE,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["order", "cart"],
    }),
    getOrder: builder.query<OrderData, { id: string }>({
      query: ({ id }) => ({
        url: `${ORDER_ROUTE}${id}`,
        method: "GET",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setOrder(data));
        }
      },
      providesTags: ["order"],
    }),
    changeOrder: builder.mutation<any, Partial<OrderData>>({
      query: (body) => ({
        url: `${ORDER_ROUTE}${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetUsersOrdersQuery,
  useChangeOrderMutation,
  useGetOrdersQuery,
  useGetOrderQuery,
} = orderApi;
