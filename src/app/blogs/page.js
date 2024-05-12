"use client";
import SingleBlog from "@/components/blogs/SingleBlog";
import SingleBlogPageSkeleton from "@/components/skeletons/SingleBlogPageSkeleton";
import { useGetBlogsQuery } from "@/redux-toolkit/blogs/blogApi";

const BlogsPage = () => {
    const { data: allBlogs, isLoading, error } = useGetBlogsQuery();
    const result = allBlogs?.result?.slice(0, 4) ?? [];
    return (
        <section className="w-11/12 lg:w-8/12 mx-auto py-20">
            <div className="mx-auto">
                <h2 className="text-center mx-auto px-4 py-2 bg-secondary dark:bg-white text-white dark:text-tertiary shadow-2xl rounded-xl  md:w-36 md:items-center w-32">
                    OUR BLOG
                </h2>

                <h1 className="text-center text-4xl font-bold text-black dark:text-white mt-8">
                    Latest News & Blog
                </h1>
                {isLoading && <SingleBlogPageSkeleton />}
                {error && <h1>{error.message}</h1>}
                {!isLoading && result.length === 0 && <h3>No Data Found</h3>}
                {!isLoading && result.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-3 gap-5 py-8">
                        {result.map((blog) => (
                            <SingleBlog key={blog._id} blog={blog} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogsPage;
