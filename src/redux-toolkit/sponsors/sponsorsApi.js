import { apiSlice } from "@/redux-toolkit/api/apiSlice";

const sponsorsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSponsors: builder.query({
            query: () => `?query=*[_type=="Sponsors"]|order(_createdAt asc){ _id, url ,image{ "url":asset->url}, }
            `,
        }),
    }),
});

export const { useGetSponsorsQuery } = sponsorsApi;
