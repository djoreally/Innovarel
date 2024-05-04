import SingleBlog from "@/components/blogs/SingleBlog";

const BlogsPage = () => {
    return (
        <section className="w-11/12 lg:w-8/12 mx-auto py-20">
            <div className="mx-auto">
                <h2 className="text-center mx-auto px-4 py-2 bg-tertiary dark:bg-white text-white dark:text-tertiary shadow-2xl rounded-xl  md:w-36 md:items-center w-32">
                    OUR BLOG
                </h2>

                <h1 className="text-center text-4xl font-bold text-black dark:text-white mt-8">
                    Latest News & Blog
                </h1>
                <div className="flex flex-col md:flex-row gap-5 py-8">
                    <SingleBlog />
                    <SingleBlog />
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;
