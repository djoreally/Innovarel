"use client";

import { useGetSingleBlogQuery } from "@/redux-toolkit/blogs/blogApi";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import BlogDetailsPageSkeleton from "@/components/skeletons/BlogDetailsSkeleton";

const BlogDetailsPage = ({ params }) => {
    const { data: singleBlog, isLoading, error } = useGetSingleBlogQuery(params.id);
    // console.log(singleBlog);
    const { image, title, blog, _createdAt } = singleBlog?.result[0] || {};
    if (isLoading) {
        return <BlogDetailsPageSkeleton />;
    }
    if (error) {
        return <h3>{error.message}</h3>;
    }

    return (
        <main className="py-20 w-11/12 mx-auto max-w-screen-md">
            <div className="mb-4 md:mb-0 w-full  mx-auto relative h-96">
                <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{
                        backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                    }}
                ></div>
                <Image
                    src={image?.url}
                    className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    alt=""
                    width={500}
                    height={500}
                />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                    {/* <a
                        href="#"
                        className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                    >
                        Nutrition
                    </a> */}
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">{title}</h2>
                    <div className="flex mt-3">
                        {/* <img
                            src="https://randomuser.me/api/portraits/men/97.jpg"
                            className="h-10 w-10 rounded-full mr-2 object-cover"
                            alt=""
                        /> */}
                        <div>
                            {/* <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p> */}
                            <p className="font-semibold text-gray-400 text-xs">
                                {" "}
                                {_createdAt?.slice(0, 12)}{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" lg:px-0 mt-12 text-black dark:text-white mx-auto text-lg leading-relaxed">
                <PortableText
                    value={blog}
                    //   components={/* optional object of custom components to use */}
                />
            </div>
        </main>
        // <BlogDetailsPageSkeleton />
    );
};

export default BlogDetailsPage;
