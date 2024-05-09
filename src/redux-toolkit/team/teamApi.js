import { apiSlice } from "@/redux-toolkit/api/apiSlice";

const teamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeam: builder.query({
            query: () => `?query=*[_type=="Team"]|order(_createdAt asc){ _id, name, designation,github_link,linkedin_link,facebook_link,portfolio_link,image{ "url":asset->url}, }
            `,
        }),
    }),
});

export const { useGetTeamQuery } = teamApi;
