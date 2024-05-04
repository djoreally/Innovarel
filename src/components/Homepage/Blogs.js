import SingleBlog from "../blogs/SingleBlog";

const Blogs = () => {
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
                    <div className="flex flex-col md:flex-row gap-5 py-8">
                        <SingleBlog />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
