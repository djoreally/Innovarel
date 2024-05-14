import { apiSlice } from "@/redux-toolkit/api/apiSlice";

const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // getProjects: builder.query({
        //     query: ({ categoryText, searchedText }) => `?query=*[_type=="Projects"
        //         ${categoryText && `&& category==${categoryText}`}
        //     ]
        //     ${searchedText && `[name match ${searchedText}]`}

        //     | order(_createdAt asc){ _id, name, features,front_end_link,category,live_link,backend_link,image{ "url":asset->url}, }`,
        // }),
        getProjects: builder.query({
            query: () => `?query=*[_type=="Projects"]|order(_createdAt desc){ _id, name, category,live_link,image{ "url":asset->url},features }
            `,
        }),
    }),
});

export const { useGetProjectsQuery } = projectsApi;
