import { apiSlice } from "@/redux-toolkit/api/apiSlice";

const blogsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // getProjects: builder.query({
        //     query: ({ categoryText, searchedText }) => `?query=*[_type=="Projects"
        //         ${categoryText && `&& category==${categoryText}`}
        //     ]
        //     ${searchedText && `[name match ${searchedText}]`}

        //     | order(_createdAt asc){ _id, name, features,front_end_link,category,live_link,backend_link,image{ "url":asset->url}, }`,
        // }),
        getBlogs: builder.query({
            query: () => `?query=*[_type=="Blogs" 
               
            ]
           
            
            | order(_createdAt desc){ _id, title, blog_markdown,_createdAt,image{ "url":asset->url}, }`,
        }),
        getSingleBlog: builder.query({
            query: (id) => `?query=*[_type=="Blogs" && _id==${id}
               
            ]
           
            
            // | order(_createdAt desc){ _id, title, blog_markdown,_createdAt,image{ "url":asset->url}, }`,
        }),
    }),
});

export const { useGetProjectsQuery, useGetSingleBlogQuery } = blogsApi;
