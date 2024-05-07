"use client";
import { useGetBlogsQuery } from "@/redux-toolkit/blogs/blogApi";
import SingleBlog from "../blogs/SingleBlog";
import SingleBlogPageSkeleton from "../skeletons/SingleBlogPageSkeleton";

const Blogs = () => {
    const { data: allBlogs, isLoading, error } = useGetBlogsQuery();
    const result = allBlogs?.result?.slice(0, 4) ?? [];
    // console.log(result);
    return (
        <section className="bg-cover bg-center">
            <div className="w-11/12 lg:w-8/12 mx-auto ">
                <div className="mx-auto">
                    <h2 className="text-center mx-auto px-4 py-2 bg-[#FEEFF3] text-tertiary shadow-2xl rounded-xl mt-32 md:w-36 md:items-center mb-10 w-32">
                        OUR BLOG
                    </h2>

                    <h1 className="text-center text-4xl font-bold text-black dark:text-white">
                        Latest News & Blog
                    </h1>
                    {isLoading && <SingleBlogPageSkeleton />}
                    {error && <h1>{error.message}</h1>}
                    {!isLoading && result.length === 0 && <h3>No Data Found</h3>}
                    {!isLoading && result.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
                            {result.map((blog) => (
                                <SingleBlog key={blog._id} blog={blog} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
