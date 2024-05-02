import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://6t5vwplb.api.sanity.io/v2024-02-22/data/query/production",
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
