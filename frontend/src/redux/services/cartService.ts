import { CART_URL } from "./../../utils/constants/apiRoutes";
import { CartState, setCart } from "./../slices/cartSlice";
import { createApi } from "@reduxjs/toolkit/query/react";
import { reauthBaseQuery } from "./interceptor";

export interface CartData extends CartState {}

export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["cart"],
  baseQuery: reauthBaseQuery,
  endpoints: (builder) => ({
    getCartById: builder.query<CartData, { id: string }>({
      query: ({ id }) => ({
        url: `${CART_URL}${id}`,
        method: "GET",
      }),
      providesTags: ["cart"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setCart(data));
        }
      },
    }),
    getUserCart: builder.query<CartData, { userId: string }>({
      query: ({ userId }) => ({
        url: `${CART_URL}user/${userId}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    editCart: builder.mutation<any, Partial<CartData>>({
      query: (body) => ({
        url: `${CART_URL}${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useGetCartByIdQuery, useGetUserCartQuery, useEditCartMutation } =
  cartApi;
