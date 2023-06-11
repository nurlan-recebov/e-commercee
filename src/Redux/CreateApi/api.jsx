import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3200";
export const CategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "shops",
        method: "GET",
      }),
    }),
    createshop: builder.mutation({
      query: (shop) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: "shops",
        method: "POST",
        body: shop,
      }),
    }),
  }),
});
export const { useGetCategoryQuery, useCreateshopMutation } = CategoryApi;
