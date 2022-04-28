import { createApi } from "@reduxjs/toolkit/query/react";

import {
  COMMODITIES_ROUTE,
  COMMODITY_ROUTE,
} from "../../utils/constants/apiRoutes";
import { setCommodity } from "../slices/commoditySlice";
import { UserState } from "../slices/userSlice";
import { reauthBaseQuery } from "./interceptor";

export interface CommodityData extends UserState {}

export const commodityApi = createApi({
  reducerPath: "commodityApi",
  tagTypes: ["commodity"],
  baseQuery: reauthBaseQuery,
  endpoints: (builder) => ({
    getCommodities: builder.query<CommodityData[], void>({
      query: () => ({
        url: COMMODITIES_ROUTE,
        method: "GET",
      }),
      providesTags: ["commodity"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(setCommodity(data));
        }
      },
    }),
    addCommodity: builder.mutation<any, CommodityData>({
      query: (commodity) => ({
        url: COMMODITIES_ROUTE,
        method: "POST",
        body: commodity,
      }),
      invalidatesTags: ["commodity"],
    }),
    getCommodity: builder.query<{ id: string }, CommodityData>({
      query: ({ id }) => ({
        url: `${COMMODITY_ROUTE}/${id}`,
        method: "GET",
      }),
      providesTags: ["commodity"],
    }),
    changeCommodity: builder.mutation<any, Partial<CommodityData>>({
      query: (body) => ({
        url: `${COMMODITY_ROUTE}/${body.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["commodity"],
    }),
  }),
});

export const {
  useAddCommodityMutation,
  useChangeCommodityMutation,
  useGetCommoditiesQuery,
  useGetCommodityQuery,
} = commodityApi;
