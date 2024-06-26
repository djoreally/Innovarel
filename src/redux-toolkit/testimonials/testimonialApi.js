import { apiSlice } from "@/redux-toolkit/api/apiSlice";

const testimonialsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // getProjects: builder.query({
        //     query: ({ categoryText, searchedText }) => `?query=*[_type=="Projects"
        //         ${categoryText && `&& category==${categoryText}`}
        //     ]
        //     ${searchedText && `[name match ${searchedText}]`}

        //     | order(_createdAt asc){ _id, name, features,front_end_link,category,live_link,backend_link,image{ "url":asset->url}, }`,
        // }),
        getTestimonials: builder.query({
            query: () => `?query=*[_type=="Testimonials" 
               
            ]
           
            
            | order(_createdAt desc){ _id, name, designation,text,rating,_createdAt,image{ "url":asset->url}, }`,
        }),
    }),
});

export const { useGetTestimonialsQuery } = testimonialsApi;
